import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
employees: Employee[] = [
  {
id: 1,
name: 'Tara',
gender: 'Female',
email: 'panthi16tara@gmail.com',
dateOfBirth: new Date('12/2/1991'),
isActive: true,
photoPath: 'assets/images/46797601652_12fa1b25ff_b.jpg'
  }
  // {
  //   id: 1,
  //   name: 'Sara',
  //   gender: 'Female',
  //   email: 'panthi16tara@gmail.com',
  //   dateOfBirth: new Date('12/2/1991'),
  //   isActive: true,
    // photoPath: 'assets\images\46797601652_12fa1b25ff_b.jpg'
     // },
      // {
      //   id: 1,
      //   name: 'Neha',
      //   gender: 'Female',
      //   email: 'panthi16tara@gmail.com',
      //   dateOfBirth: new Date('12/2/1991'),
      //   isActive: true,
        // photoPath: 'assets/images/4535.png'
        //  }
]
  constructor() { }

  ngOnInit() {
  }

}
