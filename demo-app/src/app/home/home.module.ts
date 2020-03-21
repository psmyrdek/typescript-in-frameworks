import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { FeedEntryComponent } from './feed-entry/feed-entry.component';

const routing = RouterModule.forChild([
  {
    path: '',
    component: HomePageComponent
  }
])

@NgModule({
  declarations: [HomePageComponent, FeedEntryComponent],
  imports: [
    routing,
    CommonModule
  ]
})
export class HomeModule { }
