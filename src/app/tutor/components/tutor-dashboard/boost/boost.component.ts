import { AuthService } from './../../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/tutor/shared/services/tutor-service.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-boost',
  templateUrl: './boost.component.html',
  styleUrls: ['./boost.component.scss']
})
export class BoostComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private tutorService: TutorService,
    private toastr: ToastrManager
  ) { }

  ngOnInit() {
    let tutor = { 'tutor': this.auth.currentUser.user.email }
    this.tutorService.boost(tutor)
      .subscribe(result => {
        let res = result.json();
        this.boosted = res.boost;
        this.boostData = res.data;


        this.pack1 = res.packages[0];
        this.pack2 = res.packages[1];
        this.pack3 = res.packages[2];

        if (this.boosted) {
          this.tutorService.getCount(tutor)
            .subscribe(result => {
              let res = result.json();
              if (res.success === false) {
                this.toastr.warningToastr('Couting reaches has some problem.. Please check your connection..!');
                return;
              }
              this.reaches = res.count % 100000;
            });
        }
      });
  }


  boostData = null;

  boosted: Boolean = false;

  pack1 = null;
  pack2 = null;
  pack3 = null;

  reaches;


  boostProfile(pac) {
    let boost = {
      'tutor': this.auth.currentUser.user.email,
      'package': pac
    }
    this.tutorService.acceptBoost(boost)
      .subscribe(res => {
        if(res.json().success){
          this.toastr.successToastr("Your profile boosted successfully");
        }else{
          this.toastr.warningToastr(res.json().msg);
        }
      })
  }


  renewBoost(){
    let boost = {
      'tutor' : this.auth.currentUser.user.email,
      'end': this.boostData.expiryDate.substring(0,10)
    }

    this.tutorService.renewBoost(boost)
      .subscribe(res=>{
        if(res.json().success){
          this.toastr.successToastr('Your profile renewed succesfully..!');
          this.boostData.remaining += 7;
        }else{
          this.toastr.errorToastr('There is some error in renewing your profile.. Please try again..!');
        }
      })
  }

}