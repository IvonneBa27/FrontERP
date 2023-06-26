import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { cat_categories } from 'src/app/models/cat_categories.model';
import { cat_subcategories } from 'src/app/models/cat_subcategories.model';
import { Estatus } from 'src/app/models/estatus.model';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-see-subcategories',
  templateUrl: './see-subcategories.component.html',
  styleUrls: ['./see-subcategories.component.css']
})
export class SeeSubcategoriesComponent {
  id_subcategorie;
  id_category: any;
  sku_indispensable:any;
  subcategoriesForm: FormGroup;
  Estatus: Estatus[]=[];
  Categorie: cat_categories[]=[];
  subcategories: cat_subcategories = new cat_subcategories;
  isLoading = false;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _servicesgeneral: GeneralService,

  ) { 
    this.subcategoriesForm = this.formBuilder.group({
    name: new FormControl(''),
    id_category: new FormControl(''),
    id_status: new FormControl(''),
    sku_indispensable: new FormControl(''),

  });

  this.id_subcategorie = this.activatedRoute.snapshot.paramMap.get('id');
  
  this.isLoading = true;
  this._servicesuser.getSubCategoriebyId(this.id_subcategorie).subscribe((res) => {
    this.subcategories = res.data;


      this._servicesgeneral.requestCatalogos().subscribe(respuesta => {
      this.Estatus = respuesta[2].data;
      this.Categorie = respuesta[17].data;

        this.setForm();
      });

    });


 }

 setForm() {
  this.subcategoriesForm.controls['name'].setValue(this.subcategories.name);
  this.subcategoriesForm.controls['id_category'].setValue(this.subcategories.id_category);
  this.subcategoriesForm.controls['id_status'].setValue(this.subcategories.id_status);
  this.subcategoriesForm.controls['sku_indispensable'].setValue(this.subcategories.sku_indispensable);
  this.isLoading = false;
}



seeSubCategories() {



  const name = this.subcategoriesForm.value['name'];
  const id_category = this.subcategoriesForm.value['id_category'];
  const status = this.subcategoriesForm.value['id_status'];
  const sku_indispensable = this.subcategoriesForm.value['sku_indispensable'];

  


}

ListSubCategories() {

 // this.router.navigateByUrl('/dashboard/list-categories')
 this.router.navigate([`/dashboard/list-subcategories/${this.subcategories.id_category}`]);

}



}
