import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Team } from 'src/app/core/shared/team';
import { TeamService } from 'src/app/core/shared/team.service';

@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: ['./team-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TeamSearchComponent implements OnInit {

  teams: Team[] = [];

  constructor(
    private teamService: TeamService,
  ) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(
      teams => this.teams = teams
    )
  }

}
