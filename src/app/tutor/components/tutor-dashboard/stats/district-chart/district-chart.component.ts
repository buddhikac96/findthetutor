import { Component, OnInit, Input } from '@angular/core';
import { TutorService } from 'src/app/tutor/shared/services/tutor-service.service';

@Component({
  selector: 'app-district-chart',
  templateUrl: './district-chart.component.html',
  styleUrls: ['./district-chart.component.scss']
})
export class DistrictChartComponent implements OnInit {

  @Input() subject;

  constructor(
    private tutorService: TutorService
  ) { }

  ngOnInit() {
    this.tutorService.graphService({'subject': "Mathematics"})
      .subscribe(res => {
        // console.log(res.json().count);
        let chart = {
          data: res.json().count,
          label: 'eTutor'
        };


        for(let i of res.json().count){
          this.chartDatasets[0].data.push(i)
        }
        
        console.log(this.chartDatasets);
      })
  }

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [{data:[], label:'eTutor'}];

  public chartLabels: Array<any> = ["Ampara", "Anuradhapura", "Badulla", "Batticola", "Colombo",
    "Galle", "Gampaha", "Hambanthota", "Jaffna", "Kaluthara",
    "Kandy", "Kegalle", "Kilinochchi", "Kurunagala", "Mannar",
    "Mathale", "Mathara", "Monaragala", "Mulativu", "Nuwara Eliya",
    "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"];


  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)',  
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
