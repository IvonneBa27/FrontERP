import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { cat_brands } from 'src/app/models/cat_brands.model';
import { cat_subcategories } from 'src/app/models/cat_subcategories.model';
import { Estatus } from 'src/app/models/estatus.model';
import { SubCategoria } from 'src/app/models/subCategoria.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent {
  id_subcategory;
  
  brandsForm: FormGroup;
  Estatus: Estatus[] = [];
  SubCategorie: cat_subcategories[] = [];
  brand: cat_brands = new cat_brands();
  isLoading = false;


  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService,
    private activatedRoute: ActivatedRoute,
  ) {

    this.id_subcategory = this.activatedRoute.snapshot.paramMap.get('id');

    this._servicesgeneral.getEstatus().subscribe(respuesta => {
      this.Estatus = respuesta.data;
    });
    this._servicesgeneral.getSubCategorie().subscribe(respuesta => {
      this.SubCategorie = respuesta.data;
    });

 

    this.id_subcategory = this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;
    this._servicesuser.getCatSubCateg(this.id_subcategory).subscribe((res) => {

      this.SubCategorie = res.data;
      console.log(this.SubCategorie)

      /*this._servicesgeneral.requestCatalogos().subscribe(respuesta => {
        this.Estatus = respuesta[2].data;
        this.SubCategorie = respuesta[19].data;
*/
        this.setForm();

    
     // });


    });


    this.brandsForm = this.formBuilder.group({
      name: new FormControl(''),
      id_status: new FormControl(''),
      id_subcategory: new FormControl(''),
    });

  }

  setForm(){
    this.brandsForm.controls['name'].setValue(this.brand.name);
    this.brandsForm.controls['id_subcategory'].setValue(this.brand.id_subcategory);
    this.brandsForm.controls['id_status'].setValue(this.brand.id_status);
    this.isLoading = false;
   
  }

  ListBrands() {

    // this.router.navigate([`/dashboard/list-brand/${this.id_subcategory}`]);

    this.router.navigate([`/dashboard/list-brand/${this.id_subcategory}`]);
  }

  createBrand() {
 
    const name = this.brandsForm.value['name'];
    const id_status = this.brandsForm.value['id_status'];
    const id_subcategory = this.brandsForm.value['id_subcategory'];



    const body = {
      name: name,
      id_status: id_status,
      id_subcategory: this.id_subcategory,


    };
    this._servicesuser.createBrand(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Crear Marca', 'CREATE').subscribe(() => { });
        this.ListBrands();

      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }
      
    });
  



  }

}
