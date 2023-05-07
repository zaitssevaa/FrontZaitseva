import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITour} from "./tour";

@Injectable()
export class TourService{

  constructor(private http: HttpClient){}

  getTours(): Observable<ITour[]>
  {
    return this.http.get<ITour[]>("http://localhost:5232/api/Tours/GetAllTour");
  }
}
