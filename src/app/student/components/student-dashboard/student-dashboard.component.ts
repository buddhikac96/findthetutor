import { Component, OnInit } from '@angular/core';
import { FloatingActionButton } from 'ng2-floating-action-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  ngOnInit() {
  }

  config;
  buttons: Array<FloatingActionButton> = [
    {
      iconClass: 'ion-social-github',
      label: 'follow me on github',
      onClick: function(){
        console.log("Github");
      }
    },
    {
      iconClass: 'ion-social-facebook',
      label: 'follow me on facebook',
      onClick: function(){
 
      }
    },
    {
      iconClass: 'ion-social-linkedin',
      label: 'linkedin',
      onClick: function(){
 
      }
    },
  ];
 
  placements = [
    {
      value: 'br',
      key: 'bottom right'
    },
    {
      value: 'bl',
      key: 'bottom left'
    },
    {
      value: 'tr',
      key: 'top right'
    },
    {
      value: 'tl',
      key: 'top left'
    },
  ];
 
  effects = [
    {
      value: 'mfb-zoomin',
      key: 'Zoom In'
    },
    {
      value: 'mfb-slidein',
      key: 'Slide In + Fade'
    },
    {
      value: 'mfb-fountain',
      key: 'Fountain'
    },
    {
      value: 'mfb-slidein-spring',
      key: 'Slide In (Spring)'
    }
  ];
 
  toggles = [
    'click',
    'hover'
  ];
 
 
 
  constructor(
    private router: Router
  ) {
    this.config = {
      placment: 'br',
      effect: 'mfb-slidein',
      iconClass: 'ion-plus-round',
      activeIconClass: 'ion-close-round',
      toggle: 'hover',
      buttons: this.buttons
    };
  }
}

