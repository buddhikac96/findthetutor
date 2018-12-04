import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student/shared/services/student.service';
import { TutorRequest } from 'src/app/shared/models/request.model';

@Component({
  selector: 'app-allrequests',
  templateUrl: './allrequests.component.html',
  styleUrls: ['./allrequests.component.scss']
})
export class AllrequestsComponent implements OnInit {

  reqests = [];

  constructor(
    private studentService: StudentService
  ) {
    this.studentService.myrequests()
      .subscribe(res=>{
        this.reqests = res.json().reqest;
        console.log(this.reqests);
      },err=>{
        console.log(err);
      })
  }

  ngOnInit() {
  }



}
