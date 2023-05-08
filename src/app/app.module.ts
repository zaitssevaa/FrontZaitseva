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
import { AuthComponent } from './components/auth/auth.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    TourComponent,
    AgencyComponent,
    routingComponents,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
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
