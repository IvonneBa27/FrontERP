import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { cat_categories } from 'src/app/models/cat_categories.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  p:number=1;
  categories: cat_categories[] = [];
  isLoading = false;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private _serviceauth: AuthService,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this._servicesuser.getCategorie().subscribe((res) => {
      this.categories = res.data;
       console.log(this.categories);
       this._serviceauth.createLog('Lista Categoria', 'SELECT').subscribe(() => { });
       this.isLoading = false;
    });

  }

  createCategories(){
    this.router.navigateByUrl('/dashboard/create-categories')
  }

  createSubCategories(){
    this.router.navigateByUrl('/dashboard/create-subcategories')
  }
}
