import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { cat_categories } from 'src/app/models/cat_categories.model';
import { cat_subcategories } from 'src/app/models/cat_subcategories.model';
import { Estatus } from 'src/app/models/estatus.model';
import { GeneralService } from 'src/app/services/general.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-delete-subcategories',
  templateUrl: './delete-subcategories.component.html',
  styleUrls: ['./delete-subcategories.component.css']
})
export class DeleteSubcategoriesComponent{
  id_subcategorie;
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
}

ListSubCategories() {
 // this.router.navigateByUrl('/dashboard/list-categories')
 this.router.navigate([`/dashboard/list-subcategories/${this.subcategories.id_category}`]);
  

}

deleteSubCategories() {
  this.isLoading = true;

  const name = this.subcategoriesForm.value['name'];
  const id_category = this.subcategoriesForm.value['id_category'];
  const id_status = this.subcategoriesForm.value['id_status'];
  const sku_indispensable = this.subcategoriesForm.value['sku_indispensable'];


  const body ={
    id: this.id_subcategorie,
 
  };

  this._servicesuser.deleteSubCategorie(body).subscribe(res => {
    console.log(res);
    if (res.status == 'success') {
      swal.fire('Do It Right', res.message, 'success');
      this.ListSubCategories();


    }

    else {
      swal.fire('Do It Right', res.msg, 'error');
    }

  });
  this.isLoading = false;

}


}
