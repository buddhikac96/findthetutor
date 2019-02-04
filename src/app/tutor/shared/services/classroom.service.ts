import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ClassRoomService {

  constructor(
    private http: Http
  ) { }

  authUser(){
    return this.http.get("https://guarded-beyond-19031.herokuapp.com/auth");
  }

  classList(token){
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/listCourses", token);
  }

  createClass(token){
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/createCourse", token);
  }

}