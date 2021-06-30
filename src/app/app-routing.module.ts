import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDisplayComponent } from './home-display/home-display.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeDisplayComponent
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./Employee/employee.module').then(m => m.EmployeeModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
