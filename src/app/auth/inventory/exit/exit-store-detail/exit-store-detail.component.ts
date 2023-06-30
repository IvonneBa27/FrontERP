import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { exitStore } from 'src/app/models/exitStore.model';
import { exitStoreDetail } from 'src/app/models/exitStoreDetail.model';
import { product_detail_warehouse_entry } from 'src/app/models/product_detail_warehouse_entry.model';
import { Secctions } from 'src/app/models/secctions.model';
import { Stores } from 'src/app/models/stores.model';
import { typeStoreExits } from 'src/app/models/typeStoreExits.model';
import { Users } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-exit-store-detail',
  templateUrl: './exit-store-detail.component.html',
  styleUrls: ['./exit-store-detail.component.css']
})

export class ExitStoreDetailComponent{
  isLoading = false;
  id: any;
  exitStore: exitStore = new exitStore; 
  stores: Stores [] = [];
  storeDetail: Stores = new Stores();
  secction: Secctions [] = [];
  secctionDetail: Secctions = new Secctions();
  nombre_completo: any;
  typeStore: typeStoreExits [] = [];
  typeStoreDetail: typeStoreExits = new typeStoreExits();
  users: Users [] = [];
  usersDetail: Users = new Users();
  productDetail: product_detail_warehouse_entry[] = [];
  p: number = 1;
  numPag: number = 50;
  totalReg: number = 0;
  config: any;
  configCustomPagination: any;
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  isChecked: boolean = false; 
  selectedItemsList : product_detail_warehouse_entry[] = [];
  checkedIDs: any [] = [];
  totalAmount: any;
  totalReceived: any;
  idStatus: any;
  observations: any;
  idstore: any;
  idsecction: any;
  exitDetail: exitStoreDetail [] = [];


  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _srvStorage: StorageService,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService, 
    private activatedRoute: ActivatedRoute,
    private _serviceinventory: InventoryService,
  ) { 

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   // this.isLoading = true;
   this.nombre_completo = this._srvStorage.get('nombre_completo');
   this.idstore = this._srvStorage.get('store_origin_id');
   this.idsecction = this._srvStorage.get('section_origin_id');



    console.log(this.idstore)
    console.log(this.idsecction)

    this.isLoading = true;
    this._serviceinventory.getExitStoreId(this.id).subscribe((res) => {
    this.exitStore = res.data;
    console.log(this.exitStore);
           
              this._servicesgeneral.catalogsInventory().subscribe(respuesta=> {
              //Almacen
              this.stores = respuesta[1].data;
              this.storeDetail = this.stores.filter(x => x.id == this.exitStore.store_origin_id)[0];
              //Seccion
              this.secction = respuesta[0].data;
              this.secctionDetail = this.secction.filter(x => x.id == this.exitStore.section_origin_id)[0];
              //Tipo de Salida}
              this.typeStore = respuesta[3].data;
              this.typeStoreDetail = this.typeStore.filter(x => x.id == this.exitStore.id_type_exit)[0];
              //Usuario 
              this.users = respuesta[4].data;
              console.log(this.users)
              this.usersDetail = this.users.filter(x => x.id == this.exitStore.authorized_id)[0];

              this.isLoading = false;

            });
    });
  }

  homeInventory() {
    this.router.navigateByUrl('/dashboard/home-inventory')
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }

  onPageChange(event: any) {
    this.configCustomPagination.currentPage = event;
  }




  ListProduct() {
    this.isLoading = true;
    this._serviceinventory.getListIncomeProduct(this.idstore, this.idsecction).subscribe(respuesta => {
      for(let listproduct of respuesta.data) {
          let product = new product_detail_warehouse_entry();
          product.idDet = listproduct.idDet;
          product.product_id = listproduct.product_id;
          product.product_name = listproduct.product_name;
          product.sku = listproduct.sku;
          product.brand_name = listproduct.brand_name;
          product.serial_number = listproduct.serial_number;
          product.isChecked = false;
          this.productDetail.push(product);
      }

      console.log(this.productDetail);
      this.totalAmount= (this.productDetail.length);
      console.log(this.totalAmount);
      this.isLoading = false;
    });
  }

  changeSelection(){
    this.fetchSelectedItems(); 
    console.log("seleccion");
    
  }
  fetchSelectedItems() {
    this.selectedItemsList = this.productDetail.filter((value, index) => {
      return value.isChecked
    });
  }
  fetchCheckedIDs() {
    this.checkedIDs = []
    this.productDetail.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.idDet);
      }
    });
  }

  createExitSToreDetail(){
    this.fetchCheckedIDs();
    console.log(this.selectedItemsList);

    const data = [];
    for(let exitDetail of this.selectedItemsList){
      data.push({
          id_store_exit:  this.id,
          product_income_id: exitDetail.idDet,
          
      });
      console.log('Body')
      console.log(data)

    }

    this.totalReceived = (this.selectedItemsList.length);
    console.log(this.totalReceived);

    this._serviceinventory.createExitDetailStore(data).subscribe(res => {
      console.log(res);
   
    });

   this.updateExitStore();

  }

  updateExitStore(){
        if(this.totalAmount == this.totalReceived){
          this.idStatus = 1;
        }else{
            this.idStatus = 4;
        }

      const body ={
        id: this.id,
        amount: this.totalAmount,
        total_received: this.totalReceived,
        id_status: this.idStatus,
        observations: this.observations,};

        this.isLoading = true;
        this._serviceinventory.updateExitStore(body).subscribe(res => {
          console.log(res);
      
      
        });
        this.isLoading = false;

        this.homeInventory();
  }







}
