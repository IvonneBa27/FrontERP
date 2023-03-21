import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

import { AccesoGuard } from '../guards/acceso.guard';
import { GroupListComponent } from './groups/group-list/group-list.component';
import { GroupCreateComponent } from './groups/group-create/group-create.component';
import { CampaniaListComponent } from './campanias/campania-list/campania-list.component';
import { CampaniaCreateComponent } from './campanias/campania-create/campania-create.component';
import { CampaniaAddMonthComponent } from './campanias/campania-add-month/campania-add-month.component';
import { AgentsListComponent } from './agents/agents-list/agents-list.component';
import { LoadFileComponent } from './agents/load-file/load-file.component';
import { CreateUserComponent } from '../auth/users/create-user/create-user.component';
import { EditUserComponent } from '../auth/users/edit-user/edit-user.component';
import { ListRolesComponent } from '../auth/security/roles/list-roles/list-roles.component';
import { UserListComponent } from '../auth/users/user-list/user-list.component';
import { CreateRolesComponent } from '../auth/security/roles/create-roles/create-roles.component';
import { EditRolesComponent } from '../auth/security/roles/edit-roles/edit-roles.component';
import { ListPermissComponent } from '../auth/security/permiss/list-permiss/list-permiss.component';
import { CreatePermissComponent } from '../auth/security/permiss/create-permiss/create-permiss.component';
import { EditPermissComponent } from '../auth/security/permiss/edit-permiss/edit-permiss.component';
import { SeeUserComponent } from '../auth/users/see-user/see-user.component';
import { DeleteUserComponent } from '../auth/users/delete-user/delete-user.component';



const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' },
        canActivate: [AccesoGuard],
      },

      {
        path: 'grafica1',
        component: Grafica1Component,
        data: { titulo: 'Graficas' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'acount-settings',
        component: AccountSettingsComponent,
        data: { titulo: 'Temas' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'listado-grupos',
        component: GroupListComponent,
        data: { titulo: 'Listado de grupos' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'crear-grupo',
        component: GroupCreateComponent,
        data: { titulo: 'Crear grupo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'listado-campanias',
        component: CampaniaListComponent,
        data: { titulo: 'Listado de campañas' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'crear-campania',
        component: CampaniaCreateComponent,
        data: { titulo: 'Crear campaña' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'add-month-campania/:id',
        component: CampaniaAddMonthComponent,
        data: { titulo: 'Agregar mes' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'agents',
        component: AgentsListComponent,
        data: { titulo: 'Agentes' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'load-file',
        component: LoadFileComponent,
        data: { titulo: 'Carga de archivo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'users-list',
        component: UserListComponent,
        data: { titulo: 'Lista de Usuarios' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
        data: { titulo: 'Crear Usuario' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-user',
        component: EditUserComponent,
        data: { titulo: 'Editar Usuario' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list-roles',
        component: ListRolesComponent,
        data: { titulo: 'Lista de Roles' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'create-roles',
        component: CreateRolesComponent,
        data: { titulo: 'Crear Roles' },
        canActivate: [AccesoGuard],

      },
      {
        path: 'edit-roles',
        component: EditRolesComponent,
        data: { titulo: 'Editar Roles' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list-permiss',
        component: ListPermissComponent,
        data: { titulo: 'Lista de Permisos' },
        canActivate: [AccesoGuard],

      },
      {
        path: 'create-permiss',
        component: CreatePermissComponent,
        data: { titulo: 'Crear Permiso' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-permiss',
        component: EditPermissComponent,
        data: { titulo: 'Editar Permiso' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-user/:id',
        component: EditUserComponent,
        data: { titulo: 'Editar Usuario' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'see-user/:id',
        component: SeeUserComponent,
        data: { titulo: 'Usuario' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'delete-user/:id',
        component: DeleteUserComponent,
        data: { titulo: 'Eliminar Usuario' },
        canActivate: [AccesoGuard],

      },


      //   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
