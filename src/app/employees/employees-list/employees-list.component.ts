import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from '../../models/employee.model';
import { GeneralService } from 'src/app/services/general.service';
import { Empresa } from 'src/app/models/empresa.model';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [];
  companies: Empresa[] = [];
  paramSerach: string = '';
  company: number = 0;

  p: number = 1;
  numPag: number = 15;
  totalReg: number = 0;
  config: any;
  configCustomPagination: any;
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  isLoading: boolean = false;
  constructor(
    private _srvEmployees: EmployeesService,
    private _srvGeneral: GeneralService,
    private _srvStorage: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    this.getcompanies();
  }

  getcompanies() {
    this.isLoading = true;
    this.companies = [];
    this._srvGeneral.getEmpresa().subscribe((res) => {
      this.companies = res.data;
      this.isLoading = false;
    });
  }
  getEmployees() {
    this.employees = [];
    this.isLoading = true;

    this._srvEmployees.getEmployees().subscribe((res) => {
      this.employees = res.data;
      this.isLoading = false;
    });
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }

  onPageChange(event: any) {
    this.configCustomPagination.currentPage = event;
  }
  serachEmployees() {
    this.isLoading = true;

    this.employees = [];
    this._srvEmployees
      .searchEmployees(this.company, this.paramSerach)
      .subscribe((res) => {
        console.log(res.data);
        
        this.employees = res.data;
        this.isLoading = false;
      });
  }

  editEmployee(employee: any) {
    this._srvStorage.set('employee', employee);
    this.router.navigate([`/dashboard/empleyee-edit`]);
  }
}
