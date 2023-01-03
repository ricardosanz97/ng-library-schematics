import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgLibModule } from '@ricardosanz97/ng-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
