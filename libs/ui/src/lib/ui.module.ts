import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent]
})
export class UiModule { }
