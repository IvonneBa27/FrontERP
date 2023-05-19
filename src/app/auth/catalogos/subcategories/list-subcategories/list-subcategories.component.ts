import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { cat_subcategories } from 'src/app/models/cat_subcategories.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-subcategories',
  templateUrl: './list-subcategories.component.html',
  styleUrls: ['./list-subcategories.component.css']
})
export class ListSubcategoriesComponent  {
  id_categorie: any;
  p:number=1;
  subcategories: cat_subcategories[] = [];
  isLoading = false;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private _serviceauth: AuthService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.id_categorie = this.activatedRoute.snapshot.paramMap.get('id');
    this._servicesuser.getCatSubCategorie(this.id_categorie).subscribe((res) => {
      this.subcategories = res.data;
       console.log(this.subcategories);
       this._serviceauth.createLog('Lista SubCategoria', 'SELECT').subscribe(() => { });
       this.isLoading = false;
    });
  
  }

  createSubCategories(){
    this.router.navigate([`/dashboard/create-subcategories/${this.id_categorie}`]);
  }

  listCategories(){
    this.router.navigate(['/dashboard/list-categories']);
  }

}