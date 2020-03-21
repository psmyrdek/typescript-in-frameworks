import { Component, Input } from '@angular/core';
import { FeedEntry } from '../models/feed-entry';

@Component({
  selector: 'app-feed-entry',
  templateUrl: './feed-entry.component.html',
  styleUrls: ['./feed-entry.component.scss']
})
export class FeedEntryComponent {

  @Input()
  feedEntry: FeedEntry;

}
