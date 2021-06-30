import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from '../Employee/employee-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

import { EmpDetailsComponent } from '../Employee/emp-details/emp-details.component';
import { EmployeeService } from './employee.service';
import { CreateEmpComponent } from './create-emp/create-emp.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    MatButtonModule
  ],
  declarations: [EmpDetailsComponent, CreateEmpComponent],
  providers: [EmployeeService],
  exports: []
})
export class EmployeeModule {}
