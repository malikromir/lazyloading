import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpComponent } from '../Employee/create-emp/create-emp.component';
import { EmpDetailsComponent } from '../Employee/emp-details/emp-details.component';
const routes: Routes = [
  { path: '', component: EmpDetailsComponent },
  { path: 'create', component: CreateEmpComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
