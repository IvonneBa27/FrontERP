import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { General } from 'src/app/models/general.model';
import { BlackListService } from 'src/app/services/black-list.service';
import { GeneralService } from 'src/app/services/general.service';
import { StorageService } from 'src/app/services/storage.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-black-list-edit',
  templateUrl: './black-list-edit.component.html',
  styleUrls: ['./black-list-edit.component.css'],
})
export class BlackListEditComponent implements OnInit {
  isLoading: boolean = false;
  employeeForm: FormGroup;
  causes: General[] = [];
  reasons: General[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private _srvGenera: GeneralService,
    private _srvBlackList: BlackListService,
    private router: Router,
    private _srvStorage: StorageService
  ) {
    const idUser = JSON.parse(this._srvStorage.get('user_id'));
    this.employeeForm = this.formBuilder.group({
      apellido_pat: new FormControl('', [Validators.required]),
      apellido_mat: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      curp: new FormControl(''),
      id_reasons: new FormControl('', [Validators.required]),
      id_cause: new FormControl('', [Validators.required]),
      id_status: new FormControl('1'),
      id_user: new FormControl(idUser),
      id: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this._srvGenera.catalogsBlackList().subscribe((res) => {
      this.reasons = res[1].data;
      this.causes = res[0].data;
      this.setForm();
    });
  }

  setForm() {
    const blackList = JSON.parse(this._srvStorage.get('blackListRegister'));
    const idUser = JSON.parse(this._srvStorage.get('user_id'));

    this.employeeForm.patchValue({
      apellido_pat: blackList.apellido_pat,
      apellido_mat: blackList.apellido_mat,
      name: blackList.name,
      date: blackList.date,
      description: blackList.description,
      curp: blackList.curp,
      id_reasons: blackList.id_reasons,
      id_cause: blackList.id_cause,
      id_status: blackList.id_status,
      id_user: idUser,
      id: blackList.id,
    });
    this.isLoading = false;
  }

  editarRegistro(){
    this.isLoading = true;
    this._srvBlackList.edit(this.employeeForm.value).subscribe(res => {
        if (res.status == 'success') {
          this._srvStorage.remove('employee');
          swal.fire('Do It Right', res.msg, 'success');
          this.isLoading = false;
          this.router.navigate([`/dashboard/black-list`]);
        } else {
          this.isLoading = false;
          swal.fire('Do It Right', res.msg, 'error');
        }
      
    });
  }
}
