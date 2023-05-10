import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Stores } from 'src/app/models/stores.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { UserservicesService } from '../../../service/userservices.service';

@Component({
  selector: 'app-list-store',
  templateUrl: './list-store.component.html',
  styleUrls: ['./list-store.component.css']
})
export class ListStoreComponent {

  p: number = 1;
  stores: Stores[] = [];
  storesForm: FormGroup;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private _serviceauth: AuthService,
    private formBuilder: FormBuilder,
    private _servicesgeneral: GeneralService,
    private activatedRoute: ActivatedRoute,
  ) {

    this.storesForm = this.formBuilder.group({
      name: new FormControl(''),
    });
  }

  ngOnInit(): void {

    this._servicesuser.getStores().subscribe((res) => {
      this.stores = res.data;
       console.log(this.stores);
       this._serviceauth.createLog('Lista de Almacenes', 'SELECT').subscribe(() => { });
    });
  }

  createStores(){

    this.router.navigateByUrl('/dashboard/create-store')
    
  }

  searchStores()
  {
    const name = this.storesForm.value['name'];
    this._servicesuser.searchStores(name).subscribe((res) => {

      this.stores = res.data;
      console.log(this.stores);
      this._serviceauth.createLog('Lista de Almacens', 'SELECT').subscribe(() => { });
   

      this.storesForm.controls['name'].setValue('');
  
      });


    
  }

}
