import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { FormBuilder } from '@angular/forms';
import { TutorRequest } from 'src/app/shared/models/request.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { StudentService } from 'src/app/student/shared/services/student.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  @Input() teacherId;
  subjects: string[];
  form;
  student;

  districts: string[] = [
    "Ampara", "Anuradhapura", "Badulla", "Batticola", "Colombo", "Galle", "Gampaha", "Hambanthota", "Jaffna", "Kaluthara",
    "Kandy", "Kegalle", "Kilinochchi", "Kurunagala", "Mannar","Mathale", "Mathara", "Monaragala", "Mulativu", "Nuwara Eliya",
    "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya", "all"
  ]

  days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  constructor(
    private commonservice: CommonService,
    private fb: FormBuilder,
    private auth: AuthService,
    private studentService: StudentService
  ) {
    this.form = this.fb.group({
      location: [''],
      subject: [''],
      day: [''],
    });
    this.student = this.auth.currentUser.user.email;
  }

  get location() { return this.form.get('location') }
  get subject() { return this.form.get('subject') }
  get day() { return this.form.get('day') }

  ngOnInit() {
    this.commonservice.getAllSubjects()
      .subscribe(res => {
        this.subjects = res.json().subject;
      })
  }

  onSend(form) {
    let fd = form.value;
    console.log(fd);
    let request = new TutorRequest(fd.location, fd.subject, fd.day, this.teacherId, this.student);
    console.log(request);
    this.studentService.sendRequest(request)
      .subscribe(response=>{
        console.log(response);
      }, err=>{
        console.log(err);
        alert("request sending error");
      })
  }

}
