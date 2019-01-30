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
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/viewAllRequests', {'tutor':email});
  }

  addAchievement(achievment){
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/addAchievement', achievment);
  }

  getAchievements(email){
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/getAchievements', {'tutor':email});
  }

  deleteAchievement(p){
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/deleteAchievement', p);
  }

  hideAchievement(p){
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/toggleAchievement', p);
  }

  acceptRequests(id){
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/acceptRequest', {'id':id});
  }

  rejectRequests(id){
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/rejectRequest', {'id':id});
  }





}
