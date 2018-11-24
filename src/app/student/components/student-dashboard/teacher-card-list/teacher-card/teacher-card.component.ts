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
  }
}
