import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  constructor(private httpClient : HttpClient)
  {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
