import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { FeedEntry } from '../models/feed-entry';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy, OnChanges {

  feed: FeedEntry[];

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.feedService.fetchFeed()
      .subscribe(feed => { this.feed = feed; })
  }

  ngOnDestroy() {
    console.log('App shutting down')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Something has changed')
  }

}
