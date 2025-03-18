import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule
  ],
})
export class UserModule {
  constructor() {
    console.log("User Modul yuklandi");
  }
}
