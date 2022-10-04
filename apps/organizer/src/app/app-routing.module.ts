import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule, authRoute, authRoutesChildren } from '@organizer-repo/auth';

const routes: Routes = [
  { path: '', redirectTo: `/${authRoute}/login`, pathMatch: 'full' }, // redirect from startpage to module
  { path: authRoute, children: authRoutesChildren }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
