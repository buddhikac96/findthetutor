import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../shared/services/tutor-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-tutor-edit-profile',
  templateUrl: './tutor-edit-profile.component.html',
  styleUrls: ['./tutor-edit-profile.component.scss']
})
export class TutorEditProfileComponent implements OnInit {

  form;
  subjects: string[];
  districts: string[] = [
    "Ampara", "Anuradhapura", "Badulla", "Batticola", "Colombo",
    "Galle", "Gampaha", "Hambanthota", "Jaffna", "Kaluthara",
    "Kandy", "Kegalle", "Kilinochchi", "Kurunagala", "Mannar",
    "Mathale", "Mathara", "Monaragala", "Mulativu", "Nuwara Eliya",
    "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya", "all"
  ];
  selectedSubjects: string[] = [];
  selectedDistrics: string[] = [];
  price = 0;
  tutor;

  constructor(
    private tutorService: TutorService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.tutor = authService.currentUser.user;
    this.form = fb.group({
      fname: [this.tutor.FirstName, Validators.required],
      lname: [this.tutor.LastName, Validators.required],
      subjects: []
    });
    console.log(this.tutor);
    
  }

  ngOnInit() {
    this.tutorService.getAllSubjects()
      .subscribe(response => {
        this.subjects = response.json().subject;
      });

  }

  addSelectedSubject(item) {
    this.selectedSubjects.push(item);
  }

  deleteSelectedSubject(item) {
    this.selectedSubjects.splice(this.selectedSubjects.indexOf(item), 1);
  }

  addSelectedDistric(item) {
    this.selectedDistrics.push(item);
  }

  deleteSeletedDistric(item) {
    this.selectedDistrics.splice(this.selectedDistrics.indexOf(item), 1);
  }


  get lname(){return this.form.get('lname')}

  onSubmit(form){
    console.log(form.value);
  }
}
