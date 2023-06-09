import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estatus } from 'src/app/models/estatus.model';
import { Secctions } from 'src/app/models/secctions.model';
import { Stores } from 'src/app/models/stores.model';
import { Users } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { UserservicesService } from '../../../service/userservices.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-secction',
  templateUrl: './edit-secction.component.html',
  styleUrls: ['./edit-secction.component.css']
})
export class EditSecctionComponent {
  id_secction;
  secctionForm: FormGroup;
  Estatus: Estatus[] = [];
  Stores: Stores[] = [];
  secction: Secctions = new Secctions;
  isLoading = false;
  selectedFile: File | null = null;
  base64String: string | null = null;

  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService, 
    private activatedRoute: ActivatedRoute,
  ) { 

    this.id_secction = this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;
    this._servicesuser.getSecctionbyId(this.id_secction).subscribe((res) => {

      this.secction = res.data;

      console.log(res.data);

      this._servicesgeneral.requestCatalogos().subscribe(respuesta => {
        this.Estatus = respuesta[2].data;
        this.Stores = respuesta[22].data;
        
        this.setForm();

    
      });
    });

    this.secctionForm = this.formBuilder.group({
      name: new FormControl(''),
      id_status: new FormControl(''),
      id_store: new FormControl(''),
      nomenclature: new FormControl(''),
      image: new FormControl(''),
    });
  }

  setForm() {
    this.secctionForm.controls['name'].setValue(this.secction.name);
    this.secctionForm.controls['id_store'].setValue(this.secction.id_store);
    this.secctionForm.controls['id_status'].setValue(this.secction.id_status);
    this.secctionForm.controls['nomenclature'].setValue(this.secction.nomenclature);
    this.secctionForm.controls['image'].setValue(this.secction.image);
    this.isLoading = false;
   
  }


  ListStores(){
    this.router.navigate([`/dashboard/list-secction/${this.id_secction}`]);
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    
    const reader = new FileReader();
    reader.onload = () => {
      this.base64String = <string>reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
    }



  updateSecction(){

    const name = this.secctionForm.value['name'];
    const id_store = this.secctionForm.value['id_store'];
    const nomenclature = this.secctionForm.value['nomenclature'];
    const image = this.secctionForm.value['image'];


    const body = {
      id: this.id_secction,
      name: name,
      id_store: id_store,
      nomenclature: nomenclature,
      image: this.base64String,
    

  };
  this._servicesuser.updateSecction(body).subscribe(res => {
    console.log(res);
    if (res.status == 'success') {
      swal.fire('Do It Right', res.message, 'success');

      this._serviceauth.createLog('Editar Seccion', 'UPDATE').subscribe(() => { });
      this.ListStores();

    }

    else {
      swal.fire('Do It Right', res.msg, 'error');
    }

  });




   }
}
