import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { TeamsDetailComponent } from './pages/teams-detail/teams-detail.component';
import { TeamsListComponent } from './pages/teams-list/teams-list.component';
import { SharedModule } from '../shared/shared.module';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsFormComponent } from './components/teams-form/teams-form.component';
import { TeamEditComponent } from './components/team-edit/team-edit.component';



@NgModule({
  declarations: [
    TeamsComponent,
    TeamsDetailComponent,
    TeamsListComponent,
    TeamsFormComponent,
    TeamEditComponent
  ],
  imports: [
    CommonModule,SharedModule,TeamsRoutingModule
  ]
})
export class TeamsModule { }
