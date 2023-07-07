import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { warehouse_entry } from 'src/app/models/warehouse_entry.model';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { warehouse_entry_detail } from 'src/app/models/warehouse_entry_detail.model';
import { product_detail_warehouse_entry } from 'src/app/models/product_detail_warehouse_entry.model';


@Component({
  selector: 'app-inventory-detail-products',
  templateUrl: './inventory-detail-products.component.html',
  styleUrls: ['./inventory-detail-products.component.css']
})
export class InventoryDetailProductsComponent implements OnInit {

  inventory:any;
  isLoading = false;
  productDetail: product_detail_warehouse_entry [] = [];
  p: number = 1;
  numPag: number = 50;
  totalReg: number = 0;
  config: any;
  configCustomPagination: any;
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  idcategory: any;

  constructor(  
    private router: Router,
    private _servicesuser: UserservicesService,
    private _servicesgeneral: GeneralService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _srvAuth: AuthService,
    private _serviceinventory: InventoryService,) {

      this.idcategory = this.activatedRoute.snapshot.paramMap.get('id');
  
   }

  ngOnInit(): void {
    this.isLoading = true;
    this._serviceinventory.getListProductDetail(this.idcategory).subscribe((res) => {
      this.productDetail = res.data;

      console.log(this.productDetail);
      this.isLoading = false;
    });
  }

  

  homeInventory(){
    this.router.navigateByUrl('/dashboard/home-inventory')

  }

}
