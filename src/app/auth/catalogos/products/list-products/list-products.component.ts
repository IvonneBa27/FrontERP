import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';
import { cat_categories } from 'src/app/models/cat_categories.model';
import { producs } from 'src/app/models/producs.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  p: number = 1;
  Products: producs[] = [];
  Category: cat_categories[] = [];
  

  productsForm: FormGroup;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private _serviceauth: AuthService,
    private formBuilder: FormBuilder,
    private _servicesgeneral: GeneralService,
  ) { 

  this._servicesgeneral.getCategorie().subscribe(respuesta =>{
    this.Category = respuesta.data;
   
  });  

  this.productsForm = this.formBuilder.group({
      name: new FormControl(''),
      id_categoty: new FormControl(''),
  });


  }

  ngOnInit(): void {
    this._servicesuser.getProducts().subscribe((res) => {
      this.Products = res.data;
       console.log(this.Products);
       this._serviceauth.createLog('Lista de Productos', 'SELECT').subscribe(() => { });
    });
  }

  createProducts(){
    this.router.navigateByUrl('/dashboard/create-products')
  }

  searchProducts(){
    const name = this.productsForm.value['name'];
    
    
    this._servicesuser.searchName(name).subscribe((res) => {
      this.Products = [];
      this.Products = res.data;
   
      console.log(this.Products);
      this.productsForm.controls['name'].setValue('');
  
      });
  
 
    }

    searchCategory(){
      const id_categoty = this.productsForm.value['id_categoty'];
 
      this._servicesuser.searchCategory(id_categoty).subscribe((res) => {
        this.Products = [];
        this.Products = res.data;
     
  
        this.productsForm.controls['idcategoty'].setValue('');
    
        });
    
  
    }
  



}
