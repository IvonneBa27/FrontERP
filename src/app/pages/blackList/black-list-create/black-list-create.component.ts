import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { General } from 'src/app/models/general.model';
import { BlackListService } from 'src/app/services/black-list.service';
import { GeneralService } from 'src/app/services/general.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-black-list-create',
  templateUrl: './black-list-create.component.html',
  styleUrls: ['./black-list-create.component.css'],
})
export class BlackListCreateComponent implements OnInit {
  isLoading: boolean = false;
  employeeForm: FormGroup;
  causes: General[] = [];
  reasons: General[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private _srvGenera: GeneralService,
    private _srvBlackList: BlackListService,
    private router: Router

  ) {
    this.employeeForm = this.formBuilder.group({
      apellido_pat: new FormControl('', [Validators.required]),
      apellido_mat: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      curp: new FormControl('', ),
      id_reasons: new FormControl('', [Validators.required]),
      id_cause: new FormControl('', [Validators.required]),
      id_status: new FormControl('1'),
      id_user: new FormControl('1'),

    });
  }

  ngOnInit(): void {
    this._srvGenera.gerReasons().subscribe((res) => {
      console.log(res);
      this.reasons = res.data;
    });

    this._srvGenera.getCauses().subscribe((res) => {
      console.log(res);
      this.causes = res.data;
    });
  }

  createRegistro() {
    this.isLoading = true;
    console.log(this.employeeForm.value);
    this._srvBlackList.create(this.employeeForm.value).subscribe( res => {
        if (res.status == 'success') {
          this.isLoading = false;
          swal.fire('Do It Right', res.msg, 'success');
          this.router.navigate([`/dashboard/black-list`]);
        } else { 
          swal.fire('Do It Right', res.msg, 'error');
          this.isLoading = false;
        }
    })    
  }
}
