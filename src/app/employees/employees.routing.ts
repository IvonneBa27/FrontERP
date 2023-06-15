import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees/employees.component';
import { AccesoGuard } from '../guards/acceso.guard';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { PagesComponent } from '../pages/pages.component';



const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { titulo: 'Empleados' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'list',
        component: EmployeesListComponent,
        data: { titulo: 'Listado empleados' },
        canActivate: [AccesoGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployessRoutingModule {}
