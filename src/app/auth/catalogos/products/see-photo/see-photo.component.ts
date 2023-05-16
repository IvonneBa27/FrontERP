import { Component, OnInit } from '@angular/core';
import { producs } from 'src/app/models/producs.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-see-photo',
  templateUrl: './see-photo.component.html',
  styleUrls: ['./see-photo.component.css']
})
export class SeePhotoComponent  {
  id_products;
  productsForm: FormGroup;
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

  seeProducts() {
    this.router.navigate([`/dashboard/see-products/${this.id_products}`]);
  }


}
