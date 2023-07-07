import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { Secctions } from 'src/app/models/secctions.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-imagen-inventory-secction',
  templateUrl: './imagen-inventory-secction.component.html',
  styleUrls: ['./imagen-inventory-secction.component.css']
})
export class ImagenInventorySecctionComponent implements OnInit {
  id_secction;
  secction: Secctions = new Secctions;
  isLoading = false;

  constructor(
    private _servicesuser: UserservicesService,
    private router: Router,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService, 
    private activatedRoute: ActivatedRoute,

  ) { 
    this.id_secction = this.activatedRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {

    this.isLoading = true;
    console.log('hey');
    console.log(this.id_secction);
    this._servicesuser.getSecctionbyId(this.id_secction).subscribe((res) => {
      this.secction = res.data;

      console.log(this.secction);

    });
    this.isLoading = false;


  }

  homeDetailProduct(){
    this.router.navigateByUrl('/dashboard/home-inventory')
  }

}
