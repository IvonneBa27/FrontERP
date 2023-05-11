import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { cat_brands } from 'src/app/models/cat_brands.model';
import { cat_categories } from 'src/app/models/cat_categories.model';
import { cat_subcategories } from 'src/app/models/cat_subcategories.model';
import { Estatus } from 'src/app/models/estatus.model';
import { producs } from 'src/app/models/producs.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent {
  id_products;
  productsForm: FormGroup;
  Estatus: Estatus[] = [];
  Categorie: cat_categories[] = [];
  SubCategorie: cat_subcategories[] = [];
  Brand: cat_brands[] = [];
  inventory: any;
  id_categoty: any;
  id_subcategory: any;
  products: producs = new producs();
  isLoading = false;

  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService,
    private activatedRoute: ActivatedRoute,

  ) {
    this.id_products = this.activatedRoute.snapshot.paramMap.get('id');
    this._servicesuser.getProductsbyId(this.id_products).subscribe((res) => {

      this.products = res.data;

      console.log(res.data);
      this._servicesgeneral.requestCatalogos().subscribe(respuesta => {
        this.Estatus = respuesta[2].data;
        this.Categorie = respuesta[17].data;
        this.Brand = respuesta[18].data;
        this.SubCategorie = respuesta[19].data;

        this.setForm();


      });
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

  setForm() {

    this.productsForm.controls['name'].setValue(this.products.name);
    this.productsForm.controls['id_categoty'].setValue(this.products.id_categoty);
    this.productsForm.controls['id_subcategory'].setValue(this.products.id_subcategory);
    this.productsForm.controls['sku'].setValue(this.products.sku);
    this.productsForm.controls['serial_number'].setValue(this.products.serial_number);
    this.productsForm.controls['id_brand'].setValue(this.products.id_brand);
    this.productsForm.controls['model'].setValue(this.products.model);
    this.productsForm.controls['description'].setValue(this.products.description);
    this.productsForm.controls['inventory'].setValue(this.products.inventory);
    this.productsForm.controls['photo'].setValue(this.products.photo);
    this.productsForm.controls['id_status'].setValue(this.products.id_status);
    this.productsForm.controls['id_unitmeasure'].setValue(this.products.id_unitmeasure);

  }
  ListProducts() {
    this.router.navigateByUrl('/dashboard/list-products')
  }

  deleteProducts() {
    this.isLoading = true;
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
      id: this.id_products,
     

    };
    this._servicesuser.deleteProducts(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Eliminar Producto', 'CREATE').subscribe(() => { });
        this.ListProducts();

      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }
    });
    this.isLoading = false;
  }





}





