import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddplayerComponent implements OnInit {
@Input() playerDetails ={client_id: "",client_age:"",client_name:"",client_position:"",client_cap_hit:"", client_base_salary:"",client_signing_bonus:"",client_merchandise:"",client_active:"",client_salary_increase:""};

  constructor(public restApi:RestApiService, public router:Router) { }

  ngOnInit() {
  }
addPlayer(dataPlayer:any){
  this.restApi.createPlayer(this.playerDetails).subscribe((data:{})=>{
    this.router.navigate(['/full-roster']);
  })
}
}
