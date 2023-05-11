import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { Estatus } from 'src/app/models/estatus.model';
import { type_modules } from 'src/app/models/type_modules.model';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.css']
})
export class CreateCategoriesComponent {
  categoriesForm: FormGroup;
  Estatus: Estatus[] = [];
  isLoading = false;

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

    this.categoriesForm = this.formBuilder.group({
      name: new FormControl(''),
      id_status: new FormControl(''),
    });
  }
  
  ListCategories() {
    this.router.navigateByUrl('/dashboard/list-categories')
  }

  createCategories() {
    this.isLoading = true;
    const name = this.categoriesForm.value['name'];
    const id_status = this.categoriesForm.value['id_status'];


    const body =
    {
      name: name,
      id_status: id_status,
    };

    this._servicesuser.createCategorie(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Crear Categoria', 'CREATE').subscribe(() => { });
        this.ListCategories();


      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }

    });
    this.isLoading = false;
  }



}
