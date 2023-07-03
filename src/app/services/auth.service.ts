import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = environment.api;
  constructor(private http: HttpClient, private _srvStorage: StorageService) {}

  login(usuario: string, password: string): Observable<any> {
    const URL = this.baseUrl + 'login';
    console.log(URL);
    // const token = 'Bearer ' + this.storageSrv.get('token');

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const body = {
      usuario: usuario,
      password: password,
    };

    return this.http.post(URL, body, { headers }).pipe(map((res) => res));
  }

  logout(): Observable<any> {
    const URL = this.baseUrl + 'logout';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  sendEmail(email: string): Observable<any> {
    const URL = this.baseUrl + 'send-mail';
    // const token = 'Bearer ' + this.storageSrv.get('token');

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const body = {
      email: email,
    };

    return this.http.post(URL, body, { headers }).pipe(map((res) => res));
  }

  createLog(message: string, event: string): Observable<any> {
    const URL = this.baseUrl + 'logs/create';

    const body = {
      message: message,
      event: event,
      id_user: 1,
      system: 'ERP',
    };

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(URL, body, { headers }).pipe(map((res) => res));
  }

  getModules(id_module: number): Observable<any> {
    const URL = this.baseUrl + 'usuario/getModules';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
    const user_id = JSON.parse(this._srvStorage.get('user_id'));
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    const params = new HttpParams()
      .set('id', user_id)
      .set('id_module', id_module);

    return this.http
      .get(URL, { headers: headers, params: params })
      .pipe(map((res) => res));
  }

  getModuleUserById(id_module: number): Observable<any> {
    const URL = this.baseUrl + 'usuario/getModuleUserById';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    const params = new HttpParams().set('id', id_module);

    return this.http
      .get(URL, { headers: headers, params: params })
      .pipe(map((res) => res));
  }

  addPermisse(
    body: {
      id_usuario: number;
      id_modulo: any;
      show: any;
      create: any;
      edit: any;
      delete: any;
      read: any;
    }[]
  ): Observable<any> {
    const URL = this.baseUrl + 'usuario/addPermisse';

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(URL, body, { headers }).pipe(map((res) => res));
  }

  getUserById(id: string | number | boolean): Observable<any> {
    const URL = this.baseUrl + 'usuario/id';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    const params = new HttpParams().set('id', id);

    return this.http
      .get(URL, { headers: headers, params: params })
      .pipe(map((res) => res));
  }

  getPermissionModules(): Observable<any> {
    const URL = this.baseUrl + 'usuario/getPermissionModules';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
    const user_id = JSON.parse(this._srvStorage.get('user_id'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    const params = new HttpParams().set('id_usuario', user_id);

    return this.http
      .get(URL, { headers: headers, params: params })
      .pipe(map((res) => res));
  }

  retrievePassword(body: { id: any; password: any; }): Observable<any> {
    const URL = this.baseUrl + 'user/retiervePassword';

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(URL, body, { headers }).pipe(map((res) => res));
  }
}
