import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boost',
  templateUrl: './boost.component.html',
  styleUrls: ['./boost.component.scss']
})
export class BoostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  boostProfile(pac){
    console.log(pac);
  }

}
