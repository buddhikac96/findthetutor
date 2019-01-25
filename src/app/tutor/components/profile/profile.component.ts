import { AuthService } from 'src/app/shared/services/auth.service';
import { TutorPrfile } from './../../../shared/models/tutor-profile.model';
import { TutorService } from './../../shared/services/tutor-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class TutorProfileComponent implements OnInit {

  tutorProfile: TutorPrfile;
  url = ""
  imageView = false;

  tutor = {
    email: "",
    name: "",
    mobile: "",
    location: "",
    subject: ""
  }

  review = {
    date: "",
    studentName: "",
    content: "",
    studentImgUrl: "",
  }

  reviews = []


  constructor(
    private tutorService: TutorService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    var email = this.authService.currentUser.user.email;
    this.tutorService.getTutorProfile(email)
      .subscribe(res => {
        let user = res.json().profile;
        this.tutor.email = user.email;
        this.tutor.name = user.firstName + " " + user.lastName;
        this.tutor.mobile = user.mobile;
        this.tutor.location = user.location;
        this.tutor.subject = user.subject;

        this.reviews = res.json().reviews;
        console.log(this.reviews);
      })
  }

  updateImage() {
    console.log("update image");
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = event.target['result'];
      }
      this.imageView = true;
    }
  }



}
