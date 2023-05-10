import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { Estatus } from 'src/app/models/estatus.model';
import { Secctions } from 'src/app/models/secctions.model';
import { Stores } from 'src/app/models/stores.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-secction',
  templateUrl: './create-secction.component.html',
  styleUrls: ['./create-secction.component.css']
})
export class CreateSecctionComponent  {
id_store;
secctionForm: FormGroup;
Estatus: Estatus[] = [];
Stores: Stores[] = [];
secction: Secctions = new Secctions;



  constructor(  
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService,
    private activatedRoute: ActivatedRoute,
     ) {

      this.id_store = this.activatedRoute.snapshot.paramMap.get('id');

      this._servicesgeneral.getEstatus().subscribe(respuesta => {
        this.Estatus = respuesta.data;
      });

      this._servicesgeneral.getStores().subscribe(respuesta => {
        this.Stores = respuesta.data;
      });



      this._servicesuser.getStoreSecction(this.id_store).subscribe((res) => {
        this.Stores = res.data;
    
          this._servicesgeneral.requestCatalogos().subscribe(respuesta => {
          this.Stores = respuesta[22].data;
          console.log(this.Stores);
  
          this.setForm();
          });
    
        });

      this.secctionForm = this.formBuilder.group({
        name: new FormControl(''),
        id_status: new FormControl(''),
        id_store: new FormControl(''),
        nomenclature: new FormControl(''),
      });

     }

     setForm() {

      this.secctionForm.controls['id_store'].setValue(this.secction.id_store);
     
    }


     ListStores(){

      this.router.navigate([`/dashboard/list-secction/${this.id_store}`]);
    }

    
  createSecction(){
    const name = this.secctionForm.value['name'];
    const id_status = this.secctionForm.value['id_status'];
    const id_store = this.secctionForm.value['id_store'];
    const nomenclature = this.secctionForm.value['nomenclature'];


    const body = {
        name: name,
        id_status: id_status,
        id_store: this.id_store,
        nomenclature: nomenclature,
      

    };
    this._servicesuser.createSecction(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Crear Sección', 'CREATE').subscribe(() => { });
        this.ListStores();

      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }

    });



   }



}
