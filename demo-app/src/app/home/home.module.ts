import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';

const routing = RouterModule.forChild([
  {
    path: '',
    component: HomePageComponent
  }
])

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    routing,
    CommonModule
  ]
})
export class HomeModule { }
