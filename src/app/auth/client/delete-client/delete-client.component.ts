import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserservicesService } from '../../service/userservices.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { GeneralService } from 'src/app/services/general.service';
import { Paises } from 'src/app/models/paises.model';
import { Ciudades } from 'src/app/models/ciudades.model';
import { Delegaciones } from 'src/app/models/delegaciones.model';
import { Catalogo_SAT_RegimenFiscal } from 'src/app/models/catalogo_sat_regimenfiscal.model';
import { Catalogo_SAT_CFDI } from 'src/app/models/catalogo_sat_uso_cfdi.model';
import { Customers } from 'src/app/models/customers.model';
import { Estatus } from 'src/app/models/estatus.model';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent {
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
  private _serviceauth: any;
  isLoading = false;

  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _servicesgeneral: GeneralService,
  ) {

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
      idestatus: new FormControl(''),



    });
    this.id_cliente = this.activatedRoute.snapshot.paramMap.get('id');
    this._servicesuser.getClientbyId(this.id_cliente).subscribe((res) => {

      this.client = res.data[0];
   

      this._servicesgeneral.requestCatalogos().subscribe(respuesta=> {
        this.Estatus = respuesta[2].data;
        this.Paises = respuesta[12].data;
        this.Ciudades = respuesta[15].data;
        this.Delegaciones = respuesta[16].data;

        this.setForm();

       // console.log(this.client);
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
   
    this.clientForm.controls['idestatus'].setValue(this.client.idestatus);

   }


   ListClient() {
    this.router.navigateByUrl('/dashboard/list-client')

  }

  DeleteClient() {

 
    this.isLoading = true;

    const body = {
      id: this.id_cliente,
 

  


    };

    this._servicesuser.deleteClient(body).subscribe(res => {
      console.log(res);
      if (res.status == 'success') {
        swal.fire('Do It Right', res.message, 'success');

        this._serviceauth.createLog('Eliminar Cliente','DELETE').subscribe(() =>{});
        this.ListClient();


      }

      else {
        swal.fire('Do It Right', res.msg, 'error');
      }

    });
    this.isLoading = false;
  }

 

}
