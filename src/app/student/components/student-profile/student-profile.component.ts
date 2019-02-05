import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/services/student.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {


  url = '';
  imageView = false;




  email = "";
  image = "";
  location = "";
  name = "";
  mobile = "";



  constructor(
    private studentService: StudentService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.studentService.getStudentProfile(this.auth.currentUser.user.email)
      .subscribe(res => {
        console.log(res.json().profile);
        this.name = res.json().profile.name;
        this.email = res.json().profile.email;
        this.mobile = res.json().profile.mobile;
        this.location = res.json().profile.location;
        this.email = res.json().profile.email;
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

    let img = { 'image': this.url, 'email': this.auth.currentUser.user.email, 'role': 'student' }
    console.log(img);

    this.studentService.uploadImage(img)
      .subscribe(res => {
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
