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
  
  constructor(
    private _srvStorage: StorageService,
    private router: Router,
    private _srvAuth: AuthService
  ) {
    
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
