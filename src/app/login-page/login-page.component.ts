import { HttpClient} from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
username:any
password:any
  constructor( public router :Router,
    public actRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }


  login(){
  if(this.username === "TeamJRC" && this.password==="12345"){
  } else {
    window.confirm("You have successfully signed in!")
    window.location.href = "/full-roster";
  }
}

}
