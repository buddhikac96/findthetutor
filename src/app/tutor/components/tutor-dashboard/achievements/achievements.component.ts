import { AuthService } from './../../../../shared/services/auth.service';
import { TutorService } from './../../../shared/services/tutor-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FloatingActionButton } from 'ng2-floating-action-menu';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  achievements = [];
  achievementForm;
  url = "";
  imageView = false;
  img = "https://i.kinja-img.com/gawker-media/image/upload/s--_DBGLHVf--/c_scale,f_auto,fl_progressive,q_80,w_800/eibgv7kctah62iddzywm.jpg"

  cur_user = this.auth.currentUser.user.email;

  achievement = {
    'tutor': this.auth.currentUser.user.email,
    'name': "",
    'title': "",
    'description': ""
  }

  constructor(
    private fb: FormBuilder,
    private tutorService: TutorService,
    private auth: AuthService,
    private toastr: ToastrManager
  ) {
    this.config = {
      placment: 'br',
      effect: 'mfb-slidein',
      iconClass: 'fa fa-plus',
      activeIconClass: 'fa fa-plus',
      toggle: 'hover',
      buttons: this.buttons,
      label: "Add Achievement"
    };

    this.achievementForm = fb.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    let email = this.auth.currentUser.user.email;
    this.tutorService.getAchievements(email)
      .subscribe(res => {
        console.log(res.json().achievements);
        this.achievements = res.json().achievements;
        console.log(this.achievements);
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

      this.newImage = event.target.files[0];
    }
  }


  addAchievement(form) {
    this.achievement.name = form.value.name;
    this.achievement.description = form.value.content;
    this.achievement.title = form.value.title;
    console.log(this.achievement);
    this.tutorService.addAchievement(this.achievement)
      .subscribe(res => {
        if (res.json().success) {
          console.log(res.json());
          this.toastr.successToastr('Achievement added succesfully');
          this.uploadAchievementImg(res.json().id);
          this.achievements = res.json().achievements;
        } else {
          this.toastr.errorToastr('There is some error in adding an achievement... please try again..!');
        }

      });
    this.achievementForm.reset();
  }

  newImage: File = null;

  uploadAchievementImg(id) {
    const fd = new FormData();

    let file = {
      'image': this.url,
      'id': id
    } 

    this.tutorService.uploadAchievementImage(file)
      .subscribe(res=>{
        console.log("Image uploading");
        console.log(res.json());
      })
  }

  deleteAck(item) {
    this.achievements.splice(this.achievements.indexOf(item), 1);
  }






  // ============ FAB config ============

  config;
  buttons: Array<FloatingActionButton> = [

  ];

  placements = [
    {
      value: 'br',
      key: 'bottom right'
    },
    {
      value: 'bl',
      key: 'bottom left'
    },
    {
      value: 'tr',
      key: 'top right'
    },
    {
      value: 'tl',
      key: 'top left'
    },
  ];

  effects = [
    {
      value: 'mfb-zoomin',
      key: 'Zoom In'
    },
    {
      value: 'mfb-slidein',
      key: 'Slide In + Fade'
    },
    {
      value: 'mfb-fountain',
      key: 'Fountain'
    },
    {
      value: 'mfb-slidein-spring',
      key: 'Slide In (Spring)'
    }
  ];

  toggles = [
    'click',
    'hover'
  ];

}
