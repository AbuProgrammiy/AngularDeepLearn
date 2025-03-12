import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';
import { CommonComponent } from './components/common/common.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
