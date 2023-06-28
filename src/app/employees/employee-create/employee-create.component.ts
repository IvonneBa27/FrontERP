import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Banco } from 'src/app/models/Banco.model';
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
import { TipoUsuario } from 'src/app/models/tipoUsuario.model';
import { Turno } from 'src/app/models/turno.model';
import { TypeBlood } from 'src/app/models/typeBlood.model';
import { Ubicacion } from 'src/app/models/ubicacion.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { GeneralService } from 'src/app/services/general.service';
import swal from 'sweetalert2';

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
  citysRespaldo: Ciudades[] = [];

  states: Delegaciones[] = [];
  statesRespaldo: Delegaciones[] = [];

  departments: Departamento[] = [];
  categoryes: SubCategoria[] = [];
  shifts: Turno[] = [];
  locations: Ubicacion[] = [];
  stalls: Puesto[] = [];
  companys: Empresa[] = [];
  civilstatuses: Civilstatuses[] = [];
  typeBloods: TypeBlood[] = [];
  relationships: Relationships[] = [];
  banks: Banco[] = [];
  userTypes: TipoUsuario[] = [];
  administrative_executions: EjecucionAdministrativa[] = [];
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _srvGeneral: GeneralService,
    private _srvEmployee: EmployeesService,
    private router: Router
  ) {
    this.employeeForm = this.formBuilder.group({
      apellido_pat: new FormControl('', [Validators.required]),
      apellido_mat: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      rfc: new FormControl(''),
      curp: new FormControl('', [Validators.required]),
      id_sexo: new FormControl('', [Validators.required]),

      id_estado_civil: new FormControl('', [Validators.required]), // todo : add - database
      nacionalidad: new FormControl('', [Validators.required]), // todo : add - database
      nss: new FormControl(''),

      id_pais: new FormControl('', [Validators.required]), // todo : add - database
      id_estado: new FormControl('', [Validators.required]), // todo : add - database
      id_municipio: new FormControl(''), // todo : add - database
      colonia: new FormControl(''), // todo : add - database
      calle: new FormControl('', [Validators.required]), // todo : add - database
      no_ext: new FormControl(''), // todo : add - database
      no_int: new FormControl(''), // todo : add - database
      cp: new FormControl(''), // todo : add - database
      referencia: new FormControl(''), // todo : add - database

      tel_personal: new FormControl(''), // todo : add - database
      email_personal: new FormControl(''),

      contacto_emergencia_nombre: new FormControl(''),
      contacto_emergencia_parentesco: new FormControl(''),
      contacto_emergencia_telefono: new FormControl(''),
      contacto_emergencia_tip_sangre: new FormControl(''),
      contacto_emergencia_padecimientos: new FormControl(''),
      contacto_emergencia_movil: new FormControl(''),

      id_puesto: new FormControl(''),
      ejecucion_administrativa: new FormControl(''),
      id_departamento_empresa: new FormControl(''),
      id_subcategoria: new FormControl(''),
      id_turno: new FormControl(''),
      id_ubicacion: new FormControl(''),
      fecha_ingreso: new FormControl(''),
      tel_laboral: new FormControl(''), // todo : add - database
      email: new FormControl(''),
      id_empresa_rh: new FormControl(''),
      sueldo: new FormControl(''),
      fecha_pago: new FormControl(''),
      id_banco: new FormControl(''),
      numero_cuenta_bancaria: new FormControl(''),
      clabe_inter_bancaria: new FormControl(''),

      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      id_estatus: new FormControl('', [Validators.required]),
      numero_empleado: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.isLoading = true;
    this._srvGeneral.catalogsEmployees().subscribe((res) => {
      this.status = res[0].data;
      this.genders = res[11].data;
      this.countrys = res[8].data;

      this.citysRespaldo = res[9].data;
      this.citys = this.citysRespaldo.filter(
        (x: { idpais: number }) => x.idpais == this.country
      );

      this.statesRespaldo = res[10].data;
      this.states = this.statesRespaldo.filter(
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
      this.banks = res[16].data;
      this.userTypes = res[17].data;

      this.isLoading = false;
    });
  }

  createEmployee() {
    this.isLoading = true;
    console.log(this.employeeForm.value);
    this._srvEmployee
      .createEmployee(this.employeeForm.value)
      .subscribe((res) => {
        console.log(res);
        if (res.status == 'success') {
          this.isLoading = false;
          swal.fire('Do It Right', res.msg, 'success');
          this.router.navigate([`/dashboard/list`]);
        } else {
          this.isLoading = false;
          swal.fire('Do It Right', res.msg, 'error');
        }
      });
  }

  selectCity(event: any) {
    const selectedValue = event.target.value;

    this.citys = this.citysRespaldo.filter(
      (x: { idpais: number }) => x.idpais == selectedValue
    );
  }
  selectState(event: any) {
    const selectedValue = event.target.value;

    this.states = this.statesRespaldo.filter(
      (x: { idciudad: number }) => x.idciudad == selectedValue
    );
  }
}
