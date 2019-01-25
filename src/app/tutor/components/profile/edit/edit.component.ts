import { TutorService } from './../../../shared/services/tutor-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor-profile-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class TutorProfileEditComponent implements OnInit {

  constructor(
    private tutorService: TutorService
  ) { }

  ngOnInit() {
    this.tutorService.getAllSubjects()
      .subscribe(res => {
        this.subjects = res.json().subject;
      })
  }

  districts: string[] = [
    "Ampara", "Anuradhapura", "Badulla", "Batticola", "Colombo",
    "Galle", "Gampaha", "Hambanthota", "Jaffna", "Kaluthara",
    "Kandy", "Kegalle", "Kilinochchi", "Kurunagala", "Mannar",
    "Mathale", "Mathara", "Monaragala", "Mulativu", "Nuwara Eliya",
    "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya", "all"
  ]

  subjects = []

  selectedDistricts = []
  selectedSubjects = []

  addLocation(item){
    this.selectedDistricts.push(item);
  }

  removeLocation(item){
    this.selectedDistricts.splice(this.selectedSubjects.indexOf(item), 1);
  }

  addSubject(item){
    this.selectedSubjects.push(item);
  }

  removeSubject(item){
    this.selectedSubjects.splice(this.selectedSubjects.indexOf(item), 1);
  }

}
