import { Component, OnInit } from '@angular/core';
import { TeacherCard } from 'src/app/student/shared/models/teacher-card.model';
import { StudentService } from 'src/app/student/shared/services/student.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'teacher-card-list',
  templateUrl: './teacher-card-list.component.html',
  styleUrls: ['./teacher-card-list.component.scss']
})
export class TeacherCardListComponent implements OnInit {

  techerList: TeacherCard[] = [];
  isEmpty: boolean = false;

  message: any;
  subcription: Subscription;

  constructor(
    private studentService: StudentService
  ) {
    this.subcription = this.studentService.getMessage().subscribe(list => {
      console.log(list);
      this.techerList = list.teachers;
      if (this.techerList.length === 0) {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
      }
    })

  }

  tempTutors: TeacherCard[] = [];
  pageId = 0;

  ngOnInit() {
    // try {
    //   this.studentService.getAllTeachers()
    //     .subscribe(res => {
    //       this.techerList = res.json().user;
    //       res.json().user.length === 0 ? this.isEmpty = true : this.isEmpty = false;
    //     });
    // } catch (e) {
    //   alert("Something wrong...!");
    // }

    

    /* this.studentService.newSearch(this.pageId)
      .subscribe(res => {
        let arr = [res.json().gold, res.json().silver, res.json().bronze, res.json().nonBoosted];
        for(let i of arr){
          for(let item of i){
            this.tempTutors.push(item);
          }
        }

        console.log(this.tempTutors);

        this.techerList = this.tempTutors;
      }); */


      this.searchTutors(0);


  }

  paginate(p){
    this.pageId = p;
    console.log(this.pageId);
    this.searchTutors(p);
  }



  searchTutors(p){
    this.tempTutors = [];
    this.studentService.newSearch(p)
      .subscribe(res => {
        let arr = [res.json().gold, res.json().silver, res.json().bronze, res.json().nonBoosted];
        for(let i of arr){
          for(let item of i){
            this.tempTutors.push(item);
          }
        }

        console.log(this.tempTutors);

        this.techerList = this.tempTutors;

        // if(this.pageId == 0 && this.techerList.length < 10){
        //   this.enablePagination = false;
        // }
      });
  }

  paginateNext(){
    this.searchTutors(this.pageId + 1);
    this.pageId++;
  }

  paginatePre(){
    if(this.pageId == 0){
      return;
    }
    this.searchTutors(this.pageId - 1);
    this.pageId--;
  }


}
