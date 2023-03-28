import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { Estatus } from 'src/app/models/estatus.model';
import { type_modules } from 'src/app/models/type_modules.model';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-create-typemodule',
  templateUrl: './create-typemodule.component.html',
  styleUrls: ['./create-typemodule.component.css']
})
export class CreateTypemoduleComponent {
  typesmodulesForm: FormGroup;
  Estatus: Estatus[] = [];


  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _servicesgeneral: GeneralService,
  ) {
    this._servicesgeneral.getEstatus().subscribe(respuesta => {
      this.Estatus = respuesta.data;
    });

    this.typesmodulesForm = this.formBuilder.group({
      name: new FormControl(''),
      status: new FormControl(''),
    });


  }

  ListTypeModule()
  {
   this.router.navigateByUrl('/dashboard/list-typemodule')
  }

 createTypeModule()
 {
   const name = this.typesmodulesForm.value['name'];
   const status = this.typesmodulesForm.value['status'];


   const body = 
   {
     name:name,
     status:status,
   };

   this._servicesuser.createTypeModule(body).subscribe(res => {
    console.log(res);
    if (res.status == 'success') {
      swal.fire('Do It Right', res.message, 'success');

      this.ListTypeModule();
    

    }

    else
    {
      swal.fire('Do It Right', res.msg, 'error');
    }

  });
 }

}
