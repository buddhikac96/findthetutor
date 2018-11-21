import { Component, OnInit, Input } from '@angular/core';
import { TeacherCard } from 'src/app/student/shared/models/teacher-card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.scss']
})
export class TeacherCardComponent implements OnInit {

  @Input() teacher: TeacherCard

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
}
