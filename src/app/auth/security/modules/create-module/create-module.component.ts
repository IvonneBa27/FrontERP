import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import swal from 'sweetalert2';
import { GeneralService } from 'src/app/services/general.service';
import { Estatus } from 'src/app/models/estatus.model';
import { type_modules } from 'src/app/models/type_modules.model';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';


@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.css']
})
export class CreateModuleComponent {
  modulesForm: FormGroup;
  Estatus: Estatus[] = [];
  Type_modules: type_modules[] = [];



  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _servicesgeneral: GeneralService,
  ) {
  this._servicesgeneral.getEstatus().subscribe(respuesta =>{
      this.Estatus = respuesta.data;
    });

  this._servicesgeneral.getTypeModule().subscribe(respuesta =>{
        this.Type_modules = respuesta.data;
      });

  this.modulesForm = this.formBuilder.group({
    name: new FormControl(''),
    id_type: new FormControl(''),
    order: new FormControl(''),
    status: new FormControl(''),

    });
   }

   ListModule()
   {
    this.router.navigateByUrl('/dashboard/list-module')
   }

   createModule()
   {
     const name = this.modulesForm.value['name'];
     const id_type = this.modulesForm.value['id_type'];
     const order = this.modulesForm.value['order'];
     const status = this.modulesForm.value['status'];


     const body = {
      name: name,
      id_type: id_type,
      order: order,
      status: status,
     };


     this._servicesuser.createModule(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');

        this.ListModule();
      

      }

      else
      {
        swal.fire('Do It Right', res.msg, 'error');
      }

    });

   }


}
