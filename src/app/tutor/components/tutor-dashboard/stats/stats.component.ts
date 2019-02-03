import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  requestClick(){
    console.log("requests");
  }

}
