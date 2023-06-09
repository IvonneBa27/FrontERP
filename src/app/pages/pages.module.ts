import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { CreateGroupComponent } from './groups/group-list/complements/create-group/create-group.component';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { GroupCreateComponent } from './groups/group-create/group-create.component';
import { CampaniaListComponent } from './campanias/campania-list/campania-list.component';
import { CampaniaCreateComponent } from './campanias/campania-create/campania-create.component';
import { CampaniaAddMonthComponent } from './campanias/campania-add-month/campania-add-month.component';
import { AgentsListComponent } from './agents/agents-list/agents-list.component';
import { LoadFileComponent } from './agents/load-file/load-file.component';
import { CreateUserComponent } from '../auth/users/create-user/create-user.component';
import { AuthModule } from '../auth/auth.module';
import { BlackListComponent } from './blackList/black-list/black-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BlackListCreateComponent } from './blackList/black-list-create/black-list-create.component';
import { BlackListEditComponent } from './blackList/black-list-edit/black-list-edit.component';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
];



@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    GroupListComponent,
    CreateGroupComponent,
    GroupCreateComponent,
    CampaniaListComponent,
    CampaniaCreateComponent,
    CampaniaAddMonthComponent,
    AgentsListComponent,
    LoadFileComponent,
    CreateUserComponent,
    BlackListComponent,
    BlackListCreateComponent,
    BlackListEditComponent,
  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    materialModules,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    materialModules,
    ReactiveFormsModule,
    FileUploadModule,
    AuthModule,
    NgxPaginationModule,
  ],
  entryComponents: [CreateGroupComponent],
})
export class PagesModule {}
