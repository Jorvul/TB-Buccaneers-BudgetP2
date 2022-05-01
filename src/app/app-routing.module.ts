import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddplayerComponent } from './add-player/add-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login-page' },
  { path: "add-player", component: AddplayerComponent},
  { path: "update-player/:id", component: UpdatePlayerComponent},
  { path: "full-roster", component: PlayersListComponent },
  { path: "login-page",component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
