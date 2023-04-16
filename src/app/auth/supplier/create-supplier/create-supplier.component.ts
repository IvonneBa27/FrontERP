import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { Banco } from 'src/app/models/banco.model';
import { Ciudades } from 'src/app/models/ciudades.model';
import { Delegaciones } from 'src/app/models/delegaciones.model';
import { Estatus } from 'src/app/models/estatus.model';
import { Paises } from 'src/app/models/paises.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import swal from 'sweetalert2';
import { UserservicesService } from '../../service/userservices.service';


@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent  {
  idPais: any;
  idCiudad: any;
  idMunicipio: any;
  noproveedor: number = 1;
  supplierForm: FormGroup;
  Paises: Paises[] = [];
  Ciudades: Ciudades[] = [];
  Delegaciones: Delegaciones[] = [];
  Banco: Banco[] = [];
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
    this._servicesgeneral.getBanco().subscribe(respuesta => {
      this.Banco = respuesta.data;

    });
    this._servicesgeneral.getEstatus().subscribe(respuesta => {
      this.Estatus = respuesta.data;

    });


    this.supplierForm = this.formBuilder.group({
      no_proveedor: new FormControl(''),
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
      dias_credito: new FormControl(''),
      idBanco: new FormControl(''),
      no_cuenta:new FormControl(''),
      clabe_intenbancaria: new FormControl(''),
      nombre_completo: new FormControl(''),
      email: new FormControl(''),
      tel_movil: new FormControl(''),
      tel_trabajo: new FormControl(''),
      ext: new FormControl(''),
      puesto: new FormControl(''),
      idestatus: new FormControl(''),

    });

  }

    ListSupplier() {
    this.router.navigateByUrl('/dashboard/list-suppliers')

  }

  createSupplier() {
    const no_proveedor = this.supplierForm.value['no_proveedor'];
    const razon_social = this.supplierForm.value['razon_social'];
    const rfc = this.supplierForm.value['rfc'];
    const idPais = this.supplierForm.value['idPais'];
    const idCiudad = this.supplierForm.value['idCiudad'];
    const idMunicipio = this.supplierForm.value['idMunicipio'];
    const calle = this.supplierForm.value['calle'];
    const no_ext = this.supplierForm.value['no_ext'];
    const no_int = this.supplierForm.value['no_int'];
    const colonia = this.supplierForm.value['colonia'];
    const cp = this.supplierForm.value['cp'];
    const sitio_web = this.supplierForm.value['sitio_web'];
    const url_map = this.supplierForm.value['url_map'];
    const observaciones = this.supplierForm.value['observaciones'];
    const dias_credito = this.supplierForm.value['dias_credito'];
    const idBanco = this.supplierForm.value['idBanco'];
    const no_cuenta = this.supplierForm.value['no_cuenta'];
    const clabe_intenbancaria = this.supplierForm.value['clabe_intenbancaria'];
    const nombre_completo = this.supplierForm.value['nombre_completo'];
    const email = this.supplierForm.value['email'];
    const tel_movil = this.supplierForm.value['tel_movil'];
    const tel_trabajo = this.supplierForm.value['tel_trabajo'];
    const ext = this.supplierForm.value['ext'];
    const puesto = this.supplierForm.value['puesto'];
    const idestatus = this.supplierForm.value['idestatus'];
    


    const body = {
      no_proveedor: this.noproveedor + 1,
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
      dias_credito: dias_credito,
      idBanco: idBanco,
      no_cuenta: no_cuenta,
      clabe_intenbancaria: clabe_intenbancaria,
      nombre_completo: nombre_completo,
      email: email,
      tel_movil: tel_movil,
      tel_trabajo: tel_trabajo,
      ext: ext,
      puesto: puesto,
      idestatus : idestatus,
   

    };

    this._servicesuser.createSupplier(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Crear Proveedor', 'CREATE').subscribe(() => { });
        this.ListSupplier();

      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }

    });


  }

  obtIdPais() {
    console.log(this.idPais);
    const idPais = this.supplierForm.value['idPais'];

    this._servicesgeneral.getCiudad(idPais).subscribe(respuesta => {
      this.Ciudades = respuesta.data;

    });
  }

  obtIdCiudad() {
    console.log(this.idCiudad);
    const idPais = this.supplierForm.value['idPais'];
    const idCiudad = this.supplierForm.value['idCiudad'];

    this._servicesgeneral.getMunicipio(idPais, idCiudad).subscribe(respuesta => {
      this.Delegaciones = respuesta.data;

    });
  }

  obtIdMunicipio() {
    console.log(this.idMunicipio);
  }

  get razon_social() {
    return this.supplierForm.get('razon_social');
  }

  get rfc() {
    return this.supplierForm.get('rfc');
  }

  get idpais() {
    return this.supplierForm.get('idPais');
  }

  get idciudad() {
    return this.supplierForm.get('idCiudad');
  }

  get idmunicipio() {
    return this.supplierForm.get('idmunicipio');
  }

  get calle() {
    return this.supplierForm.get('calle');
  }

  get no_ext() {
    return this.supplierForm.get('no_ext');
  }

  get colonia() {
    return this.supplierForm.get('colonia');
  }

  get cp() {
    return this.supplierForm.get('cp');
  }


 

}
