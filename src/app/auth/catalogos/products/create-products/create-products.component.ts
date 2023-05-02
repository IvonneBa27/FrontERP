import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { cat_brands } from 'src/app/models/cat_brands.model';
import { cat_categories } from 'src/app/models/cat_categories.model';
import { cat_subcategories } from 'src/app/models/cat_subcategories.model';
import { Estatus } from 'src/app/models/estatus.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent {
  productsForm: FormGroup;
  Estatus: Estatus[] = [];
  Categorie: cat_categories[] = [] ;
  SubCategorie: cat_subcategories[] = [];
  Brand: cat_brands[] = [];
  inventory: any;
  id_categoty: any;
  id_subcategory: any;


  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService,
  ) {

    this._servicesgeneral.getEstatus().subscribe(respuesta => {
      this.Estatus = respuesta.data;
    });

    this._servicesgeneral.getCategorie().subscribe(respuesta => {
      this.Categorie = respuesta.data;
    });
    this._servicesgeneral.getBrands().subscribe(respuesta => {
      this.Brand = respuesta.data;
    });




    this.productsForm = this.formBuilder.group({
     name: new FormControl(''),
     id_categoty: new FormControl(''),
     id_subcategory: new FormControl(''),
     sku: new FormControl(''),
     serial_number: new FormControl(''),
     id_brand: new FormControl(''),
     model: new FormControl(''),
     description: new FormControl(''),
     inventory: new FormControl(''),
     photo: new FormControl(''),
     id_status: new FormControl(''),
    id_unitmeasure: new FormControl(''),
    });


   }

   ListProducts(){
    this.router.navigateByUrl('/dashboard/list-products')
   }

   createProducts(){
    const name = this.productsForm.value['name'];
    const id_categoty = this.productsForm.value['id_categoty'];
    const id_subcategory = this.productsForm.value['id_subcategory'];
    const sku = this.productsForm.value['sku'];
    const serial_number = this.productsForm.value['serial_number'];
    const id_brand = this.productsForm.value['id_brand'];
    const model = this.productsForm.value['model'];
    const description = this.productsForm.value['description'];
    const inventory = this.productsForm.value['inventory'];
    const photo = this.productsForm.value['photo'];
    const id_status = this.productsForm.value['id_status'];
    const id_unitmeasure = this.productsForm.value['id_unitmeasure'];


    const body = {
        name: name,
        id_categoty: id_categoty,
        id_subcategory: id_subcategory,
        sku: sku,
        serial_number: serial_number,
        id_brand: id_brand,
        model: model,
        description: description,
        inventory: inventory,
        photo: photo,
        id_status: id_status,
        id_unitmeasure: id_unitmeasure,

    };
    this._servicesuser.createProduct(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Crear Producto', 'CREATE').subscribe(() => { });
        this.ListProducts();

      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }

    });



   }

   obtIdCategory(){
    const id_categoty = this.productsForm.value['id_categoty'];

    this._servicesuser.getCatSubCategorie(id_categoty).subscribe(respuesta => {
      this.SubCategorie = respuesta.data;

    });

   }



}
