import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achieve',
  templateUrl: './achieve.component.html',
  styleUrls: ['./achieve.component.scss']
})
export class AchieveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  hideAch(){
    console.log('hide')
  }

  deleteAch(){
    console.log('delete')
  }

  editAch(){
    console.log('edit')
  }

}
