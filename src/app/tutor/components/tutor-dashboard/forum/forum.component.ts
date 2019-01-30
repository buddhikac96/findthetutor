import { Component, OnInit } from '@angular/core';
import { ChatAdapter } from 'ng-chat';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'app';
  userId = 999;

  // public adapter: ChatAdapter = new MyAdapter();

}
