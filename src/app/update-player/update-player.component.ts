import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  playerData: any = {};
  constructor(public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router) {
  }
  ngOnInit() {
    this.restApi.getPlayer(this.id).subscribe((data: {}) => {
      this.playerData = data;
    })
  }
  // Update employee data
  updatePlayer() {
    if(window.confirm('Please confirm to update')){
      this.restApi.updatePlayer(this.id, this.playerData).subscribe(data => {
        this.router.navigate(['/full-roster'])
      })
    }
  }


}
