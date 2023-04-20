import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { cat_subcategories } from 'src/app/models/cat_subcategories.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-subcategories',
  templateUrl: './list-subcategories.component.html',
  styleUrls: ['./list-subcategories.component.css']
})
export class ListSubcategoriesComponent  {
  p:number=1;
  subcategories: cat_subcategories[] = [];

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private _serviceauth: AuthService,
  ) { }

  ngOnInit(): void {
    this._servicesuser.getSubCategorie().subscribe((res) => {
      this.subcategories = res.data;
       console.log(this.subcategories);
       this._serviceauth.createLog('Lista SubCategoria', 'SELECT').subscribe(() => { });
    });
  }

  createSubCategories(){
    this.router.navigateByUrl('/dashboard/create-subcategories')
  }

}