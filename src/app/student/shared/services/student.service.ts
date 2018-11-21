import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http } from '@angular/http';
import { TeacherCard } from '../models/teacher-card.model';

@Injectable()
export class StudentService {

    constructor(
        private http: Http
    ) { }

    teacherList: TeacherCard[] = [];
    d:string = 'all';
    s:string = 'all';
    searchObject = {'district': this.d, 'subject':this.s};

    @Output() change: EventEmitter<TeacherCard[]> = new EventEmitter();

   
    getTeachers() {
        return this.http.post('https://guarded-beyond-19031.herokuapp.com/search', {'district': this.d,'subject': this.s})
            .subscribe(response=>{
                this.teacherList = response.json().user;
                this.change.emit(this.teacherList);
            });
    }

    getAllTeachers(){
        return this.http.post('https://guarded-beyond-19031.herokuapp.com/search', {'district': 'all', 'subject': 'all'});
    }

    getAllSubjects(){
        return this.http.get('https://guarded-beyond-19031.herokuapp.com/subject');
    }

    getTutorProfile(email: string){
        return this.http.get('https://guarded-beyond-19031.herokuapp.com/subject');
    }

}
