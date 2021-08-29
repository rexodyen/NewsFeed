import { Component , OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NewsapiService} from "../services/newsapiservices.service";

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit{
  x="";
    constructor(private router: Router,
                private services: NewsapiService
) {
    }
  logout(){
    this.router.navigate(['home']);
  }

  displaynews: any[] = [];

  ngOnInit():void{
    this.services.newsFeed(this.x).subscribe((result: any)=> {
      this.displaynews = result.articles;
    });
  }

  search(event: any) {
    this.x= event.target.value;
    this.services.newsFeed(this.x).subscribe((result: any)=> {
      this.displaynews = result.articles;
    });
  }

}
