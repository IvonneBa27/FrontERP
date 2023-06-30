import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { typeStoreExits } from 'src/app/models/typeStoreExits.model';
import { Users } from 'src/app/models/users.model';
import { warehouse_entry } from 'src/app/models/warehouse_entry.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { StorageService } from 'src/app/services/storage.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-exit-store',
  templateUrl: './exit-store.component.html',
  styleUrls: ['./exit-store.component.css']
})
export class ExitStoreComponent {
  exitStoreForm: FormGroup;
  isLoading = false;
  incomeStore: warehouse_entry[] = [];
  idStore: any;
  idSecction: any;
  idBrand: any;
  idCategory: any;
  idSubcategory: any;
  idProduct: any;
  idTypeExit: any;
  typeExit: typeStoreExits[] = [];
  nombre_completo: any;
  iduser: any;
  users: Users[] = [];
  idPersonReceives: any;
  authorizedId: any;
  id: any;
  store: any;
  secction: any;

  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _srvStorage: StorageService,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService,
    private activatedRoute: ActivatedRoute,
    private _serviceinventory: InventoryService,
    private _servicesuser: UserservicesService,
  ) { 

    this.exitStoreForm = this.formBuilder.group({
      store_origin_id: new FormControl('', [Validators.required]),
      id_type_exit: new FormControl('', [Validators.required]),
      authorized_id: new FormControl('', [Validators.required]),
      person_who_receives: new FormControl('', [Validators.required]),

    });

    this.nombre_completo = this._srvStorage.get('nombre_completo');
    this.iduser = this._srvStorage.get('user_id');

    this._serviceinventory.getListIncomeStore().subscribe(respuesta => {
      this.isLoading = true;
      this.incomeStore = respuesta.data;
      console.log(this.incomeStore);
      this.isLoading = false;

    });

    this._serviceinventory.getTypeExit().subscribe(respuesta => {
      this.isLoading = true;
      this.typeExit = respuesta.data;
      console.log(this.typeExit);
      this.isLoading = false;

    });

    this._servicesuser.getUser().subscribe(respuesta => {
      this.isLoading = true;
      this.users = respuesta.data;
      console.log(this.users);
      this.isLoading = false;

    });

  }
  getStoreSecction(event: any) {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    console.log(this.incomeStore);

    this.idStore = this.incomeStore[selectedValue].idStore
    this.idSecction = this.incomeStore[selectedValue].idSecction;
    this.idBrand = this.incomeStore[selectedValue].idbrand;
    this.idCategory = this.incomeStore[selectedValue].idcategory;
    this.idSubcategory = this.incomeStore[selectedValue].idsubcategory;
    this.idProduct = this.incomeStore[selectedValue].idproduct;

        console.log(this.idStore);
        console.log(this.idSecction);
        console.log(this.idBrand);
        console.log(this.idCategory);
        console.log(this.idSubcategory);
        console.log(this.idProduct);
  }

  createStoreExit(){

    const id_type_exit = this.exitStoreForm.value['id_type_exit'];
    const authorized_id = this.exitStoreForm.value['authorized_id'];
    const person_who_receives = this.exitStoreForm.value['person_who_receives'];

    const body={
      store_origin_id: this.idStore,
      section_origin_id: this.idSecction,
      id_type_exit: id_type_exit,
      user_id: this.iduser,
      authorized_id: authorized_id,
      person_who_receives: person_who_receives,
      category_id: this.idCategory,
      subcategory_id: this.idSubcategory,
      brand_id: this.idBrand,

    };

    this.isLoading = true;
    this._serviceinventory.createStoreExit(body).subscribe(res => {
     
      this._srvStorage.set('store_origin_id', res['data']['store_origin_id']);
      this._srvStorage.set('section_origin_id', res['data']['section_origin_id']);
      
      if (res.status == 'success') {
  
      
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Crear registro de Salida de Almacén', 'CREATE').subscribe(() => { });
        this._srvStorage.set('id', res['data']['id']);
        this.id = this._srvStorage.get('id');
 
       

        console.log(this.id)
        this.StoreExitDetail();

      } else {
        this.isLoading = false;
        swal.fire('Do It Right', res.msg, 'error');
      }
    
    });

  }

  StoreExitDetail(){
     this.router.navigate([`/dashboard/exit-store-detail/${this.id}`]);
    }




}
