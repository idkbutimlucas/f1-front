import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Drivers } from 'src/app/core/models/drivers';
import { Teams } from 'src/app/core/models/teams';
import { TeamsFormData } from 'src/app/core/models/teams-form-data';
import { DriversService } from 'src/app/core/services/http/drivers.service';
import { TeamsService } from 'src/app/core/services/http/teams.service';
import { TeamEditComponent } from '../../components/team-edit/team-edit.component';

@Component({
  selector: 'app-teams-detail',
  templateUrl: './teams-detail.component.html',
  styleUrls: ['./teams-detail.component.scss']
})
export class TeamsDetailComponent implements OnInit {
  teamId!: number;

  teams$!: Observable<Teams>;
  drivers$!: Observable<Drivers[]>;

  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar,private _teamsService: TeamsService,private _driversService: DriversService,private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.teamId = Number(this._activateRoute.snapshot.paramMap.get('id'));

    if (this.teamId) {
      this.fetchData(this.teamId);
    }
  }
  fetchData(id: number): void {
    this.teams$ = this._teamsService.getById(id);
    this.drivers$ = this._driversService.getByTeams(id);

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  delete(teams: Teams){
    this._teamsService.delete(teams).subscribe(next => {
    })
    this.openSnackBar("Supprimer l'équipe","😭");

  }
  openDialog(toUpdate: boolean, teams: Teams){

    const TeamsFormData: TeamsFormData = {
      toUpdate: toUpdate,
      teams: teams
    };

    const dialogRef = this.dialog.open(TeamEditComponent,{
      data: TeamsFormData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.fetchData(this.teamId);
    });
  }
}
