import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() student;
  @Input() title;
  @Input() desc;
  @Input() img;


}
