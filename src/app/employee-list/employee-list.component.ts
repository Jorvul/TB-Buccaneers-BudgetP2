import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  //id = this.actRoute.snapshot.params['id'];
  Employee: any = [];
  //employeeData: any = {};
  constructor(public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router) {}
  ngOnInit() {
    this.loadEmployees();
    /*this.restApi.getEmployee(this.id).subscribe((data: {}) => {
      this.employeeData = data;
    })*/
  }
  // Get employees list
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    });
  }
  // Delete employee
  deleteEmployee(id: any) {
    if (window.confirm('This action will remove player from organization, continue?')) {
      this.restApi.deleteEmployee(id).subscribe((data) => {
        this.loadEmployees();
      });
    }

  }
  tradeEmployee1(id: any) {
    if (window.confirm('Please choose organization player will be traded to')) {
    window.prompt()
      this.restApi.deleteEmployee(id).subscribe((data) => {
        this.loadEmployees();
      });
    }

  }
// Update employee data
/*updateEmployee1() {
  if(window.confirm('Are you sure, you want to update?')){
    this.restApi.updateEmployee(this.id, this.employeeData).subscribe(data => {
      this.router.navigate(['/employees-list']);
    })
  }
}*/

}
