import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { warehouse_entry } from 'src/app/models/warehouse_entry.model';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { warehouse_entry_detail } from 'src/app/models/warehouse_entry_detail.model';

@Component({
  selector: 'app-home-inventory-detail',
  templateUrl: './home-inventory-detail.component.html',
  styleUrls: ['./home-inventory-detail.component.css']
})

export class HomeInventoryDetailComponent implements OnInit {
  inventory:any;
  isLoading = false;
  incomeStoreDetailAll: warehouse_entry_detail[] = [];
  incomeStoreDetail: warehouse_entry_detail[] = [];
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
  ) { }

  ngOnInit(): void {
  
    this.getListInventoryDetailAll();
    
  }

  homeInventory(){
    this.router.navigateByUrl('/dashboard/home-inventory')

  }

  getListInventoryDetailAll(){
    this.isLoading = true;
    this._serviceinventory.getListInventoryDetailAll().subscribe(res => {
      this.incomeStoreDetailAll = res.data;
      this.incomeStoreDetail = res.data;
      console.log(this.incomeStoreDetailAll);
      this.isLoading = false;

    });
  }


  getListInventoryDetail(){
    this.isLoading = true;
  
    if(this.inventory==2){
      this.getListInventoryDetailAll();
    }else{
      console.log(this.inventory);
      this.isLoading = true;
      this._serviceinventory.getListInventoryDetail(this.inventory).subscribe((res) => {
        this.incomeStoreDetail =[];
        this.incomeStoreDetail = res.data;
        this.totalReg = (this.incomeStoreDetail.length);
        console.log(this.incomeStoreDetail);
        
        this.isLoading = false;
      });
      }
  }

}
