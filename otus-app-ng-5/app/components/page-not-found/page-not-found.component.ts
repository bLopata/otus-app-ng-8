import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: 
   ` <h2>
      404 - Page not found
    </h2>`,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  path: string;

  constructor() {}

  ngOnInit() {  }
}