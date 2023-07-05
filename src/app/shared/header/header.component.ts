import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfilePictureComponent } from 'src/app/auth/profile-picture/profile-picture.component';
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
  imgProfile = '';
  imgProfile2 = '';
  constructor(
    private _srvStorage: StorageService,
    private router: Router,
    private _srvAuth: AuthService,
    private modalService: NgbModal
  ) {
    this.nombrecompleto = JSON.parse(this._srvStorage.get('nombre_completo'));
    this.email = JSON.parse(this._srvStorage.get('email'));

    // this._srvAuth.getprofileImage().subscribe((params) => {

    //   this.imgProfile = params;
    // });
  }

  ngOnInit(): void {
    this._srvAuth.getprofileImage().subscribe((params) => {
      this.imgProfile = params;
      this.imgProfile2 = params;
      console.log(params);
      console.log(this.imgProfile);
      console.log(this.imgProfile2);

      
    });
  }

  logout() {
    this._srvAuth.logout().subscribe((respuesta) => {
      this._srvStorage.remove('token');
      this._srvStorage.remove('role');
      this.router.navigateByUrl('/');
    });
  }

  modalFoto() {
    const changePhoto = this.modalService.open(ProfilePictureComponent, {
      backdrop: 'static',
      size: 'lg',
    });
    changePhoto.result.then((resultado) => {});
  }
}


