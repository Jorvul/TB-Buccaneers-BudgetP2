import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
@Input() employeeDetails ={client_id: "",client_age:"",client_name:"",client_position:"",client_cap_hit:"", client_base_salary:"",client_signing_bonus:"",client_merchandise:"",client_active:"",client_salary_increase:""};

  constructor(public restApi:RestApiService, public router:Router) { }

  ngOnInit() {
  }
addEmployee(dataEmployee:any){
  this.restApi.createEmployee(this.employeeDetails).subscribe((data:{})=>{
    this.router.navigate(['/full-roster']);
  })
}
}
