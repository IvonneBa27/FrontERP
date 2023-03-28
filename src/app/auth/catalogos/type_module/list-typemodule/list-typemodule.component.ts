import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { type_modules } from 'src/app/models/type_modules.model';


@Component({
  selector: 'app-list-typemodule',
  templateUrl: './list-typemodule.component.html',
  styleUrls: ['./list-typemodule.component.css']
})
export class ListTypemoduleComponent implements OnInit {
 type_modules: type_modules[]=[];
  p:number=1;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
  ) { }

  ngOnInit(): void {
    this._servicesuser.getTypeModule().subscribe((res) => {
      this.type_modules = res.data;
       console.log(this.type_modules);
    });
  }

  createTypeModule(){
    this.router.navigateByUrl('/dashboard/create-typemodule')
  }

}
