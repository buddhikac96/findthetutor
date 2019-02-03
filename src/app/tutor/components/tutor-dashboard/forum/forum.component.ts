import { Http } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClassRoomService } from 'src/app/tutor/shared/services/classroom.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private gcl: ClassRoomService,
    private http: Http
  ) { }

  auth: boolean = false;
  authClicked = false;
  token;
  courses;
  viewCourses = false;

  ngOnInit() {
    if (localStorage.getItem('gcrToken')) {
      this.token = localStorage.getItem('gcrToken');
      this.auth = true;
      this.gcl.classList({ 'token': this.token })
        .subscribe(res => {
          console.log(res.json());
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
    this.authClicked = false;
    this.viewCourses = true;
    
    this.gcl.classList( {'token': this.token })
      .subscribe(res => {
        console.log(res.json());
      })
  }



}