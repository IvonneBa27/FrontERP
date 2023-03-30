import { Component, OnInit } from '@angular/core';
import { UserservicesService } from '../../service/userservices.service';
import { Users } from '../../../models/users.model';

@Component({
  selector: 'app-add-permissions-user',
  templateUrl: './add-permissions-user.component.html',
  styleUrls: ['./add-permissions-user.component.css']
})
export class AddPermissionsUserComponent implements OnInit {

  user: Users = new Users();
  constructor( private _srvUser: UserservicesService) { }

  ngOnInit(): void {
    this.getDataUser();
  }

  getDataUser() {

    this._srvUser.getUserbyId(3).subscribe( respuesta => {
      console.log(respuesta);
      this.user = respuesta.data;
      
    });
  }

}
