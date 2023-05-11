import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Catalogo_SAT_RegimenFiscal } from 'src/app/models/catalogo_sat_regimenfiscal.model';
import { Catalogo_SAT_CFDI } from 'src/app/models/catalogo_sat_uso_cfdi.model';
import { Ciudades } from 'src/app/models/ciudades.model';
import { Customers } from 'src/app/models/customers.model';
import { Delegaciones } from 'src/app/models/delegaciones.model';
import { Estatus } from 'src/app/models/estatus.model';
import { Paises } from 'src/app/models/paises.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import swal from 'sweetalert2';
import { UserservicesService } from '../../service/userservices.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent  {
  id_cliente;
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
  client: Customers = new Customers();
  Estatus: Estatus[] = [];
  isLoading = false;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _servicesgeneral: GeneralService,
    private _serviceauth: AuthService,
  ) {

    this._servicesgeneral.getPais().subscribe(respuesta => {
      this.Paises = respuesta.data;

    });
    
    this.clientForm = this.formBuilder.group({
      no_cliente: new FormControl(''),
      razon_social: new FormControl(''),
      rfc: new FormControl(''),
      idPais: new FormControl(''),
      idCiudad: new FormControl(''),
      idMunicipio: new FormControl(''),
      calle: new FormControl(''),
      no_ext: new FormControl(''),
      no_int: new FormControl(''),
      colonia: new FormControl(''),
      cp: new FormControl(''),
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

    this.id_cliente = this.activatedRoute.snapshot.paramMap.get('id');
    this._servicesuser.getClientbyId(this.id_cliente).subscribe((res) => {

      this.client = res.data[0];

      this._servicesgeneral.requestCatalogos().subscribe(respuesta=> {
        this.Estatus = respuesta[2].data;
        this.Paises = respuesta[12].data;
        this.CatalagoSatCFDI = respuesta[13].data;
        this.CatalogoSatRegimenFiscal = respuesta[14].data;
        this.Ciudades = respuesta[15].data;
        this.Delegaciones = respuesta[16].data;

        this.setForm();
      });


    });

  }

  setForm() {
    this.clientForm.controls['no_cliente'].setValue(this.client.no_cliente);
    this.clientForm.controls['razon_social'].setValue(this.client.razon_social);
    this.clientForm.controls['rfc'].setValue(this.client.rfc);
    this.clientForm.controls['idPais'].setValue(this.client.idPais);
    this.clientForm.controls['idCiudad'].setValue(this.client.idCiudad);
    this.clientForm.controls['idMunicipio'].setValue(this.client.idMunicipio);
    this.clientForm.controls['calle'].setValue(this.client.calle);
    this.clientForm.controls['no_ext'].setValue(this.client.no_ext);
    this.clientForm.controls['no_int'].setValue(this.client.no_int);
    this.clientForm.controls['colonia'].setValue(this.client.colonia);
    this.clientForm.controls['cp'].setValue(this.client.cp);
    this.clientForm.controls['sitio_web'].setValue(this.client.sitio_web);
    this.clientForm.controls['url_map'].setValue(this.client.url_map);
    this.clientForm.controls['observaciones'].setValue(this.client.observaciones);
    this.clientForm.controls['cp_fiscal'].setValue(this.client.cp_fiscal);
    this.clientForm.controls['idUsoCfdi'].setValue(this.client.idUsoCfdi);
    this.clientForm.controls['idRegimenFiscal'].setValue(this.client.idRegimenFiscal);
    this.clientForm.controls['nombre_completo'].setValue(this.client.nombre_completo);
    this.clientForm.controls['email'].setValue(this.client.email);
    this.clientForm.controls['movil'].setValue(this.client.movil);
    this.clientForm.controls['tel_trabajo'].setValue(this.client.tel_trabajo);
    this.clientForm.controls['ext'].setValue(this.client.ext);
    this.clientForm.controls['puesto'].setValue(this.client.puesto);
    this.clientForm.controls['nombre_completo_tecnico'].setValue(this.client.nombre_completo_tecnico);
    this.clientForm.controls['email_tecnico'].setValue(this.client.email_tecnico);
    this.clientForm.controls['movil_tecnico'].setValue(this.client.movil_tecnico);
    this.clientForm.controls['tel_trabajo_tecnico'].setValue(this.client.tel_trabajo_tecnico);
    this.clientForm.controls['ext_tecnico'].setValue(this.client.ext_tecnico);
    this.clientForm.controls['puesto_tecnico'].setValue(this.client.puesto_tecnico);
    this.clientForm.controls['nombre_completo_pago'].setValue(this.client.nombre_completo_pago);
    this.clientForm.controls['email_pago'].setValue(this.client.email_pago);
    this.clientForm.controls['movil_pago'].setValue(this.client.movil_pago);
    this.clientForm.controls['tel_trabajo_pago'].setValue(this.client.tel_trabajo_pago);
    this.clientForm.controls['ext_pago'].setValue(this.client.ext_pago);
    this.clientForm.controls['puesto_pago'].setValue(this.client.puesto_pago)

  }

   ListClient() {
    this.router.navigateByUrl('/dashboard/list-client')

  }

  updateClient() {
    this.isLoading = true;
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


    const body = {
      id: this.id_cliente,
      //no_cliente: this.nocliente + 1,
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
      sitio_web:sitio_web,
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
     

    };

    this._servicesuser.updateClient(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Actualizar Cliente', 'UPDATE').subscribe(() => { });
        this.ListClient();

      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }

    });
    this.isLoading = false;
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



}
