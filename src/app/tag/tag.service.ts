import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TagService {
  private _serviceUrl = 'http://localhost:3000/tagList';

  constructor(private http: Http) {}

  getTags(): Observable<any[]> {
    return this.http.get(this._serviceUrl).map(res => res.json());
  }
}
