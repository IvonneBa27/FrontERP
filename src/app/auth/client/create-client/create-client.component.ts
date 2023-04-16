import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { Catalogo_SAT_RegimenFiscal } from 'src/app/models/catalogo_sat_regimenfiscal.model';
import { Catalogo_SAT_CFDI } from 'src/app/models/catalogo_sat_uso_cfdi.model';
import { Ciudades } from 'src/app/models/ciudades.model';
import { Delegaciones } from 'src/app/models/delegaciones.model';
import { Estatus } from 'src/app/models/estatus.model';
import { Paises } from 'src/app/models/paises.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import swal from 'sweetalert2';
import { UserservicesService } from '../../service/userservices.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})

export class CreateClientComponent {
  idPais: any;
  idCiudad: any;
  idMunicipio: any;
  nocliente: number = 1;
  clientForm: FormGroup;
  Paises: Paises[] = [];
  Ciudades: Ciudades[] = [];
  Delegaciones: Delegaciones[] = [];
  CatalogoSatRegimenFiscal: Catalogo_SAT_RegimenFiscal[] = [];
  CatalagoSatCFDI: Catalogo_SAT_CFDI[] = [];
  Estatus: Estatus[] = [];



  constructor(
    private formBuilder: FormBuilder,
    private _servicesuser: UserservicesService,
    private router: Router,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService,
  ) {

    this._servicesgeneral.getPais().subscribe(respuesta => {
      this.Paises = respuesta.data;

    });

    this._servicesgeneral.getSATCFDI().subscribe(respuesta => {
      this.CatalagoSatCFDI = respuesta.data;

    });

    this._servicesgeneral.getSATRegimenfiscal().subscribe(respuesta => {
      this.CatalogoSatRegimenFiscal = respuesta.data;

    });
    this._servicesgeneral.getEstatus().subscribe(respuesta => {
      this.Estatus = respuesta.data;

    });



    this.clientForm = this.formBuilder.group({
      no_cliente: new FormControl(''),
      razon_social: new FormControl('', [Validators.required]),
      rfc: new FormControl('', [Validators.required]),
      idPais: new FormControl('', [Validators.required]),
      idCiudad: new FormControl('', [Validators.required]),
      idMunicipio: new FormControl('', [Validators.required]),
      calle: new FormControl('', [Validators.required]),
      no_ext: new FormControl('', [Validators.required]),
      no_int: new FormControl(''),
      colonia: new FormControl('',[Validators.required]),
      cp: new FormControl('',[Validators.required]),
      sitio_web: new FormControl(''),
      url_map: new FormControl(''),
      observaciones: new FormControl(''),
      cp_fiscal: new FormControl(''),
      idUsoCfdi: new FormControl(''),
      idRegimenFiscal: new FormControl(''),
      nombre_completo: new FormControl(''),
      email: new FormControl(''),
      movil: new FormControl(''),
      tel_trabajo: new FormControl(''),
      ext: new FormControl(''),
      puesto: new FormControl(''),
      nombre_completo_tecnico: new FormControl(''),
      email_tecnico: new FormControl(''),
      movil_tecnico: new FormControl(''),
      tel_trabajo_tecnico: new FormControl(''),
      ext_tecnico: new FormControl(''),
      puesto_tecnico: new FormControl(''),
      nombre_completo_pago: new FormControl(''),
      email_pago: new FormControl(''),
      movil_pago: new FormControl(''),
      tel_trabajo_pago: new FormControl(''),
      ext_pago: new FormControl(''),
      puesto_pago: new FormControl(''),
      idestatus: new FormControl(''),



    });

  }

  ListClient() {
    this.router.navigateByUrl('/dashboard/list-client')

  }

  createClient() {
    const no_cliente = this.clientForm.value['no_cliente'];
    const razon_social = this.clientForm.value['razon_social'];
    const rfc = this.clientForm.value['rfc'];
    const idPais = this.clientForm.value['idPais'];
    const idCiudad = this.clientForm.value['idCiudad'];
    const idMunicipio = this.clientForm.value['idMunicipio'];
    const calle = this.clientForm.value['calle'];
    const no_ext = this.clientForm.value['no_ext'];
    const no_int = this.clientForm.value['no_int'];
    const colonia = this.clientForm.value['colonia'];
    const cp = this.clientForm.value['cp'];
    const sitio_web = this.clientForm.value['sitio_web'];
    const url_map = this.clientForm.value['url_map'];
    const observaciones = this.clientForm.value['observaciones'];
    const cp_fiscal = this.clientForm.value['cp_fiscal'];
    const idUsoCfdi = this.clientForm.value['idUsoCfdi'];
    const idRegimenFiscal = this.clientForm.value['idRegimenFiscal'];
    const nombre_completo = this.clientForm.value['nombre_completo'];
    const email = this.clientForm.value['email'];
    const movil = this.clientForm.value['movil'];
    const tel_trabajo = this.clientForm.value['tel_trabajo'];
    const ext = this.clientForm.value['ext'];
    const puesto = this.clientForm.value['puesto'];
    const nombre_completo_tecnico = this.clientForm.value['nombre_completo_tecnico'];
    const email_tecnico = this.clientForm.value['email_tecnico'];
    const movil_tecnico = this.clientForm.value['movil_tecnico'];
    const tel_trabajo_tecnico = this.clientForm.value['tel_trabajo_tecnico'];
    const ext_tecnico = this.clientForm.value['ext_tecnico'];
    const puesto_tecnico = this.clientForm.value['puesto_tecnico'];
    const nombre_completo_pago = this.clientForm.value['nombre_completo_pago'];
    const email_pago = this.clientForm.value['email_pago'];
    const movil_pago = this.clientForm.value['movil_pago'];
    const tel_trabajo_pago = this.clientForm.value['tel_trabajo_pago'];
    const ext_pago = this.clientForm.value['ext_pago'];
    const puesto_pago = this.clientForm.value['puesto_pago'];
    const idestatus = this.clientForm.value['idestatus'];


    const body = {
      no_cliente: this.nocliente + 1,
      razon_social: razon_social,
      rfc: rfc,
      idPais: idPais,
      idCiudad: idCiudad,
      idMunicipio: idMunicipio,
      calle: calle,
      no_ext: no_ext,
      no_int: no_int,
      colonia: colonia,
      cp: cp,
      sitio_web: sitio_web,
      url_map: url_map,
      observaciones: observaciones,
      cp_fiscal: cp_fiscal,
      idUsoCfdi: idUsoCfdi,
      idRegimenFiscal: idRegimenFiscal,
      nombre_completo: nombre_completo,
      email: email,
      movil: movil,
      tel_trabajo: tel_trabajo,
      ext: ext,
      puesto: puesto,
      nombre_completo_tecnico: nombre_completo_tecnico,
      email_tecnico: email_tecnico,
      movil_tecnico: movil_tecnico,
      tel_trabajo_tecnico: tel_trabajo_tecnico,
      ext_tecnico: ext_tecnico,
      puesto_tecnico: puesto_tecnico,
      nombre_completo_pago: nombre_completo_pago,
      email_pago: email_pago,
      movil_pago: movil_pago,
      tel_trabajo_pago: tel_trabajo_pago,
      ext_pago: ext_pago,
      puesto_pago: puesto_pago,
      idestatus : idestatus,

    };

    this._servicesuser.createClient(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Crear Cliente', 'CREATE').subscribe(() => { });
        this.ListClient();

      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }

    });


  }

  obtIdPais() {
    console.log(this.idPais);
    const idPais = this.clientForm.value['idPais'];

    this._servicesgeneral.getCiudad(idPais).subscribe(respuesta => {
      this.Ciudades = respuesta.data;

    });
  }

  obtIdCiudad() {
    console.log(this.idCiudad);
    const idPais = this.clientForm.value['idPais'];
    const idCiudad = this.clientForm.value['idCiudad'];

    this._servicesgeneral.getMunicipio(idPais, idCiudad).subscribe(respuesta => {
      this.Delegaciones = respuesta.data;

    });
  }

  obtIdMunicipio() {
    console.log(this.idMunicipio);
  }

  get razon_social() {
    return this.clientForm.get('razon_social');
  }

  get rfc() {
    return this.clientForm.get('rfc');
  }
  get idpais() {
    return this.clientForm.get('idPais');
  }
  get idciudad() {
    return this.clientForm.get('idCiudad');
  }
  get idmunicipio() {
    return this.clientForm.get('idmunicipio');
  }

  get calle() {
    return this.clientForm.get('calle');
  }
  get no_ext() {
    return this.clientForm.get('no_ext');
  }
  get colonia() {
    return this.clientForm.get('colonia');
  }

  get cp() {
    return this.clientForm.get('cp');
  }



}
