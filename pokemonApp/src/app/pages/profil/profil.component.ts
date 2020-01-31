import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/shared/user';
import { UserService } from 'src/app/core/shared/user.service';
import { Team } from 'src/app/core/shared/team';
import { TeamService } from 'src/app/core/shared/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  connectedUser: User;
  teams: Team[] = []

  constructor(
    private userService: UserService,
    private teamService: TeamService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getTeamsByUser()
    this.connectedUser = this.userService.connectedUser;
  }

  getTeamsByUser(){
    this.userService.getTeamsByUser()
    .subscribe(result => {
      result.map(value => this.teams.push(value))
    });
    console.log(this.teams)
  }

  deleteTeam(team){
    console.log(team.id)
    this.teamService.deleteTeam(team)
    .subscribe(() => {
      let index = this.teams.findIndex(t => t.id === team.id);
      console.log(index);
      this.teams.splice(index, 1);
      console.log(this.teams)
      return this.teams
    });
  }

}
