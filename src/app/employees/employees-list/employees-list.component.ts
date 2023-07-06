import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from '../../models/employee.model';
import { GeneralService } from 'src/app/services/general.service';
import { Empresa } from 'src/app/models/empresa.model';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

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
  public maxSize: number = 15;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  isLoading: boolean = false;
  status: number = 0;
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
      this.totalReg = this.employees.length;
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
      .searchEmployees(this.company, this.paramSerach, this.status)
      .subscribe((res) => {
        console.log(res.data);

        this.employees = res.data;
        this.totalReg = this.employees.length;
        this.isLoading = false;
      });
  }

  editEmployee(employee: any) {
    this._srvStorage.set('employee', employee);
    this.router.navigate([`/dashboard/empleyee-edit`]);
  }

  showEmployee(employee: any) {
    this._srvStorage.set('employee', employee);
    this.router.navigate([`/dashboard/empleyee-show`]);
  }
  deleteEmployee(idEmployee: any) {
    this.isLoading = true;

    this._srvEmployees.deleteEmployee(idEmployee).subscribe((res) => {
      if (res.status == 'success') {
        this._srvStorage.remove('employee');
        swal.fire('Do It Right', res.msg, 'success');
        this.getEmployees();
        this.isLoading = false;
      } else {
        this.isLoading = false;
        swal.fire('Do It Right', res.msg, 'error');
      }
    });
  }
}
