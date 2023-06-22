import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees/employees.component';
import { AccesoGuard } from '../guards/acceso.guard';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { PagesComponent } from '../pages/pages.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeShowComponent } from './employee-show/employee-show.component';



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
        data: { titulo: 'Listado de empleados' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'empleyee-create',
        component: EmployeeCreateComponent,
        data: { titulo: 'Crear empleado' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'empleyee-edit',
        component: EmployeeEditComponent,
        data: { titulo: 'Editar empleado' },
        canActivate: [AccesoGuard],
      },
      {
        path: 'empleyee-show',
        component: EmployeeShowComponent,
        data: { titulo: 'Detalle empleado' },
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
