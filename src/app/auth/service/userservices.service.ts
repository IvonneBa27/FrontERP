import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { identifierName } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  baseUrl: string = environment.api;
  constructor(private http: HttpClient, private _srvStorage: StorageService) {}


 //USUARIO
  createUser(data: { id_tipo_usuario: any; usuario: any; nombre: any; apellido_pat: any; apellido_mat:  any; nombre_completo:any; id_ubicacion: any; id_empresa_rh: any; email_personal: any; email: any; password: any; numero_empleado: any; curp: any; rfc: any; nss: any; id_sexo: any; id_subcategoria: any;  ejecucion_administrativa: any;  id_puesto: any; sueldo: any; id_banco: any; numero_cuenta_bancaria: any;  clabe_inter_bancaria: any; fecha_ingreso: any;  fecha_nacimiento: any; id_estatus: any; id_departamento_empresa: any; id_turno: any;  img_profile: any;    }): Observable<any> {
    const URL = this.baseUrl + 'usuario/create';

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(URL, data, { headers }).pipe(map((res) => res));
  }

  getUser(): Observable<any> {
    const URL = this.baseUrl + 'usuario/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getUserbyId(id: any): Observable<any> {
    const URL = this.baseUrl + `usuario/id?id=${id}`;
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  
  }

  UpdateUser(data: {
      id: string | null; id_tipo_usuario: any; usuario: any; nombre: any; apellido_pat: any; apellido_mat: any; id_ubicacion: any; id_empresa_rh: any; email_personal: any; email: any; curp: any; rfc: any; nss: any; id_sexo: any; id_subcategoria: any; ejecucion_administrativa: any;  id_puesto: any; sueldo: any; id_banco: any; numero_cuenta_bancaria: any; clabe_inter_bancaria: any; fecha_ingreso: any;  fecha_nacimiento: any; id_estatus: any; id_departamento_empresa: any; id_turno: any; 
    }  ): Observable<any> {
    const URL = this.baseUrl + 'usuario/update';

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(URL, data, { headers }).pipe(map((res) => res));
  }


  DeleteUser(data: {
    id: string | null;  fecha_baja:  any;  motivo_baja: any; mes_baja: any; 
  }  ): Observable<any> {
  const URL = this.baseUrl + 'usuario/delete';

  const headers = new HttpHeaders().set('Accept', 'application/json');
  return this.http.post(URL, data, { headers }).pipe(map((res) => res));
}

//MODULO

createModule(data: { name: any; id_type: any; order: any; status: any;   }): Observable<any> {
  const URL = this.baseUrl + 'modulo/create';

  const headers = new HttpHeaders().set('Accept', 'application/json');
  return this.http.post(URL, data, { headers }).pipe(map((res) => res));
}


getModule(): Observable<any> {
  const URL = this.baseUrl + 'modulo/get';
  const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

  const headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Authorization', token);

  return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
}

getModulebyId(id: any): Observable<any> {
  const URL = this.baseUrl + `modulo/id?id=${id}`;
  const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

  const headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Authorization', token);

  return this.http.get(URL, { headers: headers }).pipe(map((res) => res));

}

updateModule(data: { name: any; id_type: any; order: any; status: any;
  id: string | null;  
}  ): Observable<any> {
const URL = this.baseUrl + 'modulo/update';

const headers = new HttpHeaders().set('Accept', 'application/json');
return this.http.post(URL, data, { headers }).pipe(map((res) => res));
}

deleteModule(data: {
  id: string | null;  
}  ): Observable<any> {
const URL = this.baseUrl + 'modulo/delete';

const headers = new HttpHeaders().set('Accept', 'application/json');
return this.http.post(URL, data, { headers }).pipe(map((res) => res));
}


// TIPOS DE MODULOS

createTypeModule(data: { name: any; status: any;   }): Observable<any> {
  const URL = this.baseUrl + 'tipomodulo/create';

  const headers = new HttpHeaders().set('Accept', 'application/json');
  return this.http.post(URL, data, { headers }).pipe(map((res) => res));
}

getTypeModule(): Observable<any> {
  const URL = this.baseUrl + 'tipomodulo/get';
  const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

  const headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Authorization', token);

  return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
}

getTypeModulebyId(id: any): Observable<any> {
  const URL = this.baseUrl + `tipomodulo/id?id=${id}`;
  const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

  const headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Authorization', token);

  return this.http.get(URL, { headers: headers }).pipe(map((res) => res));

}

updateTypeModule(data: { name: any; status: any;
  id: string | null;  
}  ): Observable<any> {
const URL = this.baseUrl + 'tipomodulo/update';

const headers = new HttpHeaders().set('Accept', 'application/json');
return this.http.post(URL, data, { headers }).pipe(map((res) => res));
}

deleteTypeModule(data: {
  id: string | null;  
}  ): Observable<any> {
const URL = this.baseUrl + 'tipomodulo/delete';

const headers = new HttpHeaders().set('Accept', 'application/json');
return this.http.post(URL, data, { headers }).pipe(map((res) => res));
}




}
