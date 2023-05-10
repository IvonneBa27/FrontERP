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
  constructor(private http: HttpClient, private _srvStorage: StorageService) { }


  //USUARIO
  createUser(data: { id_tipo_usuario: any; usuario: any; nombre: any; apellido_pat: any; apellido_mat: any; nombre_completo: any; id_ubicacion: any; id_empresa_rh: any; email_personal: any; email: any; password: any; numero_empleado: any; curp: any; rfc: any; nss: any; id_sexo: any; id_subcategoria: any; ejecucion_administrativa: any; id_puesto: any; sueldo: any; id_banco: any; numero_cuenta_bancaria: any; clabe_inter_bancaria: any; fecha_ingreso: any; fecha_nacimiento: any; id_estatus: any; id_departamento_empresa: any; id_turno: any; img_profile: any; }): Observable<any> {
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

  getUserOrderBy(): Observable<any> {
    const URL = this.baseUrl + 'usuario/getOrderBy';
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
    id: string | null; id_tipo_usuario: any; usuario: any; nombre: any; apellido_pat: any; apellido_mat: any; id_ubicacion: any; id_empresa_rh: any; email_personal: any; email: any; curp: any; rfc: any; nss: any; id_sexo: any; id_subcategoria: any; ejecucion_administrativa: any; id_puesto: any; sueldo: any; id_banco: any; numero_cuenta_bancaria: any; clabe_inter_bancaria: any; fecha_ingreso: any; fecha_nacimiento: any; id_estatus: any; id_departamento_empresa: any; id_turno: any;
  }): Observable<any> {
    const URL = this.baseUrl + 'usuario/update';

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(URL, data, { headers }).pipe(map((res) => res));
  }


  DeleteUser(data: {
    id: string | null; fecha_baja: any; motivo_baja: any; mes_baja: any;
  }): Observable<any> {
    const URL = this.baseUrl + 'usuario/delete';

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(URL, data, { headers }).pipe(map((res) => res));
  }

  //MODULO

  createModule(data: { name: any; id_type: any; order: any; status: any; }): Observable<any> {
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

  updateModule(data: {
    name: any; id_type: any; order: any; status: any;
    id: string | null;
  }): Observable<any> {
    const URL = this.baseUrl + 'modulo/update';

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(URL, data, { headers }).pipe(map((res) => res));
  }

  deleteModule(data: {
    id: string | null;
  }): Observable<any> {
    const URL = this.baseUrl + 'modulo/delete';

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(URL, data, { headers }).pipe(map((res) => res));
  }


  // TIPOS DE MODULOS

  createTypeModule(data: { name: any; status: any; }): Observable<any> {
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

  updateTypeModule(data: {
    name: any; status: any;
    id: string | null;
  }): Observable<any> {
    const URL = this.baseUrl + 'tipomodulo/update';

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(URL, data, { headers }).pipe(map((res) => res));
  }

  deleteTypeModule(data: {
    id: string | null;
  }): Observable<any> {
    const URL = this.baseUrl + 'tipomodulo/delete';

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(URL, data, { headers }).pipe(map((res) => res));
  }


  searchUsers(nombre_completo: any): Observable<any> {
    const URL = this.baseUrl + `searchUsers/get?param=${nombre_completo}`;
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));

  }

  searchEstatus(id_estatus: any): Observable<any> {
    const URL = this.baseUrl + `usuario/getStatus?param=${id_estatus}`;
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));

  }

  //Clientes
  createClient(data: {
    no_cliente: any; razon_social: any; rfc: any; idPais: any; idCiudad: any; idMunicipio: any; calle: any; no_ext: any; no_int: any; colonia: any; cp: any;  sitio_web:any; url_map: any; observaciones: any; cp_fiscal: any; idUsoCfdi: any; idRegimenFiscal: any; nombre_completo: any; email: any; movil: any; tel_trabajo: any; ext: any; puesto: any; nombre_completo_tecnico: any; email_tecnico: any; movil_tecnico: any; tel_trabajo_tecnico: any; ext_tecnico: any; puesto_tecnico: any; nombre_completo_pago: any; email_pago: any; movil_pago: any; tel_trabajo_pago: any; ext_pago: any; puesto_pago: any; idestatus: any;
  }): Observable<any> {
    const URL = this.baseUrl + 'customers/create';

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(URL, data, { headers }).pipe(map((res) => res));
  }

  getClient(): Observable<any> {
    const URL = this.baseUrl + 'customers/get';
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  }
  

  searchClients(razon_social: any): Observable<any> {
    const URL = this.baseUrl + `searchClients/get?param=${razon_social}`;
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));

  }

  getClientbyId(id: any): Observable<any> {
    const URL = this.baseUrl + `customers/id?id=${id}`;
    const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Authorization', token);

    return this.http.get(URL, { headers: headers }).pipe(map((res) => res));

  }


  updateClient(data: { id: string | null; razon_social: any; rfc: any; idPais: any; idCiudad: any; idMunicipio: any; calle: any; no_ext: any; no_int: any; colonia: any; cp: any; sitio_web : any; url_map: any; observaciones: any; cp_fiscal: any; idUsoCfdi: any; idRegimenFiscal: any; nombre_completo: any; email: any; movil: any; tel_trabajo: any; ext: any; puesto: any; nombre_completo_tecnico: any; email_tecnico: any; movil_tecnico: any; tel_trabajo_tecnico: any; ext_tecnico: any; puesto_tecnico: any; nombre_completo_pago: any; email_pago: any; movil_pago: any; tel_trabajo_pago: any; ext_pago: any; puesto_pago: any;
  }): Observable<any> {
    const URL = this.baseUrl + 'customers/update';

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(URL, data, { headers }).pipe(map((res) => res));
  }

  deleteClient(data: {
    id: string | null; 
  }): Observable<any> {
    const URL = this.baseUrl + 'customers/delete';

    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post(URL, data, { headers }).pipe(map((res) => res));
  }


    //Proveedor
    createSupplier(data: {
      no_proveedor: any; razon_social: any; rfc: any; idPais: any; idCiudad: any; idMunicipio: any; calle: any; no_ext: any; no_int: any; colonia: any; cp: any;  sitio_web:any; url_map: any; observaciones: any; dias_credito: any; idBanco: any; no_cuenta: any; clabe_intenbancaria: any; nombre_completo: any; email: any; tel_movil: any; tel_trabajo: any; ext: any; puesto: any; idestatus:any;
    }): Observable<any> {
      const URL = this.baseUrl + 'suppliers/create';
  
      const headers = new HttpHeaders().set('Accept', 'application/json');
      return this.http.post(URL, data, { headers }).pipe(map((res) => res));
    }

    getSupplier(): Observable<any> {
      const URL = this.baseUrl + 'suppliers/get';
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
    }
    
  
    searchSuppliers(razon_social: any): Observable<any> {
      const URL = this.baseUrl + `searchSuppliers/get?param=${razon_social}`;
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  
    }

    getSupplierbyId(id: any): Observable<any> {
      const URL = this.baseUrl + `suppliers/id?id=${id}`;
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  
    }

    updateSupplier(data: { id: string | null; razon_social: any; rfc: any; idPais: any; idCiudad: any; idMunicipio: any; calle: any; no_ext: any; no_int: any; colonia: any; cp: any;  sitio_web:any; url_map: any; observaciones: any; dias_credito: any; idBanco: any; no_cuenta: any; clabe_intenbancaria: any; nombre_completo: any; email: any; tel_movil: any; tel_trabajo: any; ext: any; puesto: any; 
    }): Observable<any> {
      const URL = this.baseUrl + 'suppliers/update';
  
      const headers = new HttpHeaders().set('Accept', 'application/json');
      return this.http.post(URL, data, { headers }).pipe(map((res) => res));
    }

    deleteSupplier(data: {
      id: string | null; 
    }): Observable<any> {
      const URL = this.baseUrl + 'suppliers/delete';
  
      const headers = new HttpHeaders().set('Accept', 'application/json');
      return this.http.post(URL, data, { headers }).pipe(map((res) => res));
    }



    //Categories

    createCategorie(data: { name: any; id_status: any; }): Observable<any> {
      const URL = this.baseUrl + 'categories/create';
  
      const headers = new HttpHeaders().set('Accept', 'application/json');
      return this.http.post(URL, data, { headers }).pipe(map((res) => res));
    }
  
  
    getCategorie(): Observable<any> {
      const URL = this.baseUrl + 'categories/get';
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
    }

    getCatCategorie(id:any): Observable<any> {
      const URL = this.baseUrl + `categories/catid?id=${id}`;
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
    }
  
    getCategoriebyId(id: any): Observable<any> {
      const URL = this.baseUrl + `categories/id?id=${id}`;
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  
    }
  
    updateCategorie(data: {
      name: any; 
      id: string | null;
    }): Observable<any> {
      const URL = this.baseUrl + 'categories/update';
  
      const headers = new HttpHeaders().set('Accept', 'application/json');
      return this.http.post(URL, data, { headers }).pipe(map((res) => res));
    }
  
    deleteCategorie(data: {
      id: string | null;
    }): Observable<any> {
      const URL = this.baseUrl + 'categories/delete';
  
      const headers = new HttpHeaders().set('Accept', 'application/json');
      return this.http.post(URL, data, { headers }).pipe(map((res) => res));
    }

      //SubCategories

    createSubCategorie(data: { name: any; id_category: any; id_status: any; sku_indispensable: any; }): Observable<any> {
      const URL = this.baseUrl + 'subcategories/create';
  
      const headers = new HttpHeaders().set('Accept', 'application/json');
      return this.http.post(URL, data, { headers }).pipe(map((res) => res));
    }
  
  
    getSubCategorie(): Observable<any> {
      const URL = this.baseUrl + 'subcategories/get';
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
    }

    getCatSubCategorie(id:any): Observable<any> {
      const URL = this.baseUrl + `subcategories/catid?id=${id}`;
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
    }
  
    getSubCategoriebyId(id: any): Observable<any> {
      const URL = this.baseUrl + `subcategories/id?id=${id}`;
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  
    }
  
    updateSubCategorie(data: {
      name: any;  id_category: any; sku_indispensable: any;
      id: string | null;
    }): Observable<any> {
      const URL = this.baseUrl + 'subcategories/update';
  
      const headers = new HttpHeaders().set('Accept', 'application/json');
      return this.http.post(URL, data, { headers }).pipe(map((res) => res));
    }
  
    deleteSubCategorie(data: {
      id: string | null;
    }): Observable<any> {
      const URL = this.baseUrl + 'subcategories/delete';
  
      const headers = new HttpHeaders().set('Accept', 'application/json');
      return this.http.post(URL, data, { headers }).pipe(map((res) => res));
    }

    // Producto
  
    createProduct(data: { name:any; id_categoty:any; id_subcategory: any; sku: any; serial_number: any; id_brand: any; model: any; description: any; inventory: any; photo: any; id_status: any; id_unitmeasure: any; }): Observable<any> {
      const URL = this.baseUrl + 'products/create';
  
      const headers = new HttpHeaders().set('Accept', 'application/json');
      return this.http.post(URL, data, { headers }).pipe(map((res) => res));
    }

    getProducts(): Observable<any> {
      const URL = this.baseUrl + 'products/get';
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
    }

    searchName(name: any): Observable<any> {
      const URL = this.baseUrl + `searchProducts/get?param=${name}`;
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  
    }

    searchCategory(id_categoty: any): Observable<any> {
      const URL = this.baseUrl + `products/getCategory?param=${id_categoty}`;
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  
    }

    getProductsbyId(id: any): Observable<any> {
      const URL = this.baseUrl + `products/id?id=${id}`;
      const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
  
      const headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization', token);
  
      return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
  
    }

    updateProducts(data: {
      name:any; id_categoty:any; id_subcategory: any; sku: any; serial_number: any; id_brand: any; model: any; description: any; inventory: any; photo: any; id_unitmeasure: any; 
      id: string | null;
    }): Observable<any> {
      const URL = this.baseUrl + 'products/update';
  
      const headers = new HttpHeaders().set('Accept', 'application/json');
      return this.http.post(URL, data, { headers }).pipe(map((res) => res));
    }

    deleteProducts(data: {
      id: string | null;
    }): Observable<any> {
      const URL = this.baseUrl + 'products/delete';
  
      const headers = new HttpHeaders().set('Accept', 'application/json');
      return this.http.post(URL, data, { headers }).pipe(map((res) => res));
    }


       // Almacen
  
       createStore(data: { name:any; url_maps: any; description: any; id_status: any; id_user: any;  essential_section:any }): Observable<any> {
        const URL = this.baseUrl + 'stores/create';
    
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.post(URL, data, { headers }).pipe(map((res) => res));
      }

      getStores(): Observable<any> {
        const URL = this.baseUrl + 'stores/get';
        const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
    
        const headers = new HttpHeaders()
          .set('Accept', 'application/json')
          .set('Authorization', token);
    
        return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
      }

      getStoresbyId(id: any): Observable<any> {
        const URL = this.baseUrl + `stores/id?id=${id}`;
        const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
    
        const headers = new HttpHeaders()
          .set('Accept', 'application/json')
          .set('Authorization', token);
    
        return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
    
      }

      updateStores(data: {
        name:any; url_maps: any; description: any; id_user: any;  essential_section:any
        id: string | null;
      }): Observable<any> {
        const URL = this.baseUrl + 'stores/update';
    
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.post(URL, data, { headers }).pipe(map((res) => res));
      }

      deleteStores(data: {
        id: string | null;
      }): Observable<any> {
        const URL = this.baseUrl + 'stores/delete';
    
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.post(URL, data, { headers }).pipe(map((res) => res));
      }

        // Seccion
  
        createSecction(data: { name:any; id_status: any; id_store: any;  nomenclature:any }): Observable<any> {
          const URL = this.baseUrl + 'secctions/create';
      
          const headers = new HttpHeaders().set('Accept', 'application/json');
          return this.http.post(URL, data, { headers }).pipe(map((res) => res));
        }

        getStoreSecction(id:any): Observable<any> {
          const URL = this.baseUrl + `secctions/stoid?id=${id}`;
          const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
      
          const headers = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Authorization', token);
      
          return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
        }

        getSecction(): Observable<any> {
          const URL = this.baseUrl + 'secctions/get';
          const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
      
          const headers = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Authorization', token);
      
          return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
        }

        getSecctionbyId(id: any): Observable<any> {
          const URL = this.baseUrl + `secctions/id?id=${id}`;
          const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
      
          const headers = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Authorization', token);
      
          return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
      
        }
  
        updateSecction(data: {
          name:any; id_store: any;  nomenclature:any 
          id: string | null;
        }): Observable<any> {
          const URL = this.baseUrl + 'secctions/update';
      
          const headers = new HttpHeaders().set('Accept', 'application/json');
          return this.http.post(URL, data, { headers }).pipe(map((res) => res));
        }
  
        deleteSecction(data: {
          id: string | null;
        }): Observable<any> {
          const URL = this.baseUrl + 'secctions/delete';
      
          const headers = new HttpHeaders().set('Accept', 'application/json');
          return this.http.post(URL, data, { headers }).pipe(map((res) => res));
        }


        searchStores(name: any): Observable<any> {
          const URL = this.baseUrl + `searchStores/get?param=${name}`;
          const token = 'Bearer ' + JSON.parse(this._srvStorage.get('token'));
      
          const headers = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Authorization', token);
      
          return this.http.get(URL, { headers: headers }).pipe(map((res) => res));
      
        }

    


}
