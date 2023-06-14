import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Suppliers } from 'src/app/models/suppliers.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { UserservicesService } from '../../service/userservices.service';

@Component({
  selector: 'app-list-suppliers',
  templateUrl: './list-suppliers.component.html',
  styleUrls: ['./list-suppliers.component.css']
})
export class ListSuppliersComponent implements OnInit {
  suppliers: Suppliers[]=[];
  p:number =1;
  numPag: number = 50;
  totalReg: number = 0;

  supplierForm: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private _servicesgeneral: GeneralService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _srvAuth: AuthService,
  ) { 
    this.supplierForm = this.formBuilder.group({
      razon_social: new FormControl(''),
    });

  }

  ngOnInit(): void {
    this.isLoading = true;
    this._servicesuser.getListSupplier().subscribe((res) => {
      this.suppliers = res.data;
      this.isLoading = false;

    });
  }

  CreateSupplier() {
    this.router.navigateByUrl('/dashboard/create-supplier')


  }

  searchSuppliers(){
    
    this.isLoading = true;
    const razon_social = this.supplierForm.value['razon_social'];
    
    
    this._servicesuser.searchSuppliers(razon_social).subscribe((res) => {
      this.suppliers = [];
      this.suppliers = res.data;
   

      this.supplierForm.controls['razon_social'].setValue('');
  
      });
      
    this.isLoading = false;
  
 
    }
  




}
