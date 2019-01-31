import { Component, OnInit, Input } from '@angular/core';
import { TutorService } from 'src/app/tutor/shared/services/tutor-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  form;
  @Input() fname;
  @Input() lname;
  @Input() mobile;
  @Input() available;
  @Input() subject;
  @Input() location;
  @Input() price;
  @Input() desc;


  constructor(
    private tutorService: TutorService,
    private fb: FormBuilder,
    private auth:AuthService
  ) { 
    this.form = fb.group({
      fname:[this.fname, Validators.required],
      lname:[this.lname, Validators.required],
      mobile:[this.mobile, Validators.required],
      available:[this.available, Validators.required],
      subject:[this.subject, Validators.required],
      location:[this.location, Validators.required],
      price:[this.price, Validators.required],
      desc:[this.desc, Validators.required],
    });
  }

  ngOnInit() {
    this.tutorService.getAllSubjects()
      .subscribe(res => {
        this.subjects = res.json().subject;
      });
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
  }

  removeLocation(item){
  }

  addSubject(item){
  }

  removeSubject(item){
  }




  editStage = false;

  updateProfile(form){
   
  }

  editProfile(){
   
  }

}
