import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  SERVER_URL: string = './assets/data/articles.json';
  constructor(public http:HttpClient ) { }
  getArticles(): Observable<any> {
    return this.http.get<any>(this.SERVER_URL);
  }
}
