import { Http } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClassRoomService } from 'src/app/tutor/shared/services/classroom.service';
import { FloatingActionButton } from 'ng2-floating-action-menu';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private gcl: ClassRoomService,
    private http: Http,
    private toastr: ToastrManager
  ) { 
    this.config = {
      placment: 'br',
      effect: 'mfb-slidein',
      iconClass: 'fa fa-plus',
      activeIconClass: 'fa fa-plus',
      toggle: 'hover',
      buttons: this.buttons,
      label: 'Add Classroom'
    };

    this.newclassForm = this.fb.group({
      classname: [''],
      section: [''],
      description: ['']
    })
  }

  auth: boolean = false;
  authClicked = false;
  token;
  courses;
  viewCourses = false;
  classes = [];
  newclassForm;

  ngOnInit() {
    if (localStorage.getItem('gcrToken')) {
      this.token = localStorage.getItem('gcrToken');
      this.auth = true;
      console.log(this.token);

      this.gcl.classList({ 'token': this.token, 'refresh': localStorage.getItem('refresh') })
        .subscribe(res => {
          console.log(res.json());
          if(res.json().success){
            this.viewCourses = true;
            this.classes = res.json().courses;
            localStorage.setItem('refresh', res.json().refresh);
          }
        })
    } 
  }

  getAuthToken() {
    this.authClicked = true;
    this.auth = true;
    this.gcl.authUser()
      .subscribe(res => {
        console.log(res.json());
        window.open(res.json().url, "_blank");
      })
  }

  authUser() {
    localStorage.setItem('gcrToken', this.token);
    console.log(this.token);
    this.authClicked = false;
    this.viewCourses = true;
    
    this.gcl.classList( {'token': this.token, 'refresh': localStorage.getItem('refresh')})
      .subscribe(res => {
        console.log(res.json());
        localStorage.setItem('refresh', res.json().refresh);
        this.viewCourses = true;
        this.classes = res.json().courses;
      })
  }

  gotoClass(link){
    window.open(link, "_blank");
  }


  createNewClass(form){
    let course = {
      'refresh': localStorage.getItem('refresh'),
      'name' : form.value.classname,
      'section': form.value.section
    }

    this.gcl.createClass(course)
      .subscribe(res=>{
        console.log(res.json());
        if(res.json().success){
          this.toastr.successToastr('Course created successfully');
        }else{
          this.toastr.errorToastr('There was some error in creatng new class.. Please try again..!');
          localStorage.removeItem('refresh');
        }
      })
  }













  config;
  buttons: Array<FloatingActionButton> = [
    
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