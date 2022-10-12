import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private title="Kartvizit App";
  getTitle(){
    return this.title;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
