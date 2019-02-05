import { Component, OnInit, Input } from '@angular/core';
import { TeacherCard } from 'src/app/student/shared/models/teacher-card.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.scss']
})
export class TeacherCardComponent implements OnInit {

  @Input() teacher: TeacherCard;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  isLogged: boolean = this.auth.isLogged();

  ngOnInit() {
    if(this.teacher.package == null){
      this.packageCss = "white-black";
    }else if(this.teacher.package === "gold"){
      this.packageCss = "rgba-orange-light";
    }else if(this.teacher.package === "silver"){
      this.packageCss = "rgba-blue-grey-light";
    }else if(this.teacher.package === "bronze"){
      this.packageCss = "rgba-brown-light";
    }
  }

  packageCss;
  
}
