import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';



@NgModule({
  declarations: [EmployeesComponent, EmployeesListComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class EmployeesModule {}
