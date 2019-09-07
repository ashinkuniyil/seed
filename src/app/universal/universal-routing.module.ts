import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversalComponent } from './universal.component';
import { LoginComponent } from './module/login/login.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { LayoutComponent } from './module/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'universal', component: UniversalComponent,
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      {
        path: 'view', component: LayoutComponent,
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
        ]
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversalRoutingModule { }
