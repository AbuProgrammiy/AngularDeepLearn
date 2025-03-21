import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';
import { CommonComponent } from './components/common/common.component';
import { ParentComponent } from './components/parent/parent.component';
import { HelloComponent } from './components/hello/hello.component';
import { GoodbyeComponent } from './components/goodbye/goodbye.component';
import { UserModule } from './modules/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    CommonComponent,
    ParentComponent,
    HelloComponent,
    GoodbyeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
