import { TutorService } from './../../../shared/services/tutor-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-tutor-profile-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class TutorProfileEditComponent implements OnInit {
 

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


  //tutor edit details


  editStage = false;

  updateProfile(form){
    this.editStage = false;
    console.log(form.value);
    let email = this.auth.currentUser.user.email;
    let f = form.value;
    
    let user = {
      'fname': f.fname,
      'lname': f.lname,
      'desc': f.desc,
      'mobile': f.mobile,
      'subject': this.selectedSubjects[0],
      'location': this.selectedDistricts[0],
      'price': f.price,
      'available': this.available,
      'role':'tutor',
      'email':email
    };

    this.tutorService.editProfile(user)
      .subscribe(res=>{
        console.log(res.json());
      })
  }

  editProfile(){
    this.editStage = true;
    this.form.patchValue({
      fname: this.fname,
      lname: this.lname,
      mobile: this.mobile,
      price: this.price,
      location: this.location,
      subject: this.subject,
      available: this.available,
      desc: this.desc,
    })
  }

}
