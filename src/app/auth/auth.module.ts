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



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ChangePasswordComponent, UserListComponent, EditUserComponent, ListRolesComponent, CreateRolesComponent, EditRolesComponent, ListPermissComponent, CreatePermissComponent, EditPermissComponent, SeeUserComponent, DeleteUserComponent],
  exports: [LoginComponent, RegisterComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, NgxPaginationModule],
})
export class AuthModule {}
