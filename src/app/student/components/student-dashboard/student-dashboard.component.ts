import { Component, OnInit } from '@angular/core';
import { FloatingActionButton } from 'ng2-floating-action-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    this.config = {
      placment: 'br',
      effect: 'mfb-slidein',
      iconClass: 'fa fa-comment',
      activeIconClass: 'fa fa-comment',
      toggle: 'hover',
      buttons: this.buttons
    };
  }

  ngOnInit() {
  }

  config;
  buttons: Array<FloatingActionButton> = [
    {
      iconClass: 'fa fa-android',
      onClick: function(){
        console.log("button pressed");
        this.router.navigate(['student/teachers']);
      }
    },
    {
      iconClass: 'fa fa-address-book',
      onClick: function(){
        this.router.navigate(['allrequests']);
      }
    },
    {
      iconClass: 'fa fa-cab',
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
 
 
 
  
}

