import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { UserModule } from './modules/user/user.module';
import { ToUppercaseManuallyPipe } from './pipes/to-uppercase-manually.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    ParentComponent,
    ToUppercaseManuallyPipe
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
