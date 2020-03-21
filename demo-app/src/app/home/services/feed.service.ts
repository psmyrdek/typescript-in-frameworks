import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedEntry } from '../models/feed-entry';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  fetchFeed(): Observable<FeedEntry[]> {
    return this.http.get<FeedEntry[]>('http://localhost:5000/feed');
  }
}
