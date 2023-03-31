import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserservicesService } from '../../service/userservices.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { GeneralService } from 'src/app/services/general.service';
import { Departamento } from 'src/app/models/departamento.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralUtilities } from 'src/app/utilities/general.utilities';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {

  id_usuario;
  usersForm: FormGroup;
  Departamento: Departamento[] = [];
  user: Users = new Users();

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService,

  ) {

    this.usersForm = this.formBuilder.group({
      usuario: new FormControl(''),
      nombre: new FormControl(''),
      apellido_pat: new FormControl(''),
      apellido_mat: new FormControl(''),
      numero_empleado: new FormControl(''),
      id_departamento_empresa: new FormControl(''),
      fecha_baja:new FormControl(''),
      motivo_baja: new FormControl(''),
      mes_baja: new FormControl(''),


    });





    this.id_usuario = this.activatedRoute.snapshot.paramMap.get('id');
    this._servicesuser.getUserbyId(this.id_usuario).subscribe((res) => {

      this.user = res.data;

      this._servicesgeneral.requestCatalogos().subscribe(respuesta => {

        this.Departamento = respuesta[7].data;



        this.setForm();
      });
    });



  }

  ObtenerFecha(fecha: string) {

    const newFecha = new Date(fecha);
    const dia = newFecha.getDate().toString().padStart(2, '0');
    const mes = (newFecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = newFecha.getFullYear();

    // crear nueva cadena de texto en formato "yyyy-mm-dd"
    return anio + "-" + mes + "-" + dia;

  }



  setForm() {


    // Catalogos - Campos

    this.usersForm.controls['nombre'].setValue(this.user.nombre);
    this.usersForm.controls['apellido_pat'].setValue(this.user.apellido_pat);
    this.usersForm.controls['apellido_mat'].setValue(this.user.apellido_mat);
    this.usersForm.controls['usuario'].setValue(this.user.usuario);
    this.usersForm.controls['numero_empleado'].setValue(this.user.numero_empleado);
    this.usersForm.controls['id_departamento_empresa'].setValue(this.user.id_departamento_empresa);
    this.usersForm.controls['fecha_baja'].setValue(this.ObtenerFecha(this.user.fecha_baja));
    this.usersForm.controls['motivo_baja'].setValue(this.user.motivo_baja);
    this.usersForm.controls['mes_baja'].setValue(this.user.mes_baja);
 
  }





  ListUser() {
    this.router.navigateByUrl('/dashboard/users-list')

  }

  DeleteUser() {

    const fecha_baja = this.usersForm.value['fecha_baja'];
    const motivo_baja = this.usersForm.value['motivo_baja'];
    const mes_baja = this.usersForm.value['mes_baja'];



    const body = {
      id: this.id_usuario,
      fecha_baja : fecha_baja,
      motivo_baja: motivo_baja,
      mes_baja:mes_baja,

  


    };

    this._servicesuser.DeleteUser(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Eliminar Usuario','DELETE').subscribe(() =>{});
        this.ListUser();


      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }

    });
  }

}
