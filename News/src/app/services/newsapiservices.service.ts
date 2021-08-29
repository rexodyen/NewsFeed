import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class NewsapiService {
  constructor(private http: HttpClient
  ) { }
  x: string = "";


  newsFeed(x: string):Observable<any>{
    this.x = x;
    return this.http.get('https://newsapi.org/v2/everything?' +
      'q='+ this.x + '&' +
      'from=2021-08-29&' +
      'sortBy=popularity&' +
      'apiKey=0128a66d07e943adaef42f61a8610d1e');

  }
}
