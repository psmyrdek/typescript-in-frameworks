import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedEntry } from '../models/feed-entry';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  feed: FeedEntry[];

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.feedService.fetchFeed()
      .subscribe(feed => { this.feed = feed; })
  }

}
