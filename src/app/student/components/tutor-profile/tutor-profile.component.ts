import { StudentService } from 'src/app/student/shared/services/student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorPrfile } from 'src/app/shared/models/tutor-profile.model';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.scss']
})
export class TutorProfileComponent implements OnInit {

  tutorProfile = {
    firstName: "",
    emial: "",
    lastName: "",
    location: "",
    mobile: "mobile",
  }
  tutorEmail: string;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tutorEmail = params.id;

      this.studentService.getTutorProfile(this.tutorEmail)
      .subscribe(res=>{
        console.log(res.json());
        this.tutorProfile = res.json().profile;
      })
    })
  }



}
