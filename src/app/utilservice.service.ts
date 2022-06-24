import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materiaux } from './materiaux';
import { Style } from './style';
import { TypeOeuvre } from './type-oeuvre';
import { Oeuvre } from './oeuvre';
import { Oeuvreresponse } from './oeuvreresponse';
import { Uploadedfile } from './uploadedfile';
import { OeuvreResponseMain } from './oeuvre-response-main';
@Injectable({
  providedIn: 'root'
})

export class UtilserviceService {
  getOeuvres() {
    return this.http.post<OeuvreResponseMain[]>(this.utilsUrl + '/api/oeuvre/all/art', {
      headers: new HttpHeaders(
        { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin', 'Content-Type': 'application/json' })
    })
  }
  
  upload(formData: FormData) {
    return this.http.post<Uploadedfile>(this.utilsUrl + '/api/file/upload', formData, {
      headers: new HttpHeaders(
        { 'Access-Control-Allow-Origin': '*' })
    })
  }

  deleteOeuvre(data : number) {
    return this.http.post<any>(this.utilsUrl + '/api/oeuvre/delete', data, {
      headers: new HttpHeaders(
        { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin', 'Content-Type': 'application/json' })
    })
  }
  

  private utilsUrl: string;
  constructor(private http: HttpClient) { 
    this.utilsUrl = 'http://www.localhost:8080';
  }

  save(oeuvre: Oeuvre) {
    return this.http.post<Oeuvre>(this.utilsUrl + '/api/oeuvre/save', oeuvre,{
      headers: new HttpHeaders(
        { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin', 'Content-Type': 'application/json' })
    })
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

  public getAllOeuvres(): Observable<Oeuvreresponse[]> {
    return this.http.post<Oeuvreresponse[]>(this.utilsUrl + '/api/oeuvre/all', {
      headers: new HttpHeaders(
        { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin', 'Content-Type': 'application/json' })
    })
  }
}
