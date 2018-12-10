import { Component, OnInit } from '@angular/core';
import { TeacherCard } from 'src/app/student/shared/models/teacher-card.model';
import { StudentService } from 'src/app/student/shared/services/student.service';

@Component({
  selector: 'teacher-card-list',
  templateUrl: './teacher-card-list.component.html',
  styleUrls: ['./teacher-card-list.component.scss']
})
export class TeacherCardListComponent implements OnInit {

  techerList: TeacherCard[] = [];
  isEmpty: boolean = false;
  loading: boolean = true;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.studentService.getAllTeachers()
      .subscribe(res=>{
        this.techerList = res.json().user;
        res.json().user.length === 0? this.isEmpty = true: this.isEmpty = false;
      })
    this.loading = false;
  }

  getTeachers() {
    console.log(this.techerList)
    this.studentService.change.subscribe(response=>{
      this.techerList = response;
      response.length === 0? this.isEmpty = true: this.isEmpty = false;
    })
  }

}
