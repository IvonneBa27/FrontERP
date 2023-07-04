import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { StorageService } from 'src/app/services/storage.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  menuItems: any[] | undefined;
  user: Users = new Users();
  role: string;
  nombrecompleto: any;
  permissions: any;
  imgProfile: string = '';

  constructor(
    private sidebarService: SidebarService,
    private _srvStorage: StorageService,
    private router: Router,
    private _srvAuth: AuthService
  ) {

    console.log('SIDEBAR');
    
    this.role = JSON.parse(this._srvStorage.get('role'));
    this.nombrecompleto = JSON.parse(this._srvStorage.get('nombre_completo'));
    this.permissions = JSON.parse(this._srvStorage.get('permission'));
    this.menuItems = this.sidebarService.menu;
        console.log(this.permissions);
    console.log(this.menuItems);

  }

  ngOnInit(): void {
    
            this._srvAuth.getprofileImage().subscribe((params) => {
              this.imgProfile = params;
            });
    
  }

  logout() {
    this._srvAuth.logout().subscribe((respuesta) => {
      this._srvStorage.remove('token');
      this._srvStorage.remove('role');
      this.router.navigateByUrl('/');
    });
  }

  validateRole(data: any[]) {
    const result = data.filter((obj) => {
      return obj.name === this.role;
    });

    const valid = result.length > 0 ? true : false;
    return valid;
  }

  elementoExiste(elemento: string): boolean {
    
    const result = this.permissions.filter((x: { name: string; }) => x.name === elemento);
    if(result.length == 0) {
      return false;
    }else {    

        return (result[0].show == 0 ) ? false : true;
      }
  }
}
