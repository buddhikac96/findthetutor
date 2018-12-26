import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {


  url = '';

  constructor() { }

  ngOnInit() {
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event) => { 
        this.url = event.target['result'];
      }
    }
  }

  editProfilePicture(){
    console.log("object");
  }

}
