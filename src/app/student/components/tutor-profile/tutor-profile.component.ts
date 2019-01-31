import { Component, OnInit } from '@angular/core';
import { TutorPrfile } from 'src/app/shared/models/tutor-profile.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TutorService } from 'src/app/tutor/shared/services/tutor-service.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.scss']
})
export class StudentTutorProfileComponent implements OnInit {

  tutorProfile: TutorPrfile;
  url = ""
  imageView = false;

  tutor = {
    email: "",
    name: "",
    mobile: "",
    location: "",
    subject: "",
    time: "",
    price: "",
    imgUrl: "",
    fname: "",
    lname: ""
  }

  reviews = []


  constructor(
    private tutorService: TutorService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let email = this.activatedRoute.snapshot.paramMap.get('id')
    this.tutorService.getTutorProfile(email)
      .subscribe(res => {
        let user = res.json().profile;
        this.tutor.email = user.email;
        this.tutor.name = user.firstName + " " + user.lastName;
        this.tutor.mobile = user.mobile;
        this.tutor.location = user.location;
        this.tutor.subject = user.subject;
        this.tutor.time = user.time;
        this.tutor.time = user.available;
        this.tutor.price = user.price;
        this.tutor.imgUrl = user.imgUrl;
        this.tutor.fname = user.firstName;
        this.tutor.lname = user.lastName;

        this.reviews = res.json().reviews;
        console.log(res.json().reviews);
      })
  }

  img: File;

  updateImage() {
    
  }

  onSelectFile(event) {
  }








}
