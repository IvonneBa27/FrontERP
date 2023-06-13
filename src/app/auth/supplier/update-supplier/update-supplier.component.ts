import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Banco } from 'src/app/models/Banco.model';
import { Ciudades } from 'src/app/models/ciudades.model';
import { Delegaciones } from 'src/app/models/delegaciones.model';
import { Paises } from 'src/app/models/paises.model';
import { Suppliers } from 'src/app/models/suppliers.model';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';
import { UserservicesService } from '../../service/userservices.service';
import swal from 'sweetalert2';
import { Estatus } from 'src/app/models/estatus.model';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent {
  id_proveedor;
  idPais: any;
  idCiudad: any;
  idMunicipio: any;
  noproveedor: number = 1;
  supplierForm: FormGroup;
  Paises: Paises[] = [];
  Ciudades: Ciudades[] = [];
  Delegaciones: Delegaciones[] = [];
  Banco: Banco[] = [];
  supplier: Suppliers = new Suppliers();
  Estatus: Estatus[] = [];
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private _servicesuser: UserservicesService,
    private router: Router,
    private _servicesgeneral: GeneralService,
    private activatedRoute: ActivatedRoute,
    private _serviceauth: AuthService,

  ) { 
    this._servicesgeneral.getPais().subscribe(respuesta => {
      this.Paises = respuesta.data;

    });
  
    this.supplierForm = this.formBuilder.group({
      no_proveedor: new FormControl(''),
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

    this.id_proveedor = this.activatedRoute.snapshot.paramMap.get('id');
    this._servicesuser.getSupplierbyId(this.id_proveedor).subscribe((res) => {

      this.supplier = res.data[0];
      console.log(res.data);

      this._servicesgeneral.requestCatalogos().subscribe(respuesta=> {
        this.Estatus = respuesta[2].data;
        this.Banco = respuesta[10].data;
        this.Paises = respuesta[12].data;
        this.Ciudades = respuesta[15].data;
        this.Delegaciones = respuesta[16].data;

        this.setForm();
      });


    });

  }

  setForm(){

    this.supplierForm.controls['no_proveedor'].setValue(this.supplier.no_proveedor);
    this.supplierForm.controls['razon_social'].setValue(this.supplier.razon_social);
    this.supplierForm.controls['rfc'].setValue(this.supplier.rfc);
    this.supplierForm.controls['idPais'].setValue(this.supplier.idPais);
    this.supplierForm.controls['idCiudad'].setValue(this.supplier.idCiudad);
    this.supplierForm.controls['idMunicipio'].setValue(this.supplier.idMunicipio);
    this.supplierForm.controls['calle'].setValue(this.supplier.calle);
    this.supplierForm.controls['no_ext'].setValue(this.supplier.no_ext);
    this.supplierForm.controls['no_int'].setValue(this.supplier.no_int);
    this.supplierForm.controls['colonia'].setValue(this.supplier.colonia);
    this.supplierForm.controls['cp'].setValue(this.supplier.cp);
    this.supplierForm.controls['sitio_web'].setValue(this.supplier.sitio_web);
    this.supplierForm.controls['url_map'].setValue(this.supplier.url_map);
    this.supplierForm.controls['observaciones'].setValue(this.supplier.observaciones);
    this.supplierForm.controls['dias_credito'].setValue(this.supplier.dias_credito);
    this.supplierForm.controls['idBanco'].setValue(this.supplier.idBanco);
    this.supplierForm.controls['no_cuenta'].setValue(this.supplier.no_cuenta);
    this.supplierForm.controls['clabe_intenbancaria'].setValue(this.supplier.clabe_intenbancaria);
    this.supplierForm.controls['nombre_completo'].setValue(this.supplier.nombre_completo);
    this.supplierForm.controls['email'].setValue(this.supplier.email);
    this.supplierForm.controls['tel_movil'].setValue(this.supplier.tel_movil);
    this.supplierForm.controls['tel_trabajo'].setValue(this.supplier.tel_trabajo);
    this.supplierForm.controls['ext'].setValue(this.supplier.ext);
    this.supplierForm.controls['puesto'].setValue(this.supplier.puesto);




  }

  ListSupplier() {
    this.router.navigateByUrl('/dashboard/list-suppliers')

  }

  updateSupplier() {
    this.isLoading = true;
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
    

    const body = {
      id: this.id_proveedor,
     // no_proveedor: this.noproveedor + 1,
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
   

    };

    this._servicesuser.updateSupplier(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Actualizar Proveedor', 'UPDATE').subscribe(() => { });
        this.ListSupplier();

      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }

    });
    this.isLoading = false;


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
  

}
