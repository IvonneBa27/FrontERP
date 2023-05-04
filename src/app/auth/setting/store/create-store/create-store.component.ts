import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { Estatus } from 'src/app/models/estatus.model';
import { Users } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent  {
storesForm: FormGroup;
Estatus: Estatus[] = [];
Users : Users[] = [];
essential_section: any;

  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService, 

  ){ 

    this._servicesgeneral.getEstatus().subscribe(respuesta => {
      this.Estatus = respuesta.data;
    });

    this._servicesgeneral.getUsers().subscribe(respuesta => {
      this.Users = respuesta.data;
    });

    
    this.storesForm = this.formBuilder.group({
      name: new FormControl(''),
      url_maps: new FormControl(''),
      description: new FormControl(''),
      id_status: new FormControl(''),
      id_user: new FormControl(''),
      essential_section: new FormControl(''),
    });

  }

  ListStores(){
    this.router.navigateByUrl('/dashboard/list-store')
  }

  createStore(){
    const name = this.storesForm.value['name'];
    const url_maps = this.storesForm.value['url_maps'];
    const description = this.storesForm.value['description'];
    const id_status = this.storesForm.value['id_status'];
    const id_user = this.storesForm.value['id_user'];
    const essential_section = this.storesForm.value['essential_section'];


    const body = {
        name: name,
        url_maps: url_maps,
        description: description,
        id_status: id_status,
        id_user: id_user,
        essential_section: essential_section,
      

    };
    this._servicesuser.createStore(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Crear Almacen', 'CREATE').subscribe(() => { });
        this.ListStores();

      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }

    });



   }


}
