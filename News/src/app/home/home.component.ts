import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }
  hide = true;

  x = "";
  y = ``;
  login() {
    if( this.x.length != 0 && this.y.length != 0) {
      this.router.navigate(['newsFeed']);
    }else{
      alert('User Name or password are incorrect');
    }

  }
  username(event: any) {
    this.x = event.target.value;
  }
  pass(event: any) {
    this.y = event.target.value;
  }
  ngOnInit(): void {
  }

}
