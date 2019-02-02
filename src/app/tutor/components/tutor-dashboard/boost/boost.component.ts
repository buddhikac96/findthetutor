import { AuthService } from './../../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/tutor/shared/services/tutor-service.service';

@Component({
  selector: 'app-boost',
  templateUrl: './boost.component.html',
  styleUrls: ['./boost.component.scss']
})
export class BoostComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private tutorService: TutorService
  ) { }

  ngOnInit() {
    let tutor = { 'tutor': this.auth.currentUser.user.email }
    this.tutorService.boost(tutor)
      .subscribe(result => {
        let res = result.json();
        this.boosted = res.boost;

        this.pack1 = res.packages[0];
        this.pack2 = res.packages[1];
        this.pack3 = res.packages[2];

        if (this.boosted) {
          this.tutorService.getCount(tutor)
            .subscribe(result => {
              let res = result.json();
              if (res.success === false) {
                console.log("reaches route has some problem");
                return;
              }
              this.reaches = res.count % 100000;
              console.log(this.reaches);
            });
        }
      });
  }



  boosted: Boolean = false;


  pack1 = null;
  pack2 = null;
  pack3 = null;

  boostUser;
  reaches;


  boostProfile(pac) {
    let boost = {
      'tutor': this.auth.currentUser.user.email,
      'package': pac
    }
    this.tutorService.acceptBoost(boost)
      .subscribe(res => {
        console.log(res.json());
        alert(res.json().msg);
      })
  }

}