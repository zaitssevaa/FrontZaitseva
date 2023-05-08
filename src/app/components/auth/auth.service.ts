import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
//mport { SRV_URL } from 'src/app/config';
import { Observable, of } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import {Md5} from "ts-md5";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  public login(info: { login: string, password: string }):Observable<number> {

    info.password = Md5.hashStr(info.password) as string

    return this._http.post<any>("/api/Auth/", info, {observe: 'response'})
      .pipe(
        map(res=>
        {
          if (res.status == 200)
            localStorage.setItem("token", res.body.token);
          return res.status;
        }),
        catchError(error => {
            return of((error as HttpResponse<any>).status);
          }
        )
      )
  }

  public sendTestRequest(){
    this._http.get("http://localhost:5232/api/Auth").subscribe(res=> alert(res));

  }
}
