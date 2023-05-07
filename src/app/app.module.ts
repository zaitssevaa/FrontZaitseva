import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { TourComponent } from './components/tour/tour.component';
import {TourService} from "./components/tour/tour.service";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgencyComponent } from './components/agency/agency.component';
import {AgencyService} from "./components/agency/agency.service";


@NgModule({
  declarations: [
    AppComponent,
    TourComponent,
    AgencyComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [
    TourService,
    AgencyService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
