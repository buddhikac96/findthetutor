import { FormBuilder, Validators } from '@angular/forms';
import { TutorService } from './../../../../shared/services/tutor-service.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-achieve',
  templateUrl: './achieve.component.html',
  styleUrls: ['./achieve.component.scss']
})
export class AchieveComponent implements OnInit {

  @Input() name;
  @Input() content;
  @Input() img;
  @Input() id;
  @Input() tutor;
  @Input() hideStatus;
  @Input() title;

  @Input() item;

  hide;
  

  @Output()
  delete = new EventEmitter<Object>();

  deleteComplete() {
    this.delete.emit(this.item);
  }

  achievementForm;

  constructor(
    private tutorService: TutorService,
    fb: FormBuilder,
    private toastr: ToastrManager
  ) {
    this.achievementForm = fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.hide = this.hideStatus == 0 ? false : true;
  }
  


  hideAch() {
    let p = this.hideStatus == 1 ? 0 : 1;
    this.hide = !this.hide;
    this.tutorService.hideAchievement({ 'id': this.id, 'hide': p })
      .subscribe(res => {
        if(res.json().success){
          this.toastr.successToastr('Achievement hide succesfully..!');
        }else{
          this.toastr.errorToastr('There is some error in hiding achievement... Please try again..!');
        }
      })
  }

  deleteAch() {
    this.tutorService.deleteAchievement({ 'id': this.id, 'tutor': this.tutor })
      .subscribe(res => {
        if(res.json().success){
          this.toastr.successToastr('Successfully deleted achievement!');
        }else{
          this.toastr.errorToastr('There is some error in deleting achievement.. Please try again..!');
        }
        this.deleteComplete();
      })
  }

  editAch() {
  }

  

}
