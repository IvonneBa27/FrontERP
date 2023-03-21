import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListRolesComponent } from './security/roles/list-roles/list-roles.component';
import { EditRolesComponent } from './security/roles/edit-roles/edit-roles.component';
import { CreateRolesComponent } from './security/roles/create-roles/create-roles.component';
import { ListPermissComponent } from './security/permiss/list-permiss/list-permiss.component';
import { CreatePermissComponent } from './security/permiss/create-permiss/create-permiss.component';
import { EditPermissComponent } from './security/permiss/edit-permiss/edit-permiss.component';
import { CampaniaCreateComponent } from '../pages/campanias/campania-create/campania-create.component';
import { CampaniaListComponent } from '../pages/campanias/campania-list/campania-list.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cambiar-password', component: ChangePasswordComponent },
  { path: 'campania-create', component: CampaniaCreateComponent },
  { path: 'campania-list', component: CampaniaListComponent},
  { path: 'users-list', component: UserListComponent},
  { path: 'create-user', component: CreateUserComponent},
  
  { path: 'list-roles', component:ListRolesComponent},
  { path: 'create-roles', component:CreateRolesComponent},
  { path: 'edit-roles', component:EditRolesComponent},
  { path: 'list-permiss', component:ListPermissComponent},
  { path: 'create-permiss', component:CreatePermissComponent},
  { path: 'edit-permiss', component:EditPermissComponent},


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
