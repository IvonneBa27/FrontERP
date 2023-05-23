import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Secctions } from 'src/app/models/secctions.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { UserservicesService } from '../../../service/userservices.service';

@Component({
  selector: 'app-list-secction',
  templateUrl: './list-secction.component.html',
  styleUrls: ['./list-secction.component.css']
})
export class ListSecctionComponent implements OnInit {
  id_store: any;
  p: number = 1;
  Secctions: Secctions[] = [];
  isLoading = false;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private _serviceauth: AuthService,
    private formBuilder: FormBuilder,
    private _servicesgeneral: GeneralService,
    private activatedRoute: ActivatedRoute,
  ) {

   }

  ngOnInit(): void {
    this.isLoading = true;
    this.id_store = this.activatedRoute.snapshot.paramMap.get('id');
    this._servicesuser.getSecction(this.id_store).subscribe((res) => {
      this.Secctions = res.data;
       console.log(this.Secctions);
       this._serviceauth.createLog('Lista de Secciones', 'SELECT').subscribe(() => { });
       this.isLoading = false;

    });
 
  }

  createSecction(){

    this.router.navigate([`/dashboard/create-secction/${this.id_store}`]);
  }

  listStores(){
    this.router.navigate(['/dashboard/list-store']);
  }


}
