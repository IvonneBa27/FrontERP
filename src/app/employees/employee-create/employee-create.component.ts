import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { cat_categories } from 'src/app/models/cat_categories.model';
import { Ciudades } from 'src/app/models/ciudades.model';
import { Civilstatuses } from 'src/app/models/civilstatuses.model';
import { Delegaciones } from 'src/app/models/delegaciones.model';
import { Departamento } from 'src/app/models/departamento.model';
import { EjecucionAdministrativa } from 'src/app/models/ejecucionAdministrativa.model';
import { Gender } from 'src/app/models/employee.model';
import { Empresa } from 'src/app/models/empresa.model';
import { Estatus } from 'src/app/models/estatus.model';
import { Paises } from 'src/app/models/paises.model';
import { Puesto } from 'src/app/models/puesto.model';
import { Relationships } from 'src/app/models/relationships.model';
import { SubCategoria } from 'src/app/models/subCategoria.model';
import { Turno } from 'src/app/models/turno.model';
import { TypeBlood } from 'src/app/models/typeBlood.model';
import { Ubicacion } from 'src/app/models/ubicacion.model';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})
export class EmployeeCreateComponent implements OnInit {
  employeeForm: FormGroup;
  country = 152;
  city = 2449;
  status: Estatus[] = [];
  genders: Gender[] = [];
  countrys: Paises[] = [];
  citys: Ciudades[] = [];
  states: Delegaciones[] = [];
  departments: Departamento[] = [];
  categoryes: SubCategoria[] = [];
  shifts: Turno[] = [];
  locations: Ubicacion[] = [];
  stalls: Puesto[] = [];
  companys: Empresa[] = [];
  civilstatuses: Civilstatuses[] = [];
  typeBloods: TypeBlood[] = [];
  relationships: Relationships[] = [];
  administrative_executions: EjecucionAdministrativa[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private _srvGeneral: GeneralService
    ) {
      this.employeeForm = this.formBuilder.group({
        apellido_pat: new FormControl('', [Validators.required]),
        apellido_mat: new FormControl('', [Validators.required]),
        nombre: new FormControl('', [Validators.required]),
        fecha_nacimiento: new FormControl('', [Validators.required]),
        rfc: new FormControl('', [Validators.required]),
        curp: new FormControl('', [Validators.required]),
        id_sexo: new FormControl('', [Validators.required]),
        id_estado_civil: new FormControl('', [Validators.required]), // todo : add - database
        nacionalidad: new FormControl('', [Validators.required]), // todo : add - database
        nss: new FormControl('', [Validators.required]),
        id_pais: new FormControl('', [Validators.required]), // todo : add - database
        id_estado: new FormControl('', [Validators.required]), // todo : add - database
        id_municipio: new FormControl('', [Validators.required]), // todo : add - database
        colonia: new FormControl('', [Validators.required]), // todo : add - database
        calle: new FormControl('', [Validators.required]), // todo : add - database
        no_ext: new FormControl('', [Validators.required]), // todo : add - database
        no_int: new FormControl('', [Validators.required]), // todo : add - database
        cp: new FormControl('', [Validators.required]), // todo : add - database
        referencia: new FormControl('', [Validators.required]), // todo : add - database


        id_tipo_usuario: new FormControl('', [Validators.required]),
        usuario: new FormControl('', [Validators.required]),
        id_ubicacion: new FormControl('', [Validators.required]),
        id_empresa_rh: new FormControl('', [Validators.required]),
        email_personal: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl(''),
        numero_empleado: new FormControl('', [Validators.required]),
        nombre_completo: new FormControl(''),
        id_subcategoria: new FormControl('', [Validators.required]),
        ejecucion_administrativa: new FormControl('', [Validators.required]),
        /*id_compania: new FormControl(''),*/
        id_puesto: new FormControl('', [Validators.required]),
        sueldo: new FormControl('', [Validators.required]),
        id_banco: new FormControl('', [Validators.required]),
        numero_cuenta_bancaria: new FormControl('', [Validators.required]),
        clabe_inter_bancaria: new FormControl('', [Validators.required]),
        fecha_ingreso: new FormControl('', [Validators.required]),
        id_estatus: new FormControl('', [Validators.required]),
        id_departamento_empresa: new FormControl('', [Validators.required]),
        id_turno: new FormControl('', [Validators.required]),
      });
  }

  ngOnInit(): void {
    this._srvGeneral.catalogsEmployees().subscribe((res) => {
      console.log(res);
      this.status = res[0].data;
      this.genders = res[11].data;
      this.countrys = res[8].data;

      const citys = res[9].data;
      this.citys = citys.filter(
        (x: { idpais: number }) => x.idpais == this.country
      );

      const states = res[10].data;
      this.states = states.filter(
        (x: { idciudad: number }) => x.idciudad == this.city
      );

      this.administrative_executions = res[6].data;
      this.departments = res[5].data;
      this.categoryes = res[15].data;
      this.shifts = res[3].data;
      this.locations = res[2].data;
      this.stalls = res[7].data;
      this.companys = res[1].data;
      this.civilstatuses = res[12].data;
      this.typeBloods = res[13].data;
      this.relationships = res[14].data;
    });
  }

  createEmployee(){
    console.log(this.employeeForm.value);
    
  }
}
