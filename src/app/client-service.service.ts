import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from './client';
import { Observable } from 'rxjs';
import { CheckEmail } from './check-email';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private clientsUrl: string;
  constructor(private http: HttpClient) { 
    this.clientsUrl = 'http://www.localhost:8080';
  }

  public save(data : any): Observable<Client> {
    return this.http.post<Client>(this.clientsUrl + '/api/client', data, {
      headers: new HttpHeaders(
        { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin', 'Content-Type': 'application/json' })
    })
  }

  public update(data : any): Observable<Client> {
    return this.http.post<Client>(this.clientsUrl + '/api/client/update', data, {
      headers: new HttpHeaders(
        { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin', 'Content-Type': 'application/json' })
    })
  }

  public login(data: any): Observable<Client> {
    return this.http.post<Client>(this.clientsUrl + '/api/client/login', data, {
      headers: new HttpHeaders(
        { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin', 'Content-Type': 'application/json' })
    })
  }

  // getAll(): Observable<any> {
  //   return this.http.get(baseUrl);
  // }
  // get(id): Observable<any> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }
  // create(data): Observable<any> {
  //   return this.http.post(baseUrl, data);
  // }
  // update(id, data): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }
  // delete(id): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }
  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }
  // findByTitle(title): Observable<any> {
  //   return this.http.get(`${baseUrl}?title=${title}`);
  // }
}
