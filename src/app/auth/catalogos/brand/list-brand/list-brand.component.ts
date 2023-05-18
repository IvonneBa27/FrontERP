import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { cat_brands } from 'src/app/models/cat_brands.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.css']
})
export class ListBrandComponent {
  id_subcategory: any;
  p: number = 1;
  Brand: cat_brands[]  = [];
  isLoading = false;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private _serviceauth: AuthService,
    private formBuilder: FormBuilder,
    private _servicesgeneral: GeneralService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.isLoading = true;
    this.id_subcategory = this.activatedRoute.snapshot.paramMap.get('id');
    this._servicesuser.getBrand(this.id_subcategory).subscribe((res) => {
      this.Brand = res.data;
       console.log(this.Brand);
       this._serviceauth.createLog('Lista de Marcas', 'SELECT').subscribe(() => { });

    });
    this.isLoading = false;
  }

  createBrand(){
    this.router.navigateByUrl(`/dashboard/create-brand/${this.id_subcategory}`)
  }

}
