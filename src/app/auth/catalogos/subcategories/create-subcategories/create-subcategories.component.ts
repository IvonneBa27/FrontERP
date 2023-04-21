import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { Estatus } from 'src/app/models/estatus.model';
import { type_modules } from 'src/app/models/type_modules.model';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { AuthService } from 'src/app/services/auth.service';
import { cat_categories } from 'src/app/models/cat_categories.model';
import { cat_subcategories } from 'src/app/models/cat_subcategories.model';

@Component({
  selector: 'app-create-subcategories',
  templateUrl: './create-subcategories.component.html',
  styleUrls: ['./create-subcategories.component.css']
})
export class CreateSubcategoriesComponent  {

  id_categorie;
  subcategoriesForm: FormGroup;
  Estatus: Estatus[] = [];
  Categorie: cat_categories[] = [];
  sku_indispensable: any;
  subcategories: cat_subcategories = new cat_subcategories;
  

  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService,
    private activatedRoute: ActivatedRoute,

  ) { 
  
    this.id_categorie = this.activatedRoute.snapshot.paramMap.get('id');
    this._servicesgeneral.getEstatus().subscribe(respuesta => {
      this.Estatus = respuesta.data;
    });

    this._servicesgeneral.getCategorie().subscribe(respuesta => {
      this.Categorie = respuesta.data;
    });


    this._servicesuser.getCatCategorie(this.id_categorie).subscribe((res) => {
      this.Categorie = res.data;
  
        this._servicesgeneral.requestCatalogos().subscribe(respuesta => {
        this.Categorie = respuesta[17].data;

        this.setForm();
        });
  
      });



    this.subcategoriesForm = this.formBuilder.group({
      name: new FormControl(''),
      id_category: new FormControl(''),
      id_status: new FormControl(''),
      sku_indispensable: new FormControl(''),
    });
  }

  setForm() {

    this.subcategoriesForm.controls['id_category'].setValue(this.subcategories.id_category);
   
  }
  
  ListSubCategories() {
    this.router.navigate([`/dashboard/list-subcategories/${this.id_categorie}`]);
  }

  createSubCategories() {
    const name = this.subcategoriesForm.value['name'];
    const id_category = this.subcategoriesForm.value['id_category'];
    const id_status = this.subcategoriesForm.value['id_status'];
    const sku_indispensable = this.subcategoriesForm.value['sku_indispensable'];

    const body =
    {
      name: name,
      id_category: this.id_categorie,
      id_status: id_status,
      sku_indispensable: sku_indispensable,

    };

    this._servicesuser.createSubCategorie(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Crear SubCategoria', 'CREATE').subscribe(() => { });
        this.ListSubCategories();


      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }

    });
  }



}