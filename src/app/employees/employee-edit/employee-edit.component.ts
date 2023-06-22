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
import { Employee, Gender } from 'src/app/models/employee.model';
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
import { StorageService } from 'src/app/services/storage.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  employees: Employee[] = [];
  companies: Empresa[] = [];
  paramSerach: string = '';
  company: number = 0;

  p: number = 1;
  numPag: number = 15;
  totalReg: number = 0;
  config: any;
  configCustomPagination: any;
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  isLoading: boolean = false;

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
  banks: Banco[] = [];
  userTypes: TipoUsuario[] = [];
  administrative_executions: EjecucionAdministrativa[] = [];

  citysRespaldo: Ciudades[] = [];
  statesRespaldo: Delegaciones[] = [];
  constructor(
    private _srvStorage: StorageService,
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
      id_municipio: new FormControl('', [Validators.required]), // todo : add - database
      colonia: new FormControl(''), // todo : add - database
      calle: new FormControl('', [Validators.required]), // todo : add - database
      no_ext: new FormControl('', [Validators.required]), // todo : add - database
      no_int: new FormControl(''), // todo : add - database
      cp: new FormControl('', [Validators.required]), // todo : add - database
      referencia: new FormControl(''), // todo : add - database

      tel_personal: new FormControl('', [Validators.required]), // todo : add - database
      email_personal: new FormControl('', [Validators.required]),

      contacto_emergencia_nombre: new FormControl(''),
      contacto_emergencia_parentesco: new FormControl(''),
      contacto_emergencia_telefono: new FormControl(''),
      contacto_emergencia_tip_sangre: new FormControl(''),
      contacto_emergencia_padecimientos: new FormControl(''),
      contacto_emergencia_movil: new FormControl(''),
      id: new FormControl(''),
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

      this.setForm();
    });
  }

  setForm() {
    const employee = JSON.parse(this._srvStorage.get('employee'));
    this.employeeForm.patchValue({
      apellido_pat: employee.apellido_pat,
      apellido_mat: employee.apellido_mat,
      nombre: employee.nombre,
      fecha_nacimiento: employee.fecha_nacimiento,
      rfc: employee.rfc,
      curp: employee.curp,
      id_sexo: employee.id_sexo,
      id_estado_civil: employee.id_estado_civil,
      nacionalidad: employee.nacionalidad,
      nss: employee.nss,
      id_pais: employee.id_pais,
      id_estado: employee.id_estado,
      id_municipio: employee.id_municipio,
      colonia: employee.colonia,
      calle: employee.calle,
      no_ext: employee.no_ext,
      no_int: employee.no_int,
      cp: employee.cp,
      referencia: employee.referencia,
      tel_personal: employee.tel_personal,
      email_personal: employee.email_personal,
      contacto_emergencia_nombre: employee.contacto_emergencia_nombre,
      contacto_emergencia_parentesco: employee.contacto_emergencia_parentesco,
      contacto_emergencia_telefono: employee.contacto_emergencia_telefono,
      contacto_emergencia_tip_sangre: employee.contacto_emergencia_tip_sangre,
      contacto_emergencia_padecimientos:
        employee.contacto_emergencia_padecimientos,
      contacto_emergencia_movil: employee.contacto_emergencia_movil,
      id_puesto: employee.id_puesto,
      ejecucion_administrativa: employee.ejecucion_administrativa,
      id_departamento_empresa: employee.id_departamento_empresa,
      id_subcategoria: employee.id_subcategoria,
      id_turno: employee.id_turno,
      id_ubicacion: employee.id_ubicacion,
      fecha_ingreso: employee.fecha_ingreso,
      tel_laboral: employee.tel_laboral,
      email: employee.email,
      id_empresa_rh: employee.id_empresa_rh,
      sueldo: employee.sueldo,
      fecha_pago: employee.fecha_pago,
      id_banco: employee.id_banco,
      numero_cuenta_bancaria: employee.numero_cuenta_bancaria,
      clabe_inter_bancaria: employee.clabe_inter_bancaria,
      usuario: employee.usuario,
      password: employee.password,
      id_estatus: employee.id_estatus,
      numero_empleado: employee.numero_empleado,
      id: employee.id,
    });

    this.isLoading = false;
  }
  editEmployee() {
    this.isLoading = true;
    this._srvEmployee
      .updateEmployee(this.employeeForm.value)
      .subscribe((res) => {
        if (res.status == 'success') {
          this._srvStorage.remove('employee');
          swal.fire('Do It Right', res.msg, 'success');
          this.isLoading = false;
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
