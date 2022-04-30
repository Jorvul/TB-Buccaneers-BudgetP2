import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: any = "TeamJRC";
  password: any = 12345;

  constructor( public router :Router,
    public actRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login(){
  if(this.user === "TeamJRC" && this.password===12345){
    window.location.href = "/employees-list";
  } else {
    window.confirm("Employee Credentials are Incorrect!")
  }
}

}
