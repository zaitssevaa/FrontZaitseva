import {Component, OnInit} from '@angular/core';
import {TourService} from "./tour.service";
import {ITour} from "./tour";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  public tours: ITour[]=[];
  constructor(private _tourservice: TourService) { }

  ngOnInit(): void {
    this._tourservice.getTours().subscribe(data => this.tours = data);
  }

}
