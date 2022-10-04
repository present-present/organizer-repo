import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UiModule } from '@organizer-repo/ui';

export const authRoute = 'auth';
export const authRoutesChildren: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule, UiModule],
  declarations: [LoginComponent],
})
export class AuthModule { }
