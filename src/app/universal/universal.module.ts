import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UniversalComponent } from './universal.component';
import { UniversalRoutingModule } from './universal-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {LoginComponent} from './module/login/login.component'
import { LayoutComponent } from './module/layout/layout.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';



@NgModule({
  declarations: [UniversalComponent, LayoutComponent, LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    UniversalRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ]
})
export class UniversalModule { }
