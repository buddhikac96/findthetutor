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
    subject: "",
    time: "",
    price: "",
    imgUrl: "",
    fname: "",
    lname: "",
    description: ""
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
        this.tutor.time = user.available;
        this.tutor.price = user.price;
        this.tutor.imgUrl = user.imgUrl;
        this.tutor.fname = user.firstName;
        this.tutor.lname = user.lastName;
        this.tutor.description = user.description;

        this.reviews = res.json().reviews;
        // console.log(res.json().reviews);
        console.log(res.json().profile);
      })
  }

  img: File = null;

  updateImage() {
    if (this.img === null) {
      console.log("null image");
      return
    }

    console.log("update image");
    console.log(this.img);

    let img = {'image': this.url, 'email':this.tutor.email, 'role':'tutor'}

    this.tutorService.uploadImage(img)
      .subscribe(res=>{
        console.log(res.json());
      })


  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = event.target['result'];
      }
      this.imageView = true;
      this.img = event.target.files[0];
    }

  }





}
