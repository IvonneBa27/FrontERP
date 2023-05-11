import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { UserservicesService } from '../../service/userservices.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Module } from 'src/app/models/module.model';
import { Estatus } from 'src/app/models/estatus.model';
import { GeneralService } from 'src/app/services/general.service';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: Users[]=[];
  usersRespaldo: Users[]=[];
  p: number = 1;
  numPag: number = 50;
  totalReg: number = 0;
  config: any;
  configCustomPagination: any;
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;


  usersForm: FormGroup;
  permisse: Module = new Module();
  Estatus: Estatus[] = [];
  isLoading = false;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private _servicesgeneral: GeneralService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _srvAuth: AuthService,
    
  ){

    this._servicesgeneral.getEstatus().subscribe(respuesta =>{
      this.Estatus = respuesta.data;
     
    });
    this.usersForm = this.formBuilder.group({
      nombre_completo: new FormControl(''),
      id_estatus: new FormControl(''),
    });

  

  }

  ngOnInit(): void {
    this.isLoading = true;
    this._srvAuth.getModules(10).subscribe( res => {
      if( res.data.length > 0){
        const data = res.data[0];
        console.log(data.create);

        
        this.permisse.create = (data.create == 0) ? false : true;
        this.permisse.delete = (data.delete == 0) ? false : true;
        this.permisse.edit = (data.edit == 0) ? false : true;
        this.permisse.read = (data.read == 0) ? false : true;
        
        console.log(this.permisse);
      }
      
    });
    //this._servicesuser.getUser().subscribe((res) => {
    this._servicesuser.getUserOrderBy().subscribe((res) => {
      this.users = res.data;
      this.usersRespaldo = res.data;
      this.totalReg =(this.usersRespaldo.length);

    
      
      console.log(this.totalReg);
    // console.log(this.users);

    this.isLoading = false;
    });
  }

   


  createUser() {
    this.router.navigateByUrl('/dashboard/create-user')
  }

  searchUser(){
    this.isLoading = true;
    const nombre_completo = this.usersForm.value['nombre_completo'];
  
    this._servicesuser.searchUsers(nombre_completo).subscribe((res) => {
      this.users = [];
      this.users = res.data;
      this.totalReg =(this.users.length);


      this.usersForm.controls['nombre_completo'].setValue('');
      this.isLoading = false;
  
      });

    
     
  

  }

  searchEstatus(){
    this.isLoading = true;
    const id_estatus = this.usersForm.value['id_estatus'];
    if (id_estatus == 0){
      this.users = this.usersRespaldo;
    }else{
      this._servicesuser.searchEstatus(id_estatus).subscribe((res) => {
        this.users = [];
        this.users = res.data;
        this.totalReg =(this.users.length);
    
    
        this.isLoading = false;
  
      });
    }
  

  }





  pageChanged(event: any) {
    this.config.currentPage = event;
  }

  onPageChange(event: any) {
    this.configCustomPagination.currentPage = event;
  }


 
}
