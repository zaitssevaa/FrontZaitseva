import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TourComponent} from "./components/tour/tour.component";
import {AgencyComponent} from "./components/agency/agency.component";
import {AuthComponent} from "./components/auth/auth.component";

const routes: Routes = [
  {path: 'tour', component: TourComponent},
  {path: 'agency', component: AgencyComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TourComponent, AgencyComponent, AuthComponent]


