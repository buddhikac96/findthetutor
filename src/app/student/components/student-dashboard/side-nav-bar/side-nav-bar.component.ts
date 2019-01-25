import { StudentService } from './../../../shared/services/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
  }

  pMin = 0;
  pMax = 9999999;
  time = "all";

  filter(){
    this.studentService.filterTeachers();
  }


}
