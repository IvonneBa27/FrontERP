import { Component, OnInit } from '@angular/core';
import { BlackList } from 'src/app/models/blackList.model';
import { BlackListService } from 'src/app/services/black-list.service';
import swal from 'sweetalert2';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-black-list',
  templateUrl: './black-list.component.html',
  styleUrls: ['./black-list.component.css'],
})
export class BlackListComponent implements OnInit {
  isLoading: boolean = false;
  paramSerach: string = '';
  employees: BlackList[] = [];

  p: number = 1;
  numPag: number = 15;
  totalReg: number = 0;
  config: any;
  configCustomPagination: any;
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;

  fileName = 'Lista Negra.xlsx';
  constructor(private _srvBlackList: BlackListService) {}

  ngOnInit(): void {
    this.getBlackList();
  }

  getBlackList() {
    this.isLoading = true;
    this.employees = [];
    this._srvBlackList.getBlackList().subscribe((res) => {
      if (res.status == 'success') {
        this.employees = res.data;
      }

      this.isLoading = false;
    });
  }
  serachEmployees() {
    console.log(this.paramSerach);
    this.employees = [];
    this._srvBlackList.serach(this.paramSerach).subscribe((res) => {
      if (res.data.length > 0) {
        this.employees = res.data;
      }
    });
  }

  editEmployee(item: any) {}

  deleteEmployee(item: any) {
    swal
      .fire({
        title: 'Do It Right',
        text: '¿Seguro quieres eliminar el registro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
      })
      .then((result) => {
        if (result.isConfirmed) {
          this._srvBlackList.delete(item).subscribe((res) => {
            if (res.status == 'success') {
              this.isLoading = false;
              swal.fire('Do It Right', res.msg, 'success');
              this.getBlackList();
            } else {
              swal.fire('Do It Right', res.msg, 'error');

              this.isLoading = false;
            }
          });
        }
      });
  }

  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}
