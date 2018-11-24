import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorPrfile } from 'src/app/shared/models/tutor-profile.model';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.scss']
})
export class TutorProfileComponent implements OnInit {

  tutorProfile: TutorPrfile;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      //get all the teacher details using teacher id
    })

  }

}
