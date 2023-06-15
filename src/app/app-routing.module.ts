import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages/pages.routing';
import { RouterModule, Routes } from '@angular/router';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';
import { EmployessRoutingModule } from './employees/employees.routing';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{useHash: true}),
    PagesRoutingModule,
    AuthRoutingModule,
    EmployessRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
