import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
  private _serviceUrl = 'http://localhost:3000/categories';

  constructor(private http: Http) {}

  getCategories(): Observable<any[]> {
    console.log('get cats');
    return this.http.get(this._serviceUrl).map(res => res.json());
  }
}


