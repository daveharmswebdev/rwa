import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionService {
  private _serviceUrl = 'http://localhost:3000/questions';

  constructor(private http: Http) {}

  getQuestions(): Observable<any[]> {
    return this.http.get(this._serviceUrl).map(res => res.json());
  }
}
