import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListRolesComponent } from './security/roles/list-roles/list-roles.component';
import { CreateRolesComponent } from './security/roles/create-roles/create-roles.component';
import { EditRolesComponent } from './security/roles/edit-roles/edit-roles.component';
import { ListPermissComponent } from './security/permiss/list-permiss/list-permiss.component';
import { CreatePermissComponent } from './security/permiss/create-permiss/create-permiss.component';
import { EditPermissComponent } from './security/permiss/edit-permiss/edit-permiss.component';
import { CampaniaListComponent } from '../pages/campanias/campania-list/campania-list.component';
import { SeeUserComponent } from './users/see-user/see-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { CreateModuleComponent } from './security/modules/create-module/create-module.component';
import { EditModuleComponent } from './security/modules/edit-module/edit-module.component';
import { ListModuleComponent } from './security/modules/list-module/list-module.component';
import { DeleteModuleComponent } from './security/modules/delete-module/delete-module.component';
import { SeeModuleComponent } from './security/modules/see-module/see-module.component';
import { CreateTypemoduleComponent } from './catalogos/type_module/create-typemodule/create-typemodule.component';
import { DeleteTypemoduleComponent } from './catalogos/type_module/delete-typemodule/delete-typemodule.component';
import { EditTypemoduleComponent } from './catalogos/type_module/edit-typemodule/edit-typemodule.component';
import { SeeTypemoduleComponent } from './catalogos/type_module/see-typemodule/see-typemodule.component';
import { ListTypemoduleComponent } from './catalogos/type_module/list-typemodule/list-typemodule.component';
import { AddPermisseUserComponent } from './users/add-permisse-user/add-permisse-user.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ChangePasswordComponent, UserListComponent, EditUserComponent, ListRolesComponent, CreateRolesComponent, EditRolesComponent, ListPermissComponent, CreatePermissComponent, EditPermissComponent, SeeUserComponent, DeleteUserComponent, CreateModuleComponent, EditModuleComponent, ListModuleComponent, DeleteModuleComponent, SeeModuleComponent, CreateTypemoduleComponent, DeleteTypemoduleComponent, EditTypemoduleComponent, SeeTypemoduleComponent, ListTypemoduleComponent, AddPermisseUserComponent],
  exports: [LoginComponent, RegisterComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, NgxPaginationModule],
})
export class AuthModule {}
