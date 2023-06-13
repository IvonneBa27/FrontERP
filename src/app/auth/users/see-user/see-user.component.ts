import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserservicesService } from '../../service/userservices.service';
import { ActivatedRoute } from '@angular/router';
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

@Component({
  selector: 'app-see-user',
  templateUrl: './see-user.component.html',
  styleUrls: ['./see-user.component.css']
})
export class SeeUserComponent {
  id_usuario;
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
  user: Users = new Users();
  isLoading = false;

  

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _servicesgeneral: GeneralService,
     
  ) { 
    
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
      /*password: new FormControl(''),*/
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
      ola: new FormControl(''),
      id_puesto: new FormControl(''),
      sueldo: new FormControl(''),
      id_banco: new FormControl(''),
      numero_cuenta_bancaria: new FormControl(''),
      clabe_inter_bancaria: new FormControl(''),
      fecha_ingreso: new FormControl(''),
      fecha_contrato: new FormControl(''),
      fecha_nacimiento: new FormControl(''),
      id_estatus: new FormControl(''),
      id_departamento_empresa: new FormControl(''),
      id_turno: new FormControl(''),
      fecha_baja: new FormControl(''),
      motivo_baja: new FormControl(''),
      mes_baja: new FormControl(''),
      fecha_inicio_capacitacion: new FormControl(''),
      fecha_fin_capacitacion: new FormControl(''),
      img_profile: new FormControl(''),

    });

    this.id_usuario = this.activatedRoute.snapshot.paramMap.get('id');
    this._servicesuser.getUserbyId(this.id_usuario).subscribe((res) => {

      this.user = res.data;

      this._servicesgeneral.requestCatalogos().subscribe(respuesta => {
        this.TipoUsuario = respuesta[0].data;
        this.Sexo = respuesta[1].data;
        this.Estatus = respuesta[2].data;
        this.Ubicacion = respuesta[3].data;
        this.Empresa = respuesta[4].data;
        this.SubCategoria = respuesta[5].data;
        this.EjecucionAdministrativa = respuesta[6].data;
        this.Departamento = respuesta[7].data;
        this.Puesto = respuesta[8].data;
        this.Turno = respuesta[9].data;
        this.Banco = respuesta[10].data;

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
    this.usersForm.controls['nombre_completo'].setValue(this.user.nombre_completo);
    this.usersForm.controls['id_tipo_usuario'].setValue(this.user.id_tipo_usuario);
    this.usersForm.controls['usuario'].setValue(this.user.usuario);
    this.usersForm.controls['email_personal'].setValue(this.user.email_personal);
    this.usersForm.controls['email'].setValue(this.user.email);
    this.usersForm.controls['curp'].setValue(this.user.curp);
    this.usersForm.controls['rfc'].setValue(this.user.rfc);
    this.usersForm.controls['nss'].setValue(this.user.nss);
    this.usersForm.controls['id_sexo'].setValue(this.user.id_sexo);
    this.usersForm.controls['fecha_nacimiento'].setValue(this.ObtenerFecha(this.user.fecha_nacimiento));
    this.usersForm.controls['id_estatus'].setValue(this.user.id_estatus);
    this.usersForm.controls['id_ubicacion'].setValue(this.user.id_ubicacion);
    this.usersForm.controls['id_empresa_rh'].setValue(this.user.id_empresa_rh);
    this.usersForm.controls['id_subcategoria'].setValue(this.user.id_subcategoria);
    this.usersForm.controls['numero_empleado'].setValue(this.user.numero_empleado);
    this.usersForm.controls['ejecucion_administrativa'].setValue(this.user.ejecucion_administrativa);
    this.usersForm.controls['id_departamento_empresa'].setValue(this.user.id_departamento_empresa);
    this.usersForm.controls['id_puesto'].setValue(this.user.id_puesto);
    this.usersForm.controls['sueldo'].setValue(this.user.sueldo);
    this.usersForm.controls['id_turno'].setValue(this.user.id_turno);
    this.usersForm.controls['id_banco'].setValue(this.user.id_banco);
    this.usersForm.controls['numero_cuenta_bancaria'].setValue(this.user.numero_cuenta_bancaria);
    this.usersForm.controls['clabe_inter_bancaria'].setValue(this.user.clabe_inter_bancaria);
    this.usersForm.controls['fecha_ingreso'].setValue(this.ObtenerFecha(this.user.fecha_ingreso));
    this.usersForm.controls['fecha_contrato'].setValue(this.ObtenerFecha(this.user.fecha_contrato));
    this.usersForm.controls['ola'].setValue(this.user.ola);
    this.usersForm.controls['fecha_inicio_capacitacion'].setValue(this.ObtenerFecha(this.user.fecha_inicio_capacitacion));
    this.usersForm.controls['fecha_fin_capacitacion'].setValue(this.ObtenerFecha(this.user.fecha_fin_capacitacion));

  }





  ListUser() {
    this.router.navigateByUrl('/dashboard/users-list')

  }

  SeeUser() {
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
    const ola = this.usersForm.value['ola'];
    const id_puesto = this.usersForm.value['id_puesto'];
    const sueldo = this.usersForm.value['sueldo'];
    const id_banco = this.usersForm.value['id_banco'];
    const numero_cuenta_bancaria = this.usersForm.value['numero_cuenta_bancaria'];
    const clabe_inter_bancaria = this.usersForm.value['clabe_inter_bancaria'];
    const fecha_ingreso = this.usersForm.value['fecha_ingreso'];
    const fecha_contrato = this.usersForm.value['fecha_contrato'];
    const fecha_nacimiento = this.usersForm.value['fecha_nacimiento'];
    const id_estatus = this.usersForm.value['id_estatus'];
    const id_departamento_empresa = this.usersForm.value['id_departamento_empresa'];
    const id_turno = this.usersForm.value['id_turno'];
    const fecha_baja = this.usersForm.value['fecha_baja'];
    const motivo_baja = this.usersForm.value['motivo_baja'];
    const mes_baja = this.usersForm.value['mes_baja'];
    const fecha_inicio_capacitacion = this.usersForm.value['fecha_inicio_capacitacion'];
    const fecha_fin_capacitacion = this.usersForm.value['fecha_fin_capacitacion'];
    this.isLoading = false;

  }

}
