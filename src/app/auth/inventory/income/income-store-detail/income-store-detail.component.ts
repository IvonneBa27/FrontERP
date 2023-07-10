import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { cat_categories } from 'src/app/models/cat_categories.model';
import { cat_subcategories } from 'src/app/models/cat_subcategories.model';
import { producs } from 'src/app/models/producs.model';
import { product_detail_warehouse_entry } from 'src/app/models/product_detail_warehouse_entry.model';
import { Secctions } from 'src/app/models/secctions.model';
import { Stores } from 'src/app/models/stores.model';
import { Suppliers } from 'src/app/models/suppliers.model';
import { warehouse_entry } from 'src/app/models/warehouse_entry.model';
import { warehouse_entry_detail } from 'src/app/models/warehouse_entry_detail.model';
import { warehouse_income_type } from 'src/app/models/warehouse_income_type.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { StorageService } from 'src/app/services/storage.service';
import swal from 'sweetalert2';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-income-store-detail',
  templateUrl: './income-store-detail.component.html',
  styleUrls: ['./income-store-detail.component.css']
})
export class IncomeStoreDetailComponent  {
  Stores: Stores[] = [];
  Secction: Secctions[] = [];
  Warehouse_Income_Type: warehouse_income_type[] = [];  
  Catcategorie: cat_categories [] = [];
  SubCategorie: cat_subcategories [] = [];
  Producto: producs [] = [];
  ProductoDet: producs [] = [];
  ProductDetSerial: product_detail_warehouse_entry[] = [];
  warehouse_entry: warehouse_entry = new warehouse_entry();
  warehouse_entry_detail: warehouse_entry_detail = new warehouse_entry_detail();
  supplier: Suppliers [] = [];
  incomeStoreForm: FormGroup;
  IdStore: any;
  isLoading = false;
  id: any;
  IdCategorie: any;
  IdSubCategorie: any;
  IdProducto: any;
  name: any;
  model: any;
  idbrand: any;
  namebrand:any;
  sku: any;
  id_producto: any;
  amount: any;
  totalreceived: any;
  iddetproducto: any;
  iddetserial:any;
  Tamount: any;
  Treceived: any;
  serial_number:any;
  idserial: any;
  storeDetail: Stores = new Stores();
  secctionDetail: Secctions = new Secctions();
  typeIncomeDetail: warehouse_income_type = new warehouse_income_type();
  supplierDetail:Suppliers = new Suppliers();
  observations: any;
  productDetail: product_detail_warehouse_entry = new product_detail_warehouse_entry();
  iduser: any;
  idStatus: any;


  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _srvStorage: StorageService,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService, 
    private activatedRoute: ActivatedRoute,
  ) { 

   
    this.iduser = this._srvStorage.get('user_id');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;
    this._servicesuser.getIncomeStorybyId(this.id).subscribe((res) => {

      this.warehouse_entry = res.data;
      console.log(this.warehouse_entry)
   

      this._servicesgeneral.requestCatalogos().subscribe(respuesta=> {
        this.Stores = respuesta[22].data;
        this.storeDetail = this.Stores.filter(x => x.id == this.warehouse_entry.warehouse_id)[0];
   
        this.Secction = respuesta[21].data;
        this.secctionDetail = this.Secction.filter(x => x.id == this.warehouse_entry.section_id)[0];
        

        this.Warehouse_Income_Type = respuesta[23].data;
        this.typeIncomeDetail = this.Warehouse_Income_Type.filter(x => x.id == this.warehouse_entry.warehouse_entry_type_id)[0];
       
        this.supplier = respuesta[24].data;
        this.supplierDetail = this.supplier.filter(x => x.id == this.warehouse_entry.provider_id)[0];
    
        
        this.setForm();
      });
    });

    this.incomeStoreForm = this.formBuilder.group({
      id: new FormControl(''),
      warehouse_id: new FormControl(''),
      section_id: new FormControl(''),
      warehouse_entry_type_id: new FormControl(''),
      purchase_order_number:new FormControl(''),
      invoice:new FormControl(''),
      invoice_date: new FormControl(''),
      provider_id: new FormControl(''),
      warehouse_entry_id: new FormControl(''),
      category_id: new FormControl(''),
      subcategory_id: new FormControl(''),
      brand_id: new FormControl(''),
      product_id: new FormControl(''),
      amount: new FormControl(''),
      total_received: new FormControl(''),
      serial_number: new FormControl(''),
      observations: new FormControl(''),

  
    });

    this._servicesgeneral.getCategorie().subscribe(respuesta => {
      this.Catcategorie = respuesta.data;
     
  });


  }
  ObtenerFecha(fecha: string) {

    const newFecha = new Date(fecha);
    const dia = newFecha.getDate().toString().padStart(2, '0');
    const mes = (newFecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = newFecha.getFullYear();

    // crear nueva cadena de texto en formato "yyyy-mm-dd"
    return anio + "-" + mes + "-" + dia;

  }


  setForm()
  {
    this.incomeStoreForm.controls['id'].setValue(this.warehouse_entry.id);
    this.incomeStoreForm.controls['warehouse_id'].setValue(this.warehouse_entry.warehouse_id);
    this.incomeStoreForm.controls['section_id'].setValue(this.warehouse_entry.section_id);
    this.incomeStoreForm.controls['warehouse_entry_type_id'].setValue(this.warehouse_entry.warehouse_entry_type_id);
    this.incomeStoreForm.controls['purchase_order_number'].setValue(this.warehouse_entry.purchase_order_number);
    this.incomeStoreForm.controls['invoice'].setValue(this.warehouse_entry.invoice);
    this.incomeStoreForm.controls['invoice_date'].setValue(this.ObtenerFecha(this.warehouse_entry.invoice_date));
    this.incomeStoreForm.controls['provider_id'].setValue(this.warehouse_entry.provider_id);
    this.isLoading = false;
  }

  obtIdCategorie(){
  
    

    this.isLoading = true;
    
    this._servicesuser.getCatalog_SubCategorie(this.IdCategorie).subscribe(respuesta => {
      this.SubCategorie = respuesta.data;

      console.log(this.SubCategorie);
      this.isLoading = false;
    });

  }

  obtIdSubcategorie(){

    this.isLoading = true;
    this._servicesuser.getCatalog_productCategorie(this.IdCategorie, this.IdSubCategorie).subscribe(respuesta => {
      
      this.Producto = respuesta.data;
      this.isLoading = false;
     
    });

  }

  ListProduct(){
   
    this.isLoading = true;
    console.log(this.IdProducto);
    console.log(this.IdCategorie);
    console.log(this.IdSubCategorie);
    this._servicesuser.getList_productCateogie(this.IdProducto, this.IdCategorie, this.IdSubCategorie).subscribe(respuesta => {
      this.ProductoDet = respuesta.data;
      console.log(this.ProductoDet);


        this._srvStorage.set('id_producto', this.ProductoDet[0].id);
        this._srvStorage.set('id_brand', this.ProductoDet[0].id_brand);
        this._srvStorage.set('model', this.ProductoDet[0].model);
        this._srvStorage.set('name', this.ProductoDet[0].name);
        this._srvStorage.set('namebrand', this.ProductoDet[0].namebrand);
        this._srvStorage.set('sku', this.ProductoDet[0].sku);

        this.id_producto = this._srvStorage.get('id_producto');
        this.idbrand = this._srvStorage.get('id_brand');
        this.model = this._srvStorage.get('model');
        this.name = this._srvStorage.get('name');
        this.namebrand = this._srvStorage.get('namebrand');
        this.sku = this._srvStorage.get('sku');
 
      this.isLoading = false;
    });

  }


  homeInventory(){
    this.router.navigateByUrl('/dashboard/home-inventory')
  }

  createDetailProduct(){
    
    const warehouse_entry_id  = this.warehouse_entry.id;
    const category_id = this.IdCategorie;
    const subcategory_id = this.IdSubCategorie;
    const amount = this.amount;
    const total_received = this.totalreceived;



    const body ={
      warehouse_entry_id:  this.warehouse_entry.id, 
      category_id: this.IdCategorie,
      subcategory_id: this.IdSubCategorie,
      brand_id: this.idbrand,
      product_id: this.id_producto,
      amount: amount,
      total_received:total_received,
    };


   
    this._servicesuser.createIncomeDetailStore(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');
        this._serviceauth.createLog('Crear Detalle de Ingreso Almacen', 'CREATE').subscribe(() => { });
        this._srvStorage.set('iddetproducto', res['data']['id']);
        this._srvStorage.set('amount', res['data']['amount']);
        this._srvStorage.set('total_received', res['data']['total_received']);


        for(let i=0; i<total_received; i++){
          this.createDetailSerialProduct()
        }

      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }
    });

  }

  createDetailSerialProduct(){
   
      const body ={
        warehouse_entry_detail_id: this.warehouse_entry.id, 
        product_id: this.id_producto,
        product_name: this.name,
        brand_name: this.namebrand,
        sku: this.sku,
      };
  
    
      this._servicesuser.createIncomeDetailSerialStore(body).subscribe(res => {

      });
      
      this.IncomeStoreDetailProduct()
   
  }



    

IncomeStoreDetailProduct(){
    this.isLoading = true;
 
    this._servicesuser.getIncomeStoryDetailbyId(this.warehouse_entry.id).subscribe(respuesta => {
      this.ProductDetSerial = respuesta.data;


      this.productDetail = this.ProductDetSerial.filter(x => x.warehouse_entry_detail_id == this.warehouse_entry.id)[0];

      console.log(this.productDetail);
      
      this.isLoading = false;
    });

      
  }

 UpdateSerialProduct(ProductDetSerial: any){


  this.idserial = ProductDetSerial.id;
  this.serial_number = ProductDetSerial.serial_number;

  console.log(this.idserial);
  console.log(this.serial_number);

  const body ={
    id: this.idserial,
    serial_number: this.serial_number,
  };
  this.isLoading = true;
  this._servicesuser.updateIncomeStorySerial(body).subscribe(res => {
    console.log(res);
    if (res.status == 'success') {
      swal.fire('Do It Right', res.message, 'success');

      this._serviceauth.createLog('Actualizar Serial de Detalle de Producto', 'UPDATE').subscribe(() => { });
    

    }

    else {
      swal.fire('Do It Right', res.msg, 'error');
    }

  });
  this.isLoading = false;
}

UpdateobservationsIncome(){

  if(this.amount == this.totalreceived){
    this.idStatus = 1;
 }
 else{
    this.idStatus = 4;
 }

  const body={
    id: this.id,
    observation: this.observations,
    id_status: this.idStatus,
    user_id: this.iduser

  };
  this.isLoading = true;
  this._servicesuser. updateIncomeStore(body).subscribe(res => {
    console.log(res);
    if (res.status == 'success') {
      swal.fire('Do It Right', res.message, 'success');

      this._serviceauth.createLog('Actualizar Observaciones de Ingreso d Almacen', 'UPDATE').subscribe(() => { });
    
      

    }

    else {
      swal.fire('Do It Right', res.msg, 'error');
    }

  });
  this.isLoading = false;
  this.homeInventory();
  
}

createPDF(){
 


  const pdfDefinition: any = {
    content: [
      {
        text: 'ORDEN DE ENTRADA',
        bold: true,
        fontSize: 20,
        alignment: 'center',
        margin: [0, 0, 0, 20]
      },
      {
        columns: [
          [{
            text: 'Fecha: ' + this.warehouse_entry.created_at,
          },
          {
            text:  'Almacén de Ingreso: ' + this.storeDetail.name,
          },
          {
            text: 'Tipo de Ingreso: ' + this.typeIncomeDetail.name,
          },
          {
            text: 'N. Orden de Compra: ' + this.warehouse_entry.purchase_order_number,
          },
          {
            text: 'Factura: ' + this.warehouse_entry.invoice,
          },
          {
            text: 'Fecha de la Factura: ' + this.warehouse_entry.invoice_date,
          },
          {
            text: 'Proveedor: ' + this.supplierDetail.razon_social,
          },

          {
            text: 'Creado por:  ' + ' ',
          },
          {
            text: ' ',
          },
          {
            text: ' ',
          },
          {
            text: ' ',
          },
          {
            text: ' ',
          },
          {
            text: 'LISTA DE PRODUCTOS',
            bold: true,
            fontSize: 16,
          },
          ]
        ]
      },
      {
        table: {
          _minwidth: 
          ['*', 200, 'auto'],
          body:[
            [
              'Item',
              'SubCategoria',
              'SKU',
              'Marca',
              'Modelo',
              'Unidad de medida',
              'N. Serie',
            ],
            [
              '' + this.productDetail.id,
              'Subcategoria',
              '' + this.productDetail.sku,
              '' + this.productDetail.brand_name,
              'Modelo',
              'Pieza',
              '' + this.productDetail.serial_number,

            ],
          ]
        }
        
      },
      {
        columns: [
          [
          {
            text: 'Observaciones',
            bold: true,
            fontSize: 12,
          },
          {
            text: '' +  this.warehouse_entry.observations,
          },
          ]
        ]
      }
    ]
  
  }

  const pdf = pdfMake.createPdf(pdfDefinition);
  pdf.open();

}

  


  




}
