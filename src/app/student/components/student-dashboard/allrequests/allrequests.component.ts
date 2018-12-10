import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student/shared/services/student.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-allrequests',
  templateUrl: './allrequests.component.html',
  styleUrls: ['./allrequests.component.scss']
})
export class AllrequestsComponent implements OnInit {

  reqests = [];
  student;

  constructor(
    private studentService: StudentService,
    private auth: AuthService
  ) {
    this.student = auth.currentUser.user.email;
  }

  ngOnInit() {
    console.log(this.student);
    this.studentService.myrequests(this.student)
      .subscribe(res => {
        this.reqests = res.json().request;
        console.log(res.json());
      }, err => {
        console.log(err);
      })
  }

  cancelReq(index){
    this.reqests.splice(index, 1);
    this.studentService.cancelReq(index.id)
      .subscribe(response=>{
      }, err=>{
        alert("Request cancel failed")
      })
  }



}
