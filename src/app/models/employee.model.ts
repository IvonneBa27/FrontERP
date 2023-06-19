export class Employee {
  id!: number;
  id_tipo_usuario!: number;
  usuario!: string;
  nombre!: string;
  apellido_pat!: string;
  apellido_mat!: string;
  id_ubicacion!: number;
  id_empresa_rh!: number;
  email_personal!: string;
  email!: string;
  password!: string;
  numero_empleado!: number;
  nombre_completo!: string;
  curp!: string;
  rfc!: string;
  nss!: string;
  id_sexo!: number;
  id_subcategoria!: number;
  id_domicilio!: number;
  ejecucion_administrativa!: number;
  id_compania!: number;
  ola!: string;
  id_puesto!: number;
  sueldo!: number;
  id_banco!: number;
  numero_cuenta_bancaria!: string;
  clabe_inter_bancaria!: string;
  fecha_ingreso!: string;
  fecha_contrato!: string;
  fecha_nacimiento!: string;
  id_estatus!: number;
  id_departamento_empresa!: number;
  id_turno!: number;
  fecha_baja!: string;
  motivo_baja!: string;
  mes_baja!: string;
  fecha_inicio_capacitacion!: string;
  fecha_fin_capacitacion!: string;
  img_profile!: string;
  created_at!: null;
  updated_at!: null;
  gender!: Gender;
  company!: Company;
  administrative_execution!: administrative_execution;
}

export class Gender {
    nombre!: string;
    id!: number;
}

export class Company {
  nombre!: string;
  id!: number;
}

export class administrative_execution {
  nombre!: string;
  id!: number;
}