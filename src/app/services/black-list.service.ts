import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class BlackListService {
  baseUrl: string = environment.api;
  constructor(private http: HttpClient, private _srvStorage: StorageService) {}

  getBlackList(): Observable<any> {
    const URL = this.baseUrl + 'blacklist/list';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }

  create(data: any): Observable<any> {
    const URL = this.baseUrl + 'blacklist/create';
    // const token = 'Bearer ' + this.storageSrv.get('token');

    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.post(URL, data, { headers }).pipe(map((res) => res));
  }

  serach(param: string): Observable<any> {
    const URL = this.baseUrl + 'blacklist/search';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    const params = new HttpParams().set('param', param);

    return this.http
      .get(URL, { headers: headers, params: params })
      .pipe(map((res) => res));
  }

  delete(id: number): Observable<any> {
    const URL = this.baseUrl + 'blacklist/delete';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    const params = new HttpParams().set('id', id);

    return this.http
      .get(URL, { headers: headers, params: params })
      .pipe(map((res) => res));
  }
}
