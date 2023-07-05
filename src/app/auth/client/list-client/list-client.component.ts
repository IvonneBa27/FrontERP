import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from 'src/app/models/customers.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { UserservicesService } from '../../service/userservices.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  customers: Customers[]=[];
  p:number =1;
  numPag: number = 50;
  totalReg: number = 0;

  clientForm: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private _servicesgeneral: GeneralService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _srvAuth: AuthService,
  ) { 

    this.clientForm = this.formBuilder.group({
      razon_social: new FormControl(''),
    });

   

  }

  ngOnInit(): void {

    this._servicesuser.getListCustomers().subscribe((res) => {
      this.customers = res.data;


    });
  }

  CreateClient() {
    this.router.navigateByUrl('/dashboard/create-client')


  }

  
  searchClients(){
    this.isLoading = true;
    const razon_social = this.clientForm.value['razon_social'];
    
    
    this._servicesuser.searchClients(razon_social).subscribe((res) => {
      this.customers = [];
      this.customers = res.data;
   

      this.clientForm.controls['razon_social'].setValue('');
  
      });
      this.isLoading = false;
 
    }
  

}
