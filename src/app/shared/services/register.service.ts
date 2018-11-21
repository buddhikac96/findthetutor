import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RegisterService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/register", user);
  }

  profileEditTutor(user) {
    return this.http.post("http://localhost:3000/tutorProfileEdit", user);
  }

  googleRegister(role){
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/google-reg", {"role": role});
  }

  facebokRegister(role){
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/facebook-reg", {"role": role});
  }
}


