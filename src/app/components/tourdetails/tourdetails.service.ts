import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {ITour} from "./tourdetails";

@Injectable()
export class TourdetailsService {
  constructor(private http: HttpClient) {
  }

  getTourById(id: number): Observable<ITour> {
    return this.http.get<ITour>(`http://localhost:5232/api/Tours/GetTourID/${id}`).pipe(
      tap((response) => console.log(response))
    );
  }


}
