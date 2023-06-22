import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { product_detail_warehouse_entry } from 'src/app/models/product_detail_warehouse_entry.model';
import { Stores } from 'src/app/models/stores.model';
import { transfer_store_detail } from 'src/app/models/transfer_store_detail.model';
import { warehouse_entry } from 'src/app/models/warehouse_entry.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-transfer-store',
  templateUrl: './transfer-store.component.html',
  styleUrls: ['./transfer-store.component.css']
})
export class TransferStoreComponent {
  isLoading = false;
  incomeStore: warehouse_entry[] = [];
  storeSecction: Stores[] = [];
  productDetail: product_detail_warehouse_entry[] = [];
  transferDetail: transfer_store_detail[] = [];
  idIncome: any;
  idStoreO: any;
  idSecctionO: any;
  idStoreD: any;
  idSecctionD: any;
  nombre_completo: any;
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
  id: any;
  selectedItemsList : product_detail_warehouse_entry[] = [];
  checkedIDs: any [] = [];



  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _srvStorage: StorageService,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService,
    private activatedRoute: ActivatedRoute,
  ) {

    this.nombre_completo = this._srvStorage.get('nombre_completo');

    this._servicesuser.getListIncomeStore().subscribe(respuesta => {
      this.isLoading = true;
      this.incomeStore = respuesta.data;

    


      this.isLoading = false;
    });

    this._servicesuser.getListStoreSecction().subscribe(respuesta => {
      this.isLoading = true;
      this.storeSecction = respuesta.data;

      this.isLoading = false;

    });

  }

  obtIdOrigin() {
    this._srvStorage.set('idStore', this.incomeStore[0].idStore);
    this._srvStorage.set('idSecction', this.incomeStore[0].idSecction);


    this.idStoreO = this._srvStorage.get('idStore');
    this.idSecctionO = this._srvStorage.get('idSecction');

  }

  obtIdDestiny() {

    this._srvStorage.set('idStore', this.storeSecction[0].idStore);
    this._srvStorage.set('idSecction', this.storeSecction[0].idSecction);


    this.idStoreD = this._srvStorage.get('idStore');
    this.idSecctionD = this._srvStorage.get('idSecction');

  }

  doSomething(event:any){
  
    if(event.target.checked==true){
      console.log('checkbox is checked');
    }
    else{
      console.log('checkbox is unchecked');
    }
  }

  ListProduct() {
    //this._servicesuser. getIncomeStoryDetailbyId(this.idIncome).subscribe(respuesta => {
    this._servicesuser.getListIncomeProduct(this.idStoreO, this.idSecctionO).subscribe(respuesta => {
      this.isLoading = true;
      //this.productDetail = respuesta.data;
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
      this.isLoading = false;
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



  transferir(){
    this.fetchCheckedIDs();
    console.log(this.selectedItemsList);

    for(let idDeta of this.selectedItemsList){
     

    }

  }






}
