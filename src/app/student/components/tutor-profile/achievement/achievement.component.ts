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
      .subscribe(res => {
        let arr = res.json().achievements;
        for(let item of arr){
          if(item.hide == 1){
            arr.splice(arr.indexOf(item), 1);
          }
        }
        this.achievements = arr;
        console.log(this.achievements);
      });
  }

  @Input() email;
  @Input() image;

  achievements = [];

}
