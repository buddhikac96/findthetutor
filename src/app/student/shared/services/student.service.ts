import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http } from '@angular/http';
import { TeacherCard, Price } from '../models/teacher-card.model';
import { TutorRequest } from 'src/app/shared/models/request.model';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class StudentService {

    constructor(
        private http: Http,
    ) { }

    teacherList: TeacherCard[] = [];

    d:string = 'all';
    s:string = 'all';

    private subject = new Subject<any>();

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    sendMessageLocation(location: string) {
        this.d = location;
        this.getMessageTeacher();
    }

    sendMessageSubject(subject: string) {
        this.s = subject;
        this.getMessageTeacher();
    }

    getMessageTeacher(){
        console.log(this.d);
        console.log(this.s);
        this.http.post('https://guarded-beyond-19031.herokuapp.com/search', {'district': this.d,'subject': this.s})
        .subscribe(res=>{
            this.teacherList = res.json().user;
            this.subject.next({ teachers: this.teacherList });
        })
    }

    filterTeachers(){
        /* for(var i=0; i<this.teacherList.length; i++){
            if(this.teacherList[i].price < price.max && this.teacherList[i].price > price.min){

            }
        } */
        this.subject.next({teachers: []});
    }   

    getAllTeachers(){
        return this.http.post('https://guarded-beyond-19031.herokuapp.com/search', {'district': 'all', 'subject': 'all'});
    }

    getAllSubjects(){
        return this.http.get('https://guarded-beyond-19031.herokuapp.com/subject');
    }

    getTutorProfile(email: string){
        return this.http.post('https://guarded-beyond-19031.herokuapp.com/viewProfile',{'email': email, 'role':'tutor'});
    }

    sendRequest(request: TutorRequest){
        return this.http.post('https://guarded-beyond-19031.herokuapp.com/makeRequest', request);
    }

    getAllrequests(student){
        return this.http.post('https://guarded-beyond-19031.herokuapp.com/viewMyRequests', {'student': student});
    }

    rateTutor(rate){
        return this.http.post("https://guarded-beyond-19031.herokuapp.com/rate", rate);
    }

    cancelReq(id){
        console.log(id);
        return this.http.post("https://guarded-beyond-19031.herokuapp.com/cancelRequest",id);
    }
 
}
