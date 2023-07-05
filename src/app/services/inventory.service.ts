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
export class InventoryService {

      baseUrl: string = environment.api;
      constructor(private http: HttpClient, private _srvStorage: StorageService) { }


    //Lista de Almacenes y Secciones
    //-Modulo Traspaso y Salida de Almacen  
    getListIncomeStore(): Observable<any> {
      const URL = this.baseUrl + 'incomeStores/getListIncomeStore';
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
    }

    //Lista de Tipos de Salida
    //-Modulo Ingreso y Salida de Almacen

    getTypeExit(): Observable<any> {
      const URL = this.baseUrl + 'typeExit/get';
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
    }

    //Crear registro en Salida de Almacen
    //Modulo salida de Almacen tabla store_exits
    createStoreExit(
      data: {
        store_origin_id: any; 
        section_origin_id: any; 
        id_type_exit: any;
        user_id: any;
        authorized_id: any;
        person_who_receives: any;
        category_id: any; 
        subcategory_id: any; 
        brand_id: any; 
        }
        ): Observable<any> {
      const URL = this.baseUrl + 'storeExit/create';
  
      const headers = new HttpHeaders().set('Accept', 'application/json');
      return this.http.post(URL, data, { headers }).pipe(map((res) => res));
    
    }

     //Lista de Almacenes y Secciones
    //-Modulo Traspaso y Salida de Almacen  
    getExitStoreId(id: any): Observable<any> {
      const URL = this.baseUrl + `storeExit/getid?id=${id}`;
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
    }

    
    //Lista de Productos
    //-Relación de Ingreso de Almacen
    getListIncomeProduct(idStore: any, idSecction: any): Observable<any> {
      const URL = this.baseUrl + `incomeStoresDetailProduct/getListIncomeProduct?warehouse_id=${idStore}&section_id=${idSecction}`;
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  
    }

    //Crear Detalle de Salida de Almacen
    //-Modulo exit-store-detail

    createExitDetailStore(
      body : {

        id_store_exit:number;
        product_income_id: any;
       
    }[]

    ): Observable<any> {
      const URL = this.baseUrl + 'storeExitDetail/create';
      const headers = new HttpHeaders().set('Accept', 'application/json');

      return this.http.post(URL, body, { headers }).pipe(map((res) => res));
    }
    
    //Actualizar en Salida de Almacen
    //Modulo salida de Almacen tabla store_exits

    updateExitStore(data: {
      amount:any;
      total_received:any;
      id_status:any;
      observations:any;  
      id: string | null;
    }): Observable<any> {
      const URL = this.baseUrl + 'storeExit/update';
  
      const headers = new HttpHeaders().set('Accept', 'application/json');
      return this.http.post(URL, data, { headers }).pipe(map((res) => res));

    }

    //*HOME INVENTARIO*

       //Mostrar productos agrupados por Almacen
       //Todos
    getListInventoryAll(): Observable<any> {
      const URL = this.baseUrl + 'reports/get';
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
    }

     //Mostrar productos agrupados por Almacen por tipo de Inventario

    getListInventory(inventory: any): Observable<any> {
      const URL = this.baseUrl + `reports/getInventariable?id_unitmeasure=${inventory}`;
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  
    }
         //Mostrar productos agrupados por Categoria
       //Todos
       getListInventoryDetailAll(): Observable<any> {
        const URL = this.baseUrl + 'reportsdetail/get';
        const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
    
        const headers = new HttpHeaders()
          .set('Accept', 'application/json')
          .set('Authorization', token);
    
        return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
      }

          //Mostrar productos agrupados por Categoria
  
      getListInventoryDetail(inventory: any): Observable<any> {
        const URL = this.baseUrl + `reportsdetail/getDetail?id_unitmeasure=${inventory}`;
        const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
    
        const headers = new HttpHeaders()
          .set('Accept', 'application/json')
          .set('Authorization', token);
    
        return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
      }
  



   
}
