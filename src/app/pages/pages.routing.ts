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
import { CreateModuleComponent } from '../auth/security/modules/create-module/create-module.component';
import { EditModuleComponent } from '../auth/security/modules/edit-module/edit-module.component';
import { ListModuleComponent } from '../auth/security/modules/list-module/list-module.component';
import { SeeModuleComponent } from '../auth/security/modules/see-module/see-module.component';
import { DeleteModuleComponent } from '../auth/security/modules/delete-module/delete-module.component';
import { CreateTypemoduleComponent } from '../auth/catalogos/type_module/create-typemodule/create-typemodule.component';
import { EditTypemoduleComponent } from '../auth/catalogos/type_module/edit-typemodule/edit-typemodule.component';
import { ListTypemoduleComponent } from '../auth/catalogos/type_module/list-typemodule/list-typemodule.component';
import { SeeTypemoduleComponent } from '../auth/catalogos/type_module/see-typemodule/see-typemodule.component';
import { DeleteTypemoduleComponent } from '../auth/catalogos/type_module/delete-typemodule/delete-typemodule.component';
import { AddPermisseUserComponent } from '../auth/users/add-permisse-user/add-permisse-user.component';
import { CreateClientComponent } from '../auth/client/create-client/create-client.component';



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

      {
        path: 'create-module',
        component: CreateModuleComponent,
        data: { titulo: 'Crear Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-module/:id',
        component: EditModuleComponent,
        data: { titulo: 'Editar Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list-module',
        component: ListModuleComponent,
        data: { titulo: 'Lista de Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'see-module/:id',
        component: SeeModuleComponent,
        data: { titulo: 'Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'delete-module/:id',
        component: DeleteModuleComponent,
        data: { titulo: 'Eliminar Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'create-typemodule',
        component: CreateTypemoduleComponent,
        data: { titulo: 'Crear Tipo Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'edit-typemodule/:id',
        component: EditTypemoduleComponent,
        data: { titulo: 'Modificiar Tipo Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list-typemodule',
        component: ListTypemoduleComponent,
        data: { titulo: 'Lista de Tipos de Módulos' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'see-typemodule/:id',
        component: SeeTypemoduleComponent,
        data: { titulo: 'Tipo de Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'delete-typemodule/:id',
        component: DeleteTypemoduleComponent,
        data: { titulo: 'Eliminar Tipo de Módulo' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'add-permisse/:id',
        component: AddPermisseUserComponent,
        data: { titulo: 'Asignar permisos usuario' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'create-client',
        component: CreateClientComponent,
        data: { titulo: 'Crear Cliente' },
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
