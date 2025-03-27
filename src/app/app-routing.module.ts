import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ParentComponent } from './components/parent/parent.component';
import { authGuard } from './guards/auth.guard';
import { confirmExitGuardGuard } from './guards/confirm-exit-guard.guard';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  { path: "home", component: HomeComponent, pathMatch: "full" }, // Default route
  { path: "parent", component: ParentComponent }, // Custom route
  { path: "hello", redirectTo: "home" }, // Redirect qilish uchun
  { path: "child/:id", component: ChildComponent },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) }, // Lazy loaded module
  { path: "only-admin", component: DashboardComponent, canActivate: [authGuard], canDeactivate: [confirmExitGuardGuard] }, // Guardi bor route
  { path: "**", component: NotFoundComponent } // Not found handle qilish uchun
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
