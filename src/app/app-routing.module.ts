import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';
import { CommonComponent } from './components/common/common.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"child",component:ChildComponent},
  {path:"common",component:CommonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
