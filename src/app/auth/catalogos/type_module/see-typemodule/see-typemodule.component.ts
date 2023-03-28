import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { type_modules } from 'src/app/models/type_modules.model';
import { Estatus } from 'src/app/models/estatus.model';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-see-typemodule',
  templateUrl: './see-typemodule.component.html',
  styleUrls: ['./see-typemodule.component.css']
})
export class SeeTypemoduleComponent {
  id_typemodule;
  typesmodulesForm: FormGroup;
  Estatus: Estatus[] = [];
  Type_modules: type_modules = new type_modules;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _servicesgeneral: GeneralService,

  ) {

    this.typesmodulesForm = this.formBuilder.group({
      name: new FormControl(''),
      status: new FormControl(''),
    });

    this.id_typemodule = this.activatedRoute.snapshot.paramMap.get('id');
    this._servicesuser.getTypeModulebyId(this.id_typemodule).subscribe((res) => {
    this.Type_modules = res.data;


      this._servicesgeneral.requestCatalogos().subscribe(respuesta => {
      this.Estatus = respuesta[2].data;


        this.setForm();
      });

    });


   }

   setForm() {
    this.typesmodulesForm.controls['name'].setValue(this.Type_modules.name);
    this.typesmodulesForm.controls['status'].setValue(this.Type_modules.status);
  }

  ListTypeModule() {
    this.router.navigateByUrl('/dashboard/list-typemodule')

  }

  SeeTypeModule() {

    const name = this.typesmodulesForm.value['name'];
    const status = this.typesmodulesForm.value['status'];



  }


 

}
