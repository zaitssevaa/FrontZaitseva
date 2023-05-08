import { Component } from '@angular/core';
import {ITour} from "./components/tour/tour";
import {IAgency} from "./components/agency/agency";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'tours';
  tours: ITour[] = [];
  agencys: IAgency[] = [];



}
