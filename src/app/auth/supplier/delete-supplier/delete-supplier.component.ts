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
  selector: 'app-delete-supplier',
  templateUrl: './delete-supplier.component.html',
  styleUrls: ['./delete-supplier.component.css']
})
export class DeleteSupplierComponent {
  id_proveedor;
  idPais: any;
  idCiudad: any;
  idMunicipio: any;
  noproveedor: number = 1;
  supplierForm: FormGroup;
  Paises: Paises[] = [];
  Ciudades: Ciudades[] = [];
  Delegaciones: Delegaciones[] = [];
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
      idestatus: new FormControl(''),

    });

    this.id_proveedor = this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;
    this._servicesuser.getSupplierbyId(this.id_proveedor).subscribe((res) => {

      this.supplier = res.data[0];
      console.log(res.data);

      this._servicesgeneral.requestCatalogos().subscribe(respuesta=> {
        this.Estatus = respuesta[2].data;
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
    this.supplierForm.controls['idestatus'].setValue(this.supplier.idestatus);


    this.isLoading = false;

  }

  ListSupplier() {
    this.router.navigateByUrl('/dashboard/list-suppliers')

  }

DeleteSupplier() {

  
    const body = {
      id: this.id_proveedor,
   


    };

    this._servicesuser.deleteSupplier(body).subscribe(res => {
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



  }

 
}
