import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student/shared/services/student.service';

@Component({
  selector: 'top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
  }

  tName;

  searchByName(){
    if(this.tName == ''){
      this.studentService.getMessageTeacher();
      return;
    }
    this.studentService.sendMessageName(this.tName);
  }

}
