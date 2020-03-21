import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { RouterModule } from '@angular/router';

const routing = RouterModule.forChild([
  {
    path: '',
    component: SettingsPageComponent
  }
])

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [
    routing,
    CommonModule
  ]
})
export class SettingsModule { }
