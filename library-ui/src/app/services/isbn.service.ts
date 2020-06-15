import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

const httpOptions = {
 headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IsbnService {

  constructor(private http:HttpClient) { }
  
  getIsbn() {
    return this.http.get('/server/api/v1/isbn');
  }

  createIsbn(isbn){
    let body = JSON.stringify(isbn);
    return this.http.post('/server/api/v1/isbn', body, httpOptions);
  }

}
