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
import swal from 'sweetalert2';

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
  idBrand: any;
  idCategory: any;
  idSubcategory: any;
  idProduct: any;
  idStoreD: any;
  idSecctionD: any;
  id_transfer_store: any;
  nombre_completo: any;
  iduser: any;
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
  totalAmount: any;
  totalReceived: any;
  idStatus: any;
  observation: any;



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
    this.iduser = this._srvStorage.get('user_id');

    console.log(this.nombre_completo);
    console.log(this.iduser);

    this._servicesuser.getListIncomeStore().subscribe(respuesta => {
      this.isLoading = true;
      this.incomeStore = respuesta.data;
      console.log(this.incomeStore);
      this.isLoading = false;

    });

    this._servicesuser.getListStoreSecction().subscribe(respuesta => {
      this.isLoading = true;
      this.storeSecction = respuesta.data;
      console.log(this.storeSecction);
      this.isLoading = false;

    });

  }



  obtIdOrigin(event: any) {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    console.log(this.incomeStore);

    this.idStoreO = this.incomeStore[selectedValue].idStore
    this.idSecctionO = this.incomeStore[selectedValue].idSecction;
    this.idBrand = this.incomeStore[selectedValue].idbrand;
    this.idCategory = this.incomeStore[selectedValue].idcategory;
    this.idSubcategory = this.incomeStore[selectedValue].idsubcategory;
    this.idProduct = this.incomeStore[selectedValue].idproduct;

  console.log(this.idStoreO);
  console.log(this.idSecctionO);
  console.log(this.idBrand);
  console.log(this.idCategory);
  console.log(this.idSubcategory);
  console.log(this.idProduct);
    

  }

  obtIdDestiny(event: any) {
    const selectedValue = event.target.value;

    console.log(selectedValue);
    console.log(this.storeSecction);
    this.idStoreD = this.storeSecction[selectedValue].idStore
    this.idSecctionD = this.storeSecction[selectedValue].idSecction

    console.log(this.idStoreD);
    console.log(this.idSecctionD);

  }

  createTransferStore(){
    const body ={
      store_origin_id : this.idStoreO,
      section_origin_id : this.idSecctionO,
      store_destiny_id : this.idStoreD, 
      section_destiny_id : this.idSecctionD,
      category_id: this.idCategory,
      subcategory_id : this.idSubcategory,
      brand_id : this.idBrand,
      user_id: this.iduser,


    };
    this._servicesuser.createTransferStore(body).subscribe(res => {
      //console.log(res);
      if (res.status == 'success') {
       // swal.fire('Do It Right', res.message, 'success');
       // this._serviceauth.createLog('Crear Transfer', 'CREATE').subscribe(() => { });
        this._srvStorage.set('id_transfer_store', res['data']['id']);

        this.id_transfer_store = this._srvStorage.get('id_transfer_store');

        console.log('Id Transfer');
        console.log(this.id_transfer_store);

        this.ListProduct();
      }

      else {
       // swal.fire('Do It Right', res.msg, 'error');
      }
    });



  }


  ListProduct() {

    this._servicesuser.getListIncomeProduct(this.idStoreO, this.idSecctionO).subscribe(respuesta => {
      this.isLoading = true;
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



  createTransferDetailStore(){
    this.fetchCheckedIDs();
    console.log(this.selectedItemsList);



    const data =[];
    for(let transferDetail of this.selectedItemsList){
      data.push({
          id_transfer_store: this.id_transfer_store,
          id_det:transferDetail.idDet,
          product_id: transferDetail.product_id,
          product_name: transferDetail.product_name,
          brand_name: transferDetail.brand_name,
          sku: transferDetail.sku,
          serial_number: transferDetail.serial_number,
      });
      console.log('Body')
      console.log(data)

    }

    this.totalReceived = (this.selectedItemsList.length);
    console.log(this.totalReceived);

    this._servicesuser.createTransferDetailStore(data).subscribe(res => {
     // console.log(res);
   
    });

    this.updateTransferStore();


  }

  updateTransferStore(){

    if(this.totalAmount == this.totalReceived){
       this.idStatus = 1;
    }
    else{
       this.idStatus = 4;
    }

    const body ={
      id: this.id_transfer_store,
      amount: this.totalAmount,
      total_received: this.totalReceived,
      id_status: this.idStatus,
      observation: this.observation,
 
    };
    this.isLoading = true;
    this._servicesuser. updateTransferStore(body).subscribe(res => {
      console.log(res);
  
  
    });
    this.isLoading = false;
 
    this.homeInventory();
  }

  








}
