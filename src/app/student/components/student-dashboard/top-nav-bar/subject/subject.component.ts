import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student/shared/services/student.service';

@Component({
  selector: 'model-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  subjectsF: string[] = [];
 
   constructor(
     private studentService: StudentService
   ) { }
 
   ngOnInit() {
     this.studentService.getAllSubjects()
      .subscribe(response=>{
        this.subjectsF = response.json().subject;
      })
   }
 
 
   subjectButtonValue: string = "Subject";
 
   onLocationClicked(subject: string){
     if(subject === "all"){
       this.subjectButtonValue = "Subject";
     }else{
       this.subjectButtonValue = subject;
     }

     this.studentService.sendMessageSubject(subject);
   }

}
