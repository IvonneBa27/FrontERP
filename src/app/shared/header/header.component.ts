import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],

})
export class HeaderComponent implements OnInit {
  user: Users = new Users();
  nombrecompleto: any;
  email: any;
  constructor(
    private _srvStorage: StorageService,
    private router: Router,
    private _srvAuth: AuthService
   
  ) {
    this.nombrecompleto = JSON.parse(this._srvStorage.get('nombre_completo'));
    this.email = JSON.parse(this._srvStorage.get('email'));
    
  }

  ngOnInit(): void {}

  logout() {
    this._srvAuth.logout().subscribe((respuesta) => {
      this._srvStorage.remove('token');
      this._srvStorage.remove('role');
      this.router.navigateByUrl('/');
    });
  }
}
