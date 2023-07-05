import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  id_usuario: any;

  constructor(
    private router: Router,
    private _srvAuth: AuthService,
    private _srvStorage: StorageService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  login() {
    this.isLoading = true;
    const usuario = this.loginForm.value['usuario'];
    const password = this.loginForm.value['password'];

    this._srvAuth.login(usuario, password).subscribe((respuesta) => {
      if (respuesta.status === 'success') {
        this.setPermission(respuesta['data']['id']);
        this._srvStorage.set('token', respuesta['access_token']);
        this._srvStorage.set('user_id', respuesta['data']['id']);
        this._srvStorage.set('nombre_completo',respuesta['data']['nombre_completo']);
        this._srvStorage.set('email', respuesta['data']['email']);
        this._srvStorage.set('usuario', respuesta['data']['usuario']);
        //this._srvStorage.set('role', respuesta['data']['role']['nombre']);
        const img = respuesta['data']['img_profile']
          ? respuesta['data']['img_profile']
          : './assets/images/users/image_profile.jpg';
        this._srvAuth.setprofileImage(img);
       
      } else {
        swal.fire('Alerta', respuesta.message, 'error');
      }
      console.log(respuesta);
      this.isLoading = false;
    });
  }
  setPermission(id_usuario: number) {
    console.log('SET PERMISOS');
    
    this._srvAuth.getModuleUserById(id_usuario).subscribe((res) => {
       console.log(res.data);
      this._srvStorage.set('permission', res.data);
       this.router.navigateByUrl('/dashboard/listado-grupos');
    });
  }

  get usuario() {
    return this.loginForm.get('usuario');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
