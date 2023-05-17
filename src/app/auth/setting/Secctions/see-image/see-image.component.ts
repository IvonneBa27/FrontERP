import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { Secctions } from 'src/app/models/secctions.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-see-image',
  templateUrl: './see-image.component.html',
  styleUrls: ['./see-image.component.css']
})
export class SeeImageComponent{
  id_secction;
  secctionForm: FormGroup;
  secction: Secctions = new Secctions;
  isLoading = false;

  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService, 
    private activatedRoute: ActivatedRoute,
  ) { 
    this.id_secction = this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;
    this._servicesuser.getSecctionbyId(this.id_secction).subscribe((res) => {

      this.secction = res.data;

      console.log(res.data);

    });

    this.secctionForm = this.formBuilder.group({
      name: new FormControl(''),
      id_status: new FormControl(''),
      id_store: new FormControl(''),
      nomenclature: new FormControl(''),
      image: new FormControl(''),
      
    });
    this.isLoading = false;


  }
  ngOnInit(): void {
  }

  SecctionSee(){
    this.router.navigate([`/dashboard/see-secction/${this.id_secction}`]);
  }

  }

  

  


