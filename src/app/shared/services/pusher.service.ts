import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class PusherService {


  pusher: any;
  messagesChannel: any;

  constructor() {
    this.initializePusher();
  }

  initializePusher(): void {
    this.pusher = new $(environment.pusher.key, {
       authEndpoint: 'https://guarded-beyond-19031.herokuapp.com/pusher/auth' 
    });
    this.messagesChannel = this.pusher.subscribe('private-all-messages');
  }
}

