import { Component } from '@angular/core';
import {ITour} from "./components/tour/tour";
import {IAgency} from "./components/agency/agency";
import {TourService} from "./components/tour/tour.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'tours';
  tours: ITour[] = [];
  agencys: IAgency[] = [];


  constructor(private tourservice: TourService) {}

  ngOnInit(): void {
    this.tourservice.getTours().subscribe(
      (data: ITour[]) => {
        this.tours = data;
        console.log(data); // выведет полученные данные в консоль
      },
      (error) => {
        console.log(error); // выведет ошибку в консоль
      }
    );
  }

}
