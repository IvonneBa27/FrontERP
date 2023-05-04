import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  p: number = 1;
  Secctions: Secctions[] = [];

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private _serviceauth: AuthService,
    private formBuilder: FormBuilder,
    private _servicesgeneral: GeneralService,
  ) {

   }

  ngOnInit(): void {

    this._servicesuser.getSecction().subscribe((res) => {
      this.Secctions = res.data;
       console.log(this.Secctions);
       this._serviceauth.createLog('Lista de Secciones', 'SELECT').subscribe(() => { });
    });
  }

  createSecction(){
    this.router.navigateByUrl('/dashboard/create-secction')
  }

}
