import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { UserservicesService } from '../../service/userservices.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Module } from 'src/app/models/module.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Users[]=[];
  p: number = 1;
  usersForm: FormGroup;
  permisse: Module = new Module();

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _srvAuth: AuthService
  ){


    this.usersForm = this.formBuilder.group({
      nombre_completo: new FormControl(''),
    });
 
  }

  ngOnInit(): void {
    this._srvAuth.getModules(1).subscribe( res => {
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
      
     console.log(this.users);
    });
  }


  createUser() {
    this.router.navigateByUrl('/dashboard/create-user')
  }

  searchUser(){
    const nombre_completo = this.usersForm.value['nombre_completo'];
  
    this._servicesuser.searchUsers(nombre_completo).subscribe((res) => {
      this.users = res.data;
      /*console.log(this.users);*/
  
      });
  

  }


 
}
