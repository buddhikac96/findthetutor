import { Component, OnInit } from '@angular/core';
import { PusherService } from 'src/app/shared/services/pusher.service';

interface Message {
  text: string;
  user: string;
}

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

 /*  messages: Array<Message>;
  constructor(
    private pusherService: PusherService
  ) {
    this.messages = [];
  }

  ngOnInit() {
    this.pusherService.messagesChannel.bind('client-new-message', (message) => {
      this.messages.push(message);
    });
  }

  sendMessage(user: string, text: string) {
    const message: Message = {
       user: user,
       text: text,
    }
    this.pusherService.messagesChannel.trigger('client-new-message', message);
    this.messages.push(message);
  } */

  ngOnInit(){}
   
}
