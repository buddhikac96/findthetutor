import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { TutorService } from 'src/app/tutor/shared/services/tutor-service.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  news = [];

  constructor(
    private tutorService: TutorService
  ) { }

  ngOnInit() {
    this.getNews();
  }

  requestClick(){
    console.log("requests");
  }


  getNews(){
    this.tutorService.getNews()
      .subscribe(res=>{
        this.news = res.json().news;
      })
  }

}
