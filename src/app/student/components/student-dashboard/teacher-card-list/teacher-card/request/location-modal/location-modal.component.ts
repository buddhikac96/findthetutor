import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student/shared/services/student.service';

@Component({
  selector: 'app-location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.scss']
})
export class LocationModalComponent implements OnInit {

  districtsF: string[] = [
    "Ampara", "Anuradhapura", "Badulla", "Batticola", "Colombo", 
    "Galle","Gampaha", "Hambanthota", "Jaffna", "Kaluthara",
     "Kandy", "Kegalle","Kilinochchi", "Kurunagala", "Mannar", 
    "Mathale", "Mathara","Monaragala", "Mulativu", "Nuwara Eliya", 
    "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee","Vavuniya", "all"
   ]
 
   constructor(
     private studentService: StudentService
   ) { }
 
   ngOnInit() {
   }
 
 
   locationButtonValue: string = "Location";
 
   onLocationClicked(location: string){
     if(location === "all"){
       this.locationButtonValue = "Location"
     }else{
       this.locationButtonValue = location;
     }
   }

}
