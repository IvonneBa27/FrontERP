import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estatus } from 'src/app/models/estatus.model';
import { Secctions } from 'src/app/models/secctions.model';
import { Stores } from 'src/app/models/stores.model';
import { Users } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { UserservicesService } from '../../../service/userservices.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-delete-secction',
  templateUrl: './delete-secction.component.html',
  styleUrls: ['./delete-secction.component.css']
})
export class DeleteSecctionComponent {
  id_secction;
  secctionForm: FormGroup;
  Estatus: Estatus[] = [];
  Stores: Stores[] = [];
  secction: Secctions = new Secctions;

  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService, 
    private activatedRoute: ActivatedRoute,
  ) { 
    this.id_secction = this.activatedRoute.snapshot.paramMap.get('id');
    this._servicesuser.getSecctionbyId(this.id_secction).subscribe((res) => {

      this.secction = res.data;

      console.log(res.data);

      this._servicesgeneral.requestCatalogos().subscribe(respuesta => {
        this.Estatus = respuesta[2].data;
        this.Stores = respuesta[21].data;
        

        this.setForm();

    
      });
    });

    this.secctionForm = this.formBuilder.group({
      name: new FormControl(''),
      id_status: new FormControl(''),
      id_store: new FormControl(''),
      nomenclature: new FormControl(''),
    });

  }

  setForm() {
    this.secctionForm.controls['name'].setValue(this.secction.name);
    this.secctionForm.controls['id_store'].setValue(this.secction.id_store);
    this.secctionForm.controls['id_status'].setValue(this.secction.id_status);
    this.secctionForm.controls['nomenclature'].setValue(this.secction.nomenclature);
   
  }


  ListStores(){
    this.router.navigate([`/dashboard/list-secction/${this.id_secction}`]);
  }


   deleteSecction(){
    const name = this.secctionForm.value['name'];
    const id_store = this.secctionForm.value['id_store'];
    const nomenclature = this.secctionForm.value['nomenclature'];


    const body = {
      id: this.id_secction,
      

  };
  this._servicesuser.deleteSecction(body).subscribe(res => {
    console.log(res);
    if (res.status == 'success') {
      swal.fire('Do It Right', res.message, 'success');

      this._serviceauth.createLog('Eliminar Seccion', 'DELETE').subscribe(() => { });
      this.ListStores();

    }

    else {
      swal.fire('Do It Right', res.msg, 'error');
    }

  });



   }


}
