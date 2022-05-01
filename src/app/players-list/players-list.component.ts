import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  //id = this.actRoute.snapshot.params['id'];
  Player: any = [];
  //employeeData: any = {};
  constructor(public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router) {}
  ngOnInit() {
    this.loadPlayers();
    /*this.restApi.getEmployee(this.id).subscribe((data: {}) => {
      this.employeeData = data;
    })*/
  }
  // Get employees list
  loadPlayers() {
    return this.restApi.getPlayers().subscribe((data: {}) => {
      this.Player = data;
    });
  }
  // Delete employee
  deletePlayer(id: any) {
    if (window.confirm('This action will remove player from organization, continue?')) {
      this.restApi.deletePlayer(id).subscribe((data) => {
        this.loadPlayers();
      });
    }

  }
  tradePlayer1(id: any) {
    if (window.confirm('Please Confirm to Trade Player')) {
    //window.prompt()
      this.restApi.deletePlayer(id).subscribe((data) => {
        this.loadPlayers();
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
