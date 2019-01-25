import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TutorService {

  constructor(
    private http: Http
  ) { }

  getAllSubjects(){
    return this.http.get("https://guarded-beyond-19031.herokuapp.com/subject");
  }

  getTutorProfile(email: String){
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/viewProfile', {'email': email, 'role': 'tutor'});
  }

  getAllRequests(email){
    return this.http.get('https://guarded-beyond-19031.herokuapp.com/viewAllRequests%{email}');
  }
}
