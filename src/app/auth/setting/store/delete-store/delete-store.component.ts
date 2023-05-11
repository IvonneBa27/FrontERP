import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estatus } from 'src/app/models/estatus.model';
import { Stores } from 'src/app/models/stores.model';
import { Users } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { UserservicesService } from '../../../service/userservices.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-delete-store',
  templateUrl: './delete-store.component.html',
  styleUrls: ['./delete-store.component.css']
})
export class DeleteStoreComponent  {
  id_store;
  stores: Stores = new Stores();
  Estatus: Estatus[] = [];
  Users : Users[] = [];
  essential_section: any;
  storesForm: FormGroup;
  isLoading = false;

  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService, 
    private activatedRoute: ActivatedRoute, 
  ) {
    this.id_store = this.activatedRoute.snapshot.paramMap.get('id');
    this._servicesuser.getStoresbyId(this.id_store).subscribe((res) => {

      this.stores = res.data;

      console.log(res.data);
      this._servicesgeneral.requestCatalogos().subscribe(respuesta => {
        this.Estatus = respuesta[2].data;
        this.Users = respuesta[20].data;

        this.setForm();

    
      });
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

   setForm()
   {
    this.storesForm.controls['name'].setValue(this.stores.name);
    this.storesForm.controls['url_maps'].setValue(this.stores.url_maps);
    this.storesForm.controls['description'].setValue(this.stores.description);
    this.storesForm.controls['id_status'].setValue(this.stores.id_status);
    this.storesForm.controls['id_user'].setValue(this.stores.id_user);
    this.storesForm.controls['essential_section'].setValue(this.stores.essential_section);
   }

   ListStores(){
    this.router.navigateByUrl('/dashboard/list-store')
  }
 
 
  deleteStore()
  {
    this.isLoading = true;
    const name = this.storesForm.value['name'];
    const url_maps = this.storesForm.value['url_maps'];
    const description = this.storesForm.value['description'];
    const id_status = this.storesForm.value['id_status'];
    const id_user = this.storesForm.value['id_user'];
    const essential_section = this.storesForm.value['essential_section'];
 
    const body = {
     id: this.id_store,

 
 };
 this._servicesuser.deleteStores(body).subscribe(res => {
   console.log(res);
   if (res.status == 'success') {
     swal.fire('Do It Right', res.message, 'success');
 
     this._serviceauth.createLog('Eliminar Almacen', 'DELETE').subscribe(() => { });
     this.ListStores();
 
   }
 
   else {
     swal.fire('Do It Right', res.msg, 'error');
   }
 
 });
 this.isLoading = false;
 
  }


}
