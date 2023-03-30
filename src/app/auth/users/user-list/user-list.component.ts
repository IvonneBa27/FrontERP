import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { UserservicesService } from '../../service/userservices.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Users[]=[];
  p: number = 1;
  usersForm: FormGroup;


  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ){


    this.usersForm = this.formBuilder.group({
      nombre_completo: new FormControl(''),
    });
 
  }

  ngOnInit(): void {
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
