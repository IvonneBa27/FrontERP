import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { cat_categories } from 'src/app/models/cat_categories.model';
import { Estatus } from 'src/app/models/estatus.model';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-see-categories',
  templateUrl: './see-categories.component.html',
  styleUrls: ['./see-categories.component.css']
})
export class SeeCategoriesComponent {
  id_categorie;
  categoriesForm: FormGroup;
  Estatus: Estatus[]=[];
  categories: cat_categories = new cat_categories;
  isLoading = false;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _servicesgeneral: GeneralService,
  ) {
  
    this.categoriesForm = this.formBuilder.group({
      name: new FormControl(''),
      id_status: new FormControl(''),
    });

    this.id_categorie = this.activatedRoute.snapshot.paramMap.get('id');
    this._servicesuser.getCategoriebyId(this.id_categorie).subscribe((res) => {
      this.categories = res.data;
  
  
        this._servicesgeneral.requestCatalogos().subscribe(respuesta => {
        this.Estatus = respuesta[2].data;
  
  
          this.setForm();
        });
  
      });


   }

   setForm() {
    this.categoriesForm.controls['name'].setValue(this.categories.name);
    this.categoriesForm.controls['id_status'].setValue(this.categories.id_status);
  }

  ListCategories() {
    this.router.navigateByUrl('/dashboard/list-categories')

  }

  SeeCategories() {
    this.isLoading = true;

    const name = this.categoriesForm.value['name'];
    const status = this.categoriesForm.value['id_status'];

    this.isLoading = false;

  }



}
