import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'INICIO',
      icon: 'mdi mdi-view-dashboard',
      submenu: [
        {
          titulo: 'Dashboard',
          url: 'listado-grupos',
          roles: [{ name: 'Administrador' }],
        },
     
      ],
    },
    {
      titulo: 'CATÁLOGOS',
      icon: 'mdi mdi-image-filter',
      submenu: [
        {
          titulo: 'Clientes',
          url: 'listado-grupos',
          roles: [{ name: 'Administrador' }],
        },
        {
          titulo: 'Proveedores',
          url: 'listado-grupos',
          roles: [{ name: 'Administrador' }],
        },
        {
          titulo: 'Productos',
          url: 'listado-grupos',
          roles: [{ name: 'Administrador' }],
        },
      ],
    },
    {
      titulo: 'MÓDULOS',
      icon: 'mdi mdi-view-module',
      submenu: [
        {
          titulo: 'Almacen',
          url: 'listado-grupos',
          roles: [{ name: 'Administrador' }],
        },
        {
          titulo: 'Inventario',
          url: 'listado-grupos',
          roles: [{ name: 'Administrador' }],
        },
      ],
    },
    {
      titulo: 'FINANZAS',
      icon: 'mdi mdi-burst-mode',
      submenu: [
        {
          titulo: 'Ingreso/Egreso',
          url: 'listado-grupos',
          roles: [{ name: 'Administrador' }],
        },
      ],
    },
    {
      titulo: 'ADMIISTRACIÓN',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Configuración',
          url: 'listado-grupos',
          roles: [{ name: 'Administrador' }],
        },
      ],
    },
  ];
  constructor() {}
}
