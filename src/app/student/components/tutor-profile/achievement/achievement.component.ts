import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from 'src/app/student/shared/services/student.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.studentService.getAchievements(this.email)
      .subscribe(res=>{
        console.log(res.json());
        this.achievements = res.json().achievements;
      })
  }

  @Input() email;

  achievements;

}
