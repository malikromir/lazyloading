import { Injectable } from '@angular/core';
import { Employee } from '../Employee/emp';

@Injectable()
export class EmployeeService {
  empList: Employee[] = [
    { id: 1, name: 'John Doe', role: 'SDE' },
    {
      id: 2,
      name: 'Joe Root',
      role: 'DevOps'
    }
  ];
  constructor() {}
  getEmp() {
    return this.empList;
  }
}
