import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  ngOnInit() {
    console.log('App loaded')
  }

  ngOnDestroy() {
    console.log('App shutting down')
  }

}
