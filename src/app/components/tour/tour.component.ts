import { Component, OnInit } from '@angular/core';
import { TourService } from './tour.service';
import { ITour } from './tour';
import { Router } from '@angular/router'; // import the Router module

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  public tours: ITour[] = [];
  viewType: string = 'table';
  public searchTerm: string = '';

  constructor(
    private _tourservice: TourService,
    private router: Router // inject the Router
  ) { }

  ngOnInit(): void {
    this._tourservice.getTours().subscribe(data => this.tours = data);
  }

  searchTour(): void {
    if (this.searchTerm.trim()) {
      this._tourservice.searchTour(this.searchTerm).subscribe(data => this.tours = data);
    }
  }

  goToDetails(id: number) {
    this.router.navigate(['/tourdetails', id]); // use the router to navigate to the details page
  }
}
