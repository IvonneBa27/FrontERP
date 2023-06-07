import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { Secctions } from 'src/app/models/secctions.model';
import { Stores } from 'src/app/models/stores.model';
import { Suppliers } from 'src/app/models/suppliers.model';
import { warehouse_entry } from 'src/app/models/warehouse_entry.model';
import { warehouse_income_type } from 'src/app/models/warehouse_income_type.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { StorageService } from 'src/app/services/storage.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-income-store',
  templateUrl: './income-store.component.html',
  styleUrls: ['./income-store.component.css']
})
export class IncomeStoreComponent  {
  Stores: Stores[] = [];
  Secction: Secctions[] = [];
  Warehouse_Income_Type: warehouse_income_type[] = [];  
  warehouse_entry: warehouse_entry = new warehouse_entry();
  supplier: Suppliers [] = [];
  incomeStoreForm: FormGroup;
  IdStore: any;
  IdSecction: any;
  isLoading = false;
  id: any;
  
  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _srvStorage: StorageService,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService, 
    private activatedRoute: ActivatedRoute,
  ) { 

    this._servicesgeneral.getStores().subscribe(respuesta => {
        this.Stores = respuesta.data;
    });

    this._servicesgeneral.getSecction().subscribe(respuesta => {
      this.Secction = respuesta.data;
    });

    this._servicesgeneral.getTypeIncome().subscribe(respuesta => {
      this.Warehouse_Income_Type = respuesta.data;
    });


    this._servicesgeneral.getSupplier().subscribe(respuesta => {
      this.supplier = respuesta.data;
    });

   
    this.incomeStoreForm = this.formBuilder.group({
      warehouse_id: new FormControl(''),
      section_id: new FormControl(''),
      warehouse_entry_type_id: new FormControl(''),
      purchase_order_number: new FormControl(''),
      invoice: new FormControl(''),
      invoice_date: new FormControl(''),
      provider_id: new FormControl(''),



    });
    
  }

  incomeStore(){
    const warehouse_id = this.incomeStoreForm.value['warehouse_id'];
    const section_id = this.incomeStoreForm.value['section_id'];
    const warehouse_entry_type_id = this.incomeStoreForm.value['warehouse_entry_type_id'];
    const purchase_order_number = this.incomeStoreForm.value['purchase_order_number'];
    const invoice = this.incomeStoreForm.value['invoice'];
    const invoice_date = this.incomeStoreForm.value['invoice_date'];
    const provider_id = this.incomeStoreForm.value['provider_id'];

    const body = {
      warehouse_id: warehouse_id,
      section_id: this.IdSecction,
      warehouse_entry_type_id:  warehouse_entry_type_id,
      purchase_order_number: purchase_order_number,
      invoice: invoice,
      invoice_date: invoice_date,
      provider_id: provider_id,
    }


    this._servicesuser.createIncomeStore(body).subscribe(res => {
     
    
      if (res.status == 'success') {
  
      
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Crear Ingreso Almacen', 'CREATE').subscribe(() => { });
        this._srvStorage.set('id', res['data']['id']);
        this.id = this._srvStorage.get('id');

        console.log(this.id)
        this.IncomeStoreDetail();

      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }

    });



  }

  obtIdStores(){
    
    const IdStore = this.incomeStoreForm.value['warehouse_id'];
    this._servicesuser.getStoreSecction(IdStore).subscribe(respuesta => {
      this.Secction = respuesta.data;

      console.log(this.Secction)
    });

  }

 
  
  homeInventory(){
    this.router.navigateByUrl('/dashboard/home-inventory')
  }

  IncomeStoreDetail(){
  //this.router.navigateByUrl('/dashboard/income-store-detail')
   this.router.navigate([`/dashboard/income-store-detail/${this.id}`]);
  }

  get idStore(){
    return this.incomeStoreForm.get('idStore');

  }

 

}
