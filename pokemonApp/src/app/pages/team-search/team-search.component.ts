import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Team } from 'src/app/core/shared/team';
import { TeamService } from 'src/app/core/shared/team.service';
import { UserService } from 'src/app/core/shared/user.service';
import { User } from 'src/app/core/shared/user';

@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: ['./team-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TeamSearchComponent implements OnInit {

  teams: Team[] = [];
  connectedUser: User;

  constructor(
    private teamService: TeamService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(
      (teams) => {
        this.teams = teams;
        console.log(this.teams)
      }
    )

    if(!this.userService.connectedUser){
      this.connectedUser = {
        id: 5,
        username: "visiteur",
        email: "visiteur@visteur.com",
        password: "visiteur",
        role: "visiteur"
      };
      console.log(this.connectedUser)
    }else{
    this.connectedUser = this.userService.connectedUser;
    console.log(this.connectedUser)
    }

  }

  deleteTeam(team){
    console.log(team.name)
    this.teamService.deleteTeamByAdmin(team.name)
    .subscribe(() => {
      let index = this.teams.findIndex(t => t.id === team.name);
      console.log(index);
      this.teams.splice(index, 1);
      console.log(this.teams)
      return this.teams
    });
  }

}
