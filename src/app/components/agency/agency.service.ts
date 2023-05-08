import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {IAgency} from "./agency";

@Injectable()

export class AgencyService {
  constructor(private http: HttpClient) {}
  getAgency(): Observable<IAgency[]>{
    return this.http.get<IAgency[]>("http://localhost:5232/api/Agencies/GetAllAgency")
  }
  searchAgency(name: string): Observable<IAgency[]> {
    return this.http.get<IAgency[]>(`http://localhost:5232/api/Agencies/GetAgency/${name}`).pipe(
      tap((response) => console.log(response))
    );
  }
}
