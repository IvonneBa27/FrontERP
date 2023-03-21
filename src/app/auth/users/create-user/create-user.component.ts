import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
import { Banco } from 'src/app/models/banco.model';
import { Estatus } from 'src/app/models/estatus.model';
import { Departamento } from 'src/app/models/departamento.model';
import { Turno } from 'src/app/models/turno.model';
import { Router } from '@angular/router';


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
  SubCategoria : SubCategoria[] = [];
  Domicilio : Domicilio [] = [];
  EjecucionAdministrativa : EjecucionAdministrativa [] = [];
  Puesto: Puesto [] = [];
  Banco: Banco [] = [];
  Estatus: Estatus [] = [];
  Departamento: Departamento [] = [];
  Turno: Turno [] = [];


  constructor(
    private _servicesuser: UserservicesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _servicesgeneral: GeneralService,

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
    this._servicesgeneral.getDomilicioUsuario().subscribe(respuesta =>{
      this.Domicilio = respuesta.data;
      
    });
    this._servicesgeneral.getEjecucionAdministrativa().subscribe(respuesta =>{
      this.EjecucionAdministrativa = respuesta.data;
     
    });
    this._servicesgeneral.getPuesto().subscribe(respuesta =>{
      this.Puesto = respuesta.data;
     
    });
    this._servicesgeneral.getBanco().subscribe(respuesta =>{
      this.Banco = respuesta.data;
      
    });
    this._servicesgeneral.getEstatus().subscribe(respuesta =>{
      this.Estatus = respuesta.data;
     
    });
    this._servicesgeneral.getDepartamento().subscribe(respuesta =>{
      this.Departamento = respuesta.data;
     
    });
    this._servicesgeneral.getTurno().subscribe(respuesta =>{
      this.Turno = respuesta.data;
      
    });
    this.usersForm = this.formBuilder.group({
      id_tipo_usuario: new FormControl(''),
      usuario: new FormControl(''),
      nombre: new FormControl(''),
      apellido_pat: new FormControl(''),
      apellido_mat: new FormControl(''),
      id_ubicacion: new FormControl(''),
      id_empresa_rh: new FormControl(''),
      email_personal: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      numero_empleado: new FormControl(''),
      nombre_completo: new FormControl(''),
      curp: new FormControl(''),
      rfc: new FormControl(''),
      nss: new FormControl(''),
      id_sexo: new FormControl(''),
      id_subcategoria: new FormControl(''),
      /*id_domicilio: new FormControl(''),*/
      ejecucion_administrativa: new FormControl(''),
      /*id_compania: new FormControl(''),*/
      /*ola: new FormControl(''),*/
      id_puesto: new FormControl(''),
      sueldo: new FormControl(''),
      id_banco: new FormControl(''),
      numero_cuenta_bancaria: new FormControl(''),
      clabe_inter_bancaria: new FormControl(''),
      fecha_ingreso: new FormControl(''),
     /* fecha_contrato: new FormControl(''),*/
      fecha_nacimiento: new FormControl(''),
      id_estatus: new FormControl(''),
      id_departamento_empresa: new FormControl(''),
      id_turno: new FormControl(''),
      /*fecha_baja: new FormControl(''),*/
      /*motivo_baja: new FormControl(''),*/
      /*mes_baja: new FormControl(''),*/
      /*fecha_inicio_capacitacion: new FormControl(''),*/
      /*fecha_fin_capacitacion: new FormControl(''),*/
      img_profile: new FormControl(''),

    });
  }


  ListUser()
  {
    this.router.navigateByUrl('/dashboard/users-list')

  }



  createUser() {
    const id_tipo_usuario = this.usersForm.value['id_tipo_usuario'];
    const usuario = this.usersForm.value['usuario'];
    const nombre = this.usersForm.value['nombre'];
    const apellido_pat = this.usersForm.value['apellido_pat'];
    const apellido_mat = this.usersForm.value['apellido_mat'];
    const id_ubicacion = this.usersForm.value['id_ubicacion'];
    const id_empresa_rh = this.usersForm.value['id_empresa_rh'];
    const email_personal  = this.usersForm.value['email_personal'];
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
      nombre_completo: apellido_pat + ' ' + apellido_mat + ' ' + nombre ,
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

        this.ListUser();
      

      }

      else
      {
        swal.fire('Do It Right', res.msg, 'error');
      }

    });

  }



}














