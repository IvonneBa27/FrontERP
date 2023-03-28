import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Estatus } from 'src/app/models/estatus.model';
import { type_modules } from 'src/app/models/type_modules.model';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { GeneralService } from 'src/app/services/general.service';
import { cat_modues } from 'src/app/models/cat_modues.model';


@Component({
  selector: 'app-delete-module',
  templateUrl: './delete-module.component.html',
  styleUrls: ['./delete-module.component.css']
})
export class DeleteModuleComponent  {
  id_module;
  modulesForm: FormGroup;
  Estatus: Estatus[] = [];
  Type_modules: type_modules[] = [];
  Cat_modues: cat_modues = new cat_modues;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _servicesgeneral: GeneralService,


  ) {
    this.modulesForm = this.formBuilder.group({
      name: new FormControl(''),
      id_type: new FormControl(''),
      order: new FormControl(''),
      status: new FormControl(''),
    });

    this.id_module = this.activatedRoute.snapshot.paramMap.get('id');
    this._servicesuser.getModulebyId(this.id_module).subscribe((res) => {
      this.Cat_modues = res.data;
      //console.log(this.Cat_modues);

      this._servicesgeneral.requestCatalogos().subscribe(respuesta => {

        this.Estatus = respuesta[2].data;
        this.Type_modules = respuesta[11].data;

        this.setForm();
      });

    });


   }

   setForm() {
    this.modulesForm.controls['name'].setValue(this.Cat_modues.name);
    this.modulesForm.controls['id_type'].setValue(this.Cat_modues.id_type);
    this.modulesForm.controls['order'].setValue(this.Cat_modues.order);
    this.modulesForm.controls['status'].setValue(this.Cat_modues.status);


  }

  ListModule() {
    this.router.navigateByUrl('/dashboard/list-module')

  }

  DeleteModule() {

    const name = this.modulesForm.value['name'];
    const id_type = this.modulesForm.value['id_type'];
    const order = this.modulesForm.value['order'];
    const status = this.modulesForm.value['status'];

    const body ={
      id: this.id_module,
    };
  
    this._servicesuser.deleteModule(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');
        this.ListModule();
  
  
      }
  
      else {
        swal.fire('Do It Right', res.msg, 'error');
      }
  
    });

  }


 

}
