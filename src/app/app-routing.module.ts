import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';
import { CommonComponent } from './components/common/common.component';
import { ParentComponent } from './components/parent/parent.component';
import { UserComponent } from './modules/user/user.component';
import { AdminComponent } from './modules/user/admin/admin.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"parent",component:ParentComponent},
  {path:"child",component:ChildComponent},
  {path:"common",component:CommonComponent},
  {path:"admin",component:AdminComponent},
  {path:"user",component:UserComponent, loadChildren:()=>import("./modules/user/user.module").then(m=>m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
