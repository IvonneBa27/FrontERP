import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from '../../service/userservices.service';
import { GeneralService } from 'src/app/services/general.service';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { warehouse_entry } from 'src/app/models/warehouse_entry.model';


@Component({
  selector: 'app-home-inventory',
  templateUrl: './home-inventory.component.html',
  styleUrls: ['./home-inventory.component.css']
})
export class HomeInventoryComponent implements OnInit{
  inventory:any;
  isLoading = false;
  incomeStoreAll: warehouse_entry[] = [];
  incomeStore: warehouse_entry[] = [];
  p: number = 1;
  numPag: number = 50;
  totalReg: number = 0;
  config: any;
  configCustomPagination: any;
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  



  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private _servicesgeneral: GeneralService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _srvAuth: AuthService,
    private _serviceinventory: InventoryService,
  ) 
  {
 


   }

   ngOnInit(): void {
  
      this.getListInventoryAll();

 
   }

   getListInventoryAll(){
    this.isLoading = true;
    this._serviceinventory.getListInventoryAll().subscribe(res => {
      this.incomeStoreAll = res.data;
      this.incomeStore = res.data;
      console.log(this.incomeStoreAll);
      this.isLoading = false;

    });
   }


  IncomeStore() {
    this.router.navigateByUrl('/dashboard/income-store')
  }

  TransferStore(){
    this.router.navigateByUrl('/dashboard/transfer-store')
  }

  StoreExit(){
    this.router.navigateByUrl('/dashboard/exit-store')
  }

  KardexProducts(){

  }

 getListInventory(){
  this.isLoading = true;


  if(this.inventory==2){
    console.log(this.inventory);
    this.incomeStoreAll = this.incomeStore;
    console.log(this.incomeStore);
  }else{
    console.log(this.inventory);
    this.isLoading = true;
    this._serviceinventory.getListInventory(this.inventory).subscribe((res) => {
     this.incomeStore =[];
      this.incomeStore = res.data;
      console.log(res.data);
      this.isLoading = false;
    });
    }
}


}
