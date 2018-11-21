import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(
    private commonservice: CommonService,
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      subject: ['', Validators.required],
      day: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.commonservice.getAllSubjects()
      .subscribe(res=>{
        this.subjects = res.json().subject;
      })
  }

  subjects: string[];
  form: FormGroup;

  districts: string[] = [
    "Ampara", "Anuradhapura", "Badulla", "Batticola", "Colombo", 
    "Galle","Gampaha", "Hambanthota", "Jaffna", "Kaluthara",
     "Kandy", "Kegalle","Kilinochchi", "Kurunagala", "Mannar", 
    "Mathale", "Mathara","Monaragala", "Mulativu", "Nuwara Eliya", 
    "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee","Vavuniya", "all"
   ]

   days: string[] = [
     "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
   ]

   get location(){return this.form.get('location')}
   get subject(){return this.form.get('subject')}
   get day(){return this.form.get('day')}
   get name(){return this.form.get('name')}

   onSend(form){
    console.log(form.value);
   }

}
