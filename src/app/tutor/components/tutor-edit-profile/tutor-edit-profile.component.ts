import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../shared/services/tutor-service.service';
import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-tutor-edit-profile',
  templateUrl: './tutor-edit-profile.component.html',
  styleUrls: ['./tutor-edit-profile.component.scss']
})
export class TutorEditProfileComponent implements OnInit {

  form;
  subjects: string[];
  selectedSubjects: string[] = [];
  districts: string[] = [
    "Ampara", "Anuradhapura", "Badulla", "Batticola", "Colombo", 
    "Galle","Gampaha", "Hambanthota", "Jaffna", "Kaluthara",
     "Kandy", "Kegalle","Kilinochchi", "Kurunagala", "Mannar", 
    "Mathale", "Mathara","Monaragala", "Mulativu", "Nuwara Eliya", 
    "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee","Vavuniya", "all"
   ];
   selectedDistrics: string[] = [];
   price = 0;


  constructor(
    private tutorService: TutorService,
    private fb: FormBuilder,
  ) {
    this.form = fb.group({
      fname: [],
      lname: [],
      subjects: []
    });
   }

  ngOnInit() {
    this.tutorService.getAllSubjects()
      .subscribe(response => {
        console.log(response.json());
        this.subjects = response.json().subject;
      })
  }

  uploadImage(){
    console.log('upload image');
  }

  addSelectedSubject(item){
    this.selectedSubjects.push(item);
  }

  deleteSelectedSubject(item){
    this.selectedSubjects.splice(this.selectedSubjects.indexOf(item), 1);
  }

  addSelectedDistric(item){
    this.selectedDistrics.push(item);
  }

  deleteSeletedDistric(item){
    this.selectedDistrics.splice(this.selectedDistrics.indexOf(item), 1);
  }

  updatePrice(price){
    console.log(price);
  }
}
