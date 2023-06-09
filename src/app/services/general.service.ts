import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  baseUrl: string = environment.api;

  constructor(private http: HttpClient, private _srvStorage: StorageService) {}

  getAgents(id: number): Observable<any> {
    const URL = this.baseUrl + 'agents';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const params = new HttpParams().set('id', id);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http
      .get(URL, { headers: headers, params: params })
      .pipe(map((res) => res));
  }

  getTypePays(): Observable<any> {
    const URL = this.baseUrl + 'typePays';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getLeaders(): Observable<any> {
    const URL = this.baseUrl + 'leaders';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getTipoUsuario(): Observable<any> {
    const URL = this.baseUrl + 'TipoUsuario/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getUbicaciones(): Observable<any> {
    const URL = this.baseUrl + 'Ubicaciones/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getEmpresa(): Observable<any> {
    const URL = this.baseUrl + 'Empresa/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getSexo(): Observable<any> {
    const URL = this.baseUrl + 'Sexo/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getSubCategoria(): Observable<any> {
    const URL = this.baseUrl + 'SubCategoria/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getDomilicioUsuario(): Observable<any> {
    const URL = this.baseUrl + 'DomicilioUsuario/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getEjecucionAdministrativa(): Observable<any> {
    const URL = this.baseUrl + 'EjecucionAdministrativa/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getPuesto(): Observable<any> {
    const URL = this.baseUrl + 'Puesto/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getBanco(): Observable<any> {
    const URL = this.baseUrl + 'Banco/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getEstatus(): Observable<any> {
    const URL = this.baseUrl + 'Estatus/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getDepartamento(): Observable<any> {
    const URL = this.baseUrl + 'Departamento/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getTurno(): Observable<any> {
    const URL = this.baseUrl + 'Turno/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getTypeModule(): Observable<any> {
    const URL = this.baseUrl + 'TipoModulo/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getPais(): Observable<any> {
    const URL = this.baseUrl + 'paises/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getSATCFDI(): Observable<any> {
    const URL = this.baseUrl + 'regimencdfi/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }
  getSATRegimenfiscal(): Observable<any> {
    const URL = this.baseUrl + 'regimenfiscal/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getCiudad(idPais: any): Observable<any> {
    const URL = this.baseUrl + `ciudades/get?param=${idPais}`;
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }
  getMunicipio(idPais: any, idCiudad: any): Observable<any> {
    const URL =
      this.baseUrl + `delegaciones/get?param=${idPais}&param1=${idCiudad}`;
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getCiudadT(): Observable<any> {
    const URL = this.baseUrl + 'ciudadesT/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getMunicipioT(): Observable<any> {
    const URL = this.baseUrl + 'delegacionesT/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getCategorie(): Observable<any> {
    const URL = this.baseUrl + 'categories/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getBrands(): Observable<any> {
    const URL = this.baseUrl + 'brands/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getSubCategorie(): Observable<any> {
    const URL = this.baseUrl + 'subcategories/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getUsers(): Observable<any> {
    const URL = this.baseUrl + 'usuario/getOrderBy';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getSecction(): Observable<any> {
    const URL = this.baseUrl + 'secctions/getV1';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getStores(): Observable<any> {
    const URL = this.baseUrl + 'stores/getAnt';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getTypeIncome(): Observable<any> {
    const URL = this.baseUrl + 'incomeTypeStores/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getSupplier(): Observable<any> {
    const URL = this.baseUrl + 'suppliers/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getMaritalStatus(): Observable<any> {
    const URL = this.baseUrl + 'getMaritalStatus';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getTypeBloods(): Observable<any> {
    const URL = this.baseUrl + 'getTypeBloods';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }
  getRelationship(): Observable<any> {
    const URL = this.baseUrl + 'getRelationship';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  getCauses(): Observable<any> {
    const URL = this.baseUrl + 'getCauses';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  gerReasons(): Observable<any> {
    const URL = this.baseUrl + 'gerReasons';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }
  getTypeExit(): Observable<any> {
    const URL = this.baseUrl + 'typeExit/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }



  public requestCatalogos(): Observable<any[]> {
    let response1 = this.getTipoUsuario();
    let response2 = this.getSexo();
    let response3 = this.getEstatus();
    let response4 = this.getUbicaciones();
    let response5 = this.getEmpresa();
    let response6 = this.getSubCategoria();
    let response7 = this.getEjecucionAdministrativa();
    let response8 = this.getDepartamento();
    let response9 = this.getPuesto();
    let response10 = this.getTurno();
    let response11 = this.getBanco();
    let response12 = this.getTypeModule();
    let response13 = this.getPais();
    let response14 = this.getSATCFDI();
    let response15 = this.getSATRegimenfiscal();
    let response16 = this.getCiudadT();
    let response17 = this.getMunicipioT();
    let response18 = this.getCategorie();
    let response19 = this.getBrands();
    let response20 = this.getSubCategorie();
    let response21 = this.getUsers();
    let response22 = this.getSecction();
    let response23 = this.getStores();
    let response24 = this.getTypeIncome();
    let response25 = this.getSupplier();
    let response26 = this.getTypeExit();

    return forkJoin([
      response1,
      response2,
      response3,
      response4,
      response5,
      response6,
      response7,
      response8,
      response9,
      response10,
      response11,
      response12,
      response13,
      response14,
      response15,
      response16,
      response17,
      response18,
      response19,
      response20,
      response21,
      response22,
      response23,
      response24,
      response25,
      response26,
    ]);
  }

  public catalogsEmployees(): Observable<any[]> {
    let response1 = this.getEstatus();
    let response2 = this.getEmpresa();
    let response3 = this.getUbicaciones();
    let response4 = this.getTurno();
    let response5 = this.getCategorie();
    let response6 = this.getDepartamento();
    let response7 = this.getEjecucionAdministrativa();
    let response8 = this.getPuesto();
    // parentesco
    // fecha pago
    // tipo de sangre
    let response9 = this.getPais();
    let response10 = this.getCiudadT();
    let response11 = this.getMunicipioT();
    // nacionalidad
    let response12 = this.getSexo();
    let response13 = this.getMaritalStatus();
    let response14 = this.getTypeBloods();
    let response15 = this.getRelationship();
    let response16 = this.getSubCategoria();
    let response17 = this.getBanco();
    let response18 = this.getTipoUsuario();
    // estado civil

    return forkJoin([
      response1,
      response2,
      response3,
      response4,
      response5,
      response6,
      response7,
      response8,
      response9,
      response10,
      response11,
      response12,
      response13,
      response14,
      response15,
      response16,
      response17,
      response18,
    ]);
  }

  public catalogsBlackList(): Observable<any[]>{
    let response1 = this.getCauses();
    let response2 = this.gerReasons();

    return forkJoin([
      response1,
      response2
    ]);

  }

  public catalogsInventory(): Observable<any[]>{
    let response1 = this.getSecction();
    let response2 = this.getStores();
    let response3 = this.getTypeIncome();
    let response4 = this.getTypeExit();
    let response5 = this.getUsers();


    return forkJoin([
      response1,
      response2,
      response3,
      response4,
      response5,

    ]);

  }

  
}
