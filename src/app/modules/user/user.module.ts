import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AdminComponent } from './admin/admin.component';
import { SampleService } from './services/sample.service';



@NgModule({
  declarations: [
    UserComponent,
    AdminComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[SampleService]
})
export class UserModule {
  constructor() {
    console.log("User Modul yuklandi");
  }
}
