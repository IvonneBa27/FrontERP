import { Component, OnInit } from '@angular/core';
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
  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
  
    
  ){
    
    }

  ngOnInit(): void {
    this._servicesuser.getUser().subscribe((res) => {
      this.users = res.data;
      
     /* console.log(this.users);*/
    });
  }


  createUser()
  {
    this.router.navigateByUrl('/dashboard/create-user')
  }

}
