import { FormBuilder, Validators } from '@angular/forms';
import { TutorService } from './../../../../shared/services/tutor-service.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

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

  hide = this.hideStatus == 0 ? false : true;

  @Output()
  delete = new EventEmitter<Object>();

  deleteComplete() {
    this.delete.emit(this.item);
  }

  achievementForm;

  constructor(
    private tutorService: TutorService,
    fb: FormBuilder
  ) {
    this.achievementForm = fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
   
  }
  


  hideAch() {
    let p = this.hideStatus == 1 ? 0 : 1;
    this.hide = !this.hide;
    this.tutorService.hideAchievement({ 'id': this.id, 'hide': p })
      .subscribe(res => {
        console.log(res.json());
      })
  }

  deleteAch() {
    this.tutorService.deleteAchievement({ 'id': this.id, 'tutor': this.tutor })
      .subscribe(res => {
        console.log(res.json());
        this.deleteComplete();
      })
  }

  editAch() {
  }

  

}
