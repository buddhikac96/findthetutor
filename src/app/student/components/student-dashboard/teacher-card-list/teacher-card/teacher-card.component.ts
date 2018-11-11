import { Component, OnInit, Input } from '@angular/core';
import { TeacherCard } from 'src/app/student/shared/models/teacher-card.model';

@Component({
  selector: 'teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.scss']
})
export class TeacherCardComponent implements OnInit {

  @Input() teacher: TeacherCard

  constructor() { }

  ngOnInit() {
  }

}
