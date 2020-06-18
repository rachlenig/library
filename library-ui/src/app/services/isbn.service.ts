import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import isIsbnValid from './isbn';

const httpOptions = {
 headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IsbnService {

  constructor(private http:HttpClient) { }

  isIsbnValid(isbn: string) {
    return isIsbnValid(isbn);
  }

  getIsbn() {
    return this.http.get('/server/api/v1/isbn');
  }

  createIsbn(isbn){
    let body = JSON.stringify(isbn);
    return this.http.post('/server/api/v1/isbn', body, httpOptions);
  }

  isbnValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const valid: boolean = this.isIsbnValid(control.value);
      return valid ? null : {'isbn': {value: control.value}};
    };
  }

}
