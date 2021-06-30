import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Employee/emp';
import { EmployeeService } from '../../Employee/employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  emps: Employee[] = [];

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.emps = this.empService.getEmp();
  }
}
