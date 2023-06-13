import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { UserservicesService } from '../../service/userservices.service';
import swal from 'sweetalert2';
import { GeneralService } from 'src/app/services/general.service';
import { TipoUsuario } from 'src/app/models/tipoUsuario.model';
import { Ubicacion } from 'src/app/models/ubicacion.model';
import { Empresa } from 'src/app/models/empresa.model';
import { Sexo } from 'src/app/models/sexo.model';
import { SubCategoria } from 'src/app/models/subCategoria.model';
import { Domicilio } from 'src/app/models/domicilio.model';
import { EjecucionAdministrativa } from 'src/app/models/ejecucionAdministrativa.model';
import { Puesto } from 'src/app/models/puesto.model';
import { Banco } from 'src/app/models/Banco.model';
import { Estatus } from 'src/app/models/estatus.model';
import { Departamento } from 'src/app/models/departamento.model';
import { Turno } from 'src/app/models/turno.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralUtilities } from 'src/app/utilities/general.utilities';





@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})


export class CreateUserComponent {
  usersForm: FormGroup;
  TipoUsuario: TipoUsuario[] = [];
  Ubicacion: Ubicacion[] = [];
  Empresa: Empresa[] = [];
  Sexo: Sexo[] = [];
  SubCategoria: SubCategoria[] = [];
  Domicilio: Domicilio[] = [];
  EjecucionAdministrativa: EjecucionAdministrativa[] = [];
  Puesto: Puesto[] = [];
  Banco: Banco[] = [];
  Estatus: Estatus[] = [];
  Departamento: Departamento[] = [];
  Turno: Turno[] = [];
  isLoading = false;



  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService,


  ) {
    this._servicesgeneral.getTipoUsuario().subscribe(respuesta => {
      this.TipoUsuario = respuesta.data;

    });
    this._servicesgeneral.getUbicaciones().subscribe(respuesta => {
      this.Ubicacion = respuesta.data;

    });
    this._servicesgeneral.getEmpresa().subscribe(respuesta => {
      this.Empresa = respuesta.data;

    });
    this._servicesgeneral.getSexo().subscribe(respuesta => {
      this.Sexo = respuesta.data;

    });
    this._servicesgeneral.getSubCategoria().subscribe(respuesta => {
      this.SubCategoria = respuesta.data;

    });
    this._servicesgeneral.getDomilicioUsuario().subscribe(respuesta => {
      this.Domicilio = respuesta.data;

    });
    this._servicesgeneral.getEjecucionAdministrativa().subscribe(respuesta => {
      this.EjecucionAdministrativa = respuesta.data;

    });
    this._servicesgeneral.getPuesto().subscribe(respuesta => {
      this.Puesto = respuesta.data;

    });
    this._servicesgeneral.getBanco().subscribe(respuesta => {
      this.Banco = respuesta.data;

    });
    this._servicesgeneral.getEstatus().subscribe(respuesta => {
      this.Estatus = respuesta.data;

    });
    this._servicesgeneral.getDepartamento().subscribe(respuesta => {
      this.Departamento = respuesta.data;

    });
    this._servicesgeneral.getTurno().subscribe(respuesta => {
      this.Turno = respuesta.data;

    });
    this.usersForm = this.formBuilder.group({
      id_tipo_usuario: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido_pat: new FormControl('', [Validators.required]),
      apellido_mat: new FormControl('', [Validators.required]),
      id_ubicacion: new FormControl('', [Validators.required]),
      id_empresa_rh: new FormControl('', [Validators.required]),
      email_personal: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl(''),
      numero_empleado: new FormControl('', [Validators.required]),
      nombre_completo: new FormControl(''),
      curp: new FormControl('', [Validators.required]),
      rfc: new FormControl('', [Validators.required]),
      nss: new FormControl('', [Validators.required]),
      id_sexo: new FormControl('', [Validators.required]),
      id_subcategoria: new FormControl('', [Validators.required]),
      /*id_domicilio: new FormControl(''),*/
      ejecucion_administrativa: new FormControl('', [Validators.required]),
      /*id_compania: new FormControl(''),*/
      /*ola: new FormControl(''),*/
      id_puesto: new FormControl('', [Validators.required]),
      sueldo: new FormControl('', [Validators.required]),
      id_banco: new FormControl('', [Validators.required]),
      numero_cuenta_bancaria: new FormControl('', [Validators.required]),
      clabe_inter_bancaria: new FormControl('', [Validators.required]),
      fecha_ingreso: new FormControl('', [Validators.required]),
      /* fecha_contrato: new FormControl(''),*/
      fecha_nacimiento: new FormControl('', [Validators.required]),
      id_estatus: new FormControl('', [Validators.required]),
      id_departamento_empresa: new FormControl('', [Validators.required]),
      id_turno: new FormControl('', [Validators.required]),
      /*fecha_baja: new FormControl(''),*/
      /*motivo_baja: new FormControl(''),*/
      /*mes_baja: new FormControl(''),*/
      /*fecha_inicio_capacitacion: new FormControl(''),*/
      /*fecha_fin_capacitacion: new FormControl(''),*/
      img_profile: new FormControl(''),

    });
  }




  ListUser() {
    this.router.navigateByUrl('/dashboard/users-list')

  }



  createUser() {
    this.isLoading = true;
    const id_tipo_usuario = this.usersForm.value['id_tipo_usuario'];
    const usuario = this.usersForm.value['usuario'];
    const nombre = this.usersForm.value['nombre'];
    const apellido_pat = this.usersForm.value['apellido_pat'];
    const apellido_mat = this.usersForm.value['apellido_mat'];
    const id_ubicacion = this.usersForm.value['id_ubicacion'];
    const id_empresa_rh = this.usersForm.value['id_empresa_rh'];
    const email_personal = this.usersForm.value['email_personal'];
    const email = this.usersForm.value['email'];
    const numero_empleado = this.usersForm.value['numero_empleado'];
    const nombre_completo = this.usersForm.value['nombre_completo'];
    const curp = this.usersForm.value['curp'];
    const rfc = this.usersForm.value['rfc'];
    const nss = this.usersForm.value['nss'];
    const id_sexo = this.usersForm.value['id_sexo'];
    const id_subcategoria = this.usersForm.value['id_subcategoria'];
    /*const id_domicilio = this.usersForm.value['id_domicilio'];*/
    const ejecucion_administrativa = this.usersForm.value['ejecucion_administrativa'];
    /* const id_compania = this.usersForm.value['id_compania'];*/
    /* const ola = this.usersForm.value['ola'];*/
    const id_puesto = this.usersForm.value['id_puesto'];
    const sueldo = this.usersForm.value['sueldo'];
    const id_banco = this.usersForm.value['id_banco'];
    const numero_cuenta_bancaria = this.usersForm.value['numero_cuenta_bancaria'];
    const clabe_inter_bancaria = this.usersForm.value['clabe_inter_bancaria'];
    const fecha_ingreso = this.usersForm.value['fecha_ingreso'];
    /* const fecha_contrato = this.usersForm.value['fecha_contrato'];*/
    const fecha_nacimiento = this.usersForm.value['fecha_nacimiento'];
    const id_estatus = this.usersForm.value['id_estatus'];
    const id_departamento_empresa = this.usersForm.value['id_departamento_empresa'];
    const id_turno = this.usersForm.value['id_turno'];
    /* const fecha_baja = this.usersForm.value['fecha_baja'];
     const motivo_baja = this.usersForm.value['motivo_baja'];
     const mes_baja = this.usersForm.value['mes_baja'];
     const fecha_inicio_capacitacion = this.usersForm.value['fecha_inicio_capacitacion'];
     const fecha_fin_capacitacion = this.usersForm.value['fecha_fin_capacitacion'];*/



    const body = {
      id_tipo_usuario: id_tipo_usuario,
      usuario: usuario,
      nombre: nombre,
      apellido_pat: apellido_pat,
      apellido_mat: apellido_mat,
      id_ubicacion: id_ubicacion,
      id_empresa_rh: id_empresa_rh,
      email_personal: email_personal,
      email: email,
      password: '$dirsa2023',
      numero_empleado: numero_empleado,
      nombre_completo: apellido_pat + ' ' + apellido_mat + ' ' + nombre,
      curp: curp,
      rfc: rfc,
      nss: nss,
      id_sexo: id_sexo,
      id_subcategoria: id_subcategoria,
      /*id_domicilio: id_domicilio,*/
      ejecucion_administrativa: ejecucion_administrativa,
      /*id_compania: id_compania,*/
      /*ola: ola,*/
      id_puesto: id_puesto,
      sueldo: sueldo,
      id_banco: id_banco,
      numero_cuenta_bancaria: numero_cuenta_bancaria,
      clabe_inter_bancaria: clabe_inter_bancaria,
      fecha_ingreso: fecha_ingreso,
      /*fecha_contrato: fecha_contrato,*/
      fecha_nacimiento: fecha_nacimiento,
      id_estatus: id_estatus,
      id_departamento_empresa: id_departamento_empresa,
      id_turno: id_turno,
      /*fecha_baja: fecha_baja,
      motivo_baja: motivo_baja,
      mes_baja: mes_baja,
      fecha_inicio_capacitacion: fecha_inicio_capacitacion,
      fecha_fin_capacitacion: fecha_fin_capacitacion,*/
      img_profile: '-',

    };

    this._servicesuser.createUser(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Crear Usuario', 'CREATE').subscribe(() => { });
        this.ListUser();

      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }

    });

    this.isLoading = false;

  }

  get apellido_pat() {
    return this.usersForm.get('apellido_pat');
  }
  get apellido_mat() {
    return this.usersForm.get('apellido_mat');
  }
  get nombre() {
    return this.usersForm.get('nombre');
  }
  get numero_empleado() {
    return this.usersForm.get('numero_empleado');
  }

  get id_tipo_usuario() {
    return this.usersForm.get('id_tipo_usuario');
  }

  get usuario() {
    return this.usersForm.get('usuario');
  }

  get email_personal() {
    return this.usersForm.get('email_personal');
  }

  get email() {
    return this.usersForm.get('email');
  }

  get curp() {
    return this.usersForm.get('curp');
  }

  get rfc() {
    return this.usersForm.get('rfc');
  }

  get nss() {
    return this.usersForm.get('nss');
  }

  get id_sexo() {
    return this.usersForm.get('id_sexo');
  }

  get fecha_nacimiento() {
    return this.usersForm.get('fecha_nacimiento');
  }

  get id_estatus() {
    return this.usersForm.get('id_estatus');
  }

  get id_ubicacion() {
    return this.usersForm.get('id_ubicacion');
  }

  get id_empresa_rh() {
    return this.usersForm.get('id_empresa_rh');
  }

  get id_subcategoria() {
    return this.usersForm.get('id_subcategoria');
  }

  get ejecucion_administrativa() {
    return this.usersForm.get('ejecucion_administrativa');
  }

  get id_departamento_empresa() {
    return this.usersForm.get('id_departamento_empresa');
  }

  get id_puesto() {
    return this.usersForm.get('id_puesto');
  }

  get sueldo() {
    return this.usersForm.get('sueldo');
  }

  get id_turno() {
    return this.usersForm.get('id_turno');
  }

  get id_banco() {
    return this.usersForm.get('id_banco');
  }

  get numero_cuenta_bancaria() {
    return this.usersForm.get('numero_cuenta_bancaria');
  }

  get clabe_inter_bancaria() {
    return this.usersForm.get('clabe_inter_bancaria');
  }

  get fecha_ingreso() {
    return this.usersForm.get('fecha_ingreso');
  }

}














