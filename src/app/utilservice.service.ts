import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materiaux } from './materiaux';
import { Style } from './style';
import { TypeOeuvre } from './type-oeuvre';
@Injectable({
  providedIn: 'root'
})

export class UtilserviceService {

  private utilsUrl: string;
  constructor(private http: HttpClient) { 
    this.utilsUrl = 'http://www.localhost:8080';
  }

  public getAllType(): Observable<TypeOeuvre[]> {
    return this.http.post<TypeOeuvre[]>(this.utilsUrl + '/api/type/all', {
      headers: new HttpHeaders(
        { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin', 'Content-Type': 'application/json' })
    })
  }

  public getAllStyle(): Observable<Style[]> {
    return this.http.post<Style[]>(this.utilsUrl + '/api/style/alln', {
      headers: new HttpHeaders(
        { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin', 'Content-Type': 'application/json' })
    })
  }

  public getAllMats(): Observable<Materiaux[]> {
    return this.http.post<Materiaux[]>(this.utilsUrl + '/api/mat/all', {
      headers: new HttpHeaders(
        { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin', 'Content-Type': 'application/json' })
    })
  }
}
