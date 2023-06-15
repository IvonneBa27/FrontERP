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
          titulo: 'Empleados',
          url: 'list',
          roles: [{ name: 'Administrador' }],
        },
        {
          titulo: 'Clientes',
          url: 'list-client',
          roles: [{ name: 'Administrador' }],
        },
        {
          titulo: 'Proveedores',
          url: 'list-suppliers',
          roles: [{ name: 'Administrador' }],
        },
        {
          titulo: 'Productos',
          url: 'list-products',
          roles: [{ name: 'Administrador' }],
        },
        {
          titulo: 'Tipo de cambio',
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
          titulo: 'Inventario',
          url: 'home-inventory',
          roles: [{ name: 'Administrador' }],
        },
        {
          titulo: 'Almacenes',
          url: 'list-store',
          roles: [{ name: 'Administrador' }],
        },
        {
          titulo: 'Requisiciones',
          url: 'listado-grupos',
          roles: [{ name: 'Administrador' }],
        },
        {
          titulo: 'Ordenes de compras',
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
      titulo: 'CONFIGURACIÓN',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Usuarios',
          url: 'users-list',
          roles: [{ name: 'Administrador' }],
        },
        {
          titulo: 'Categoria',
          url: 'list-categories',
          roles: [{ name: 'Administrador' }],
        },
      ],
    },
  ];
  constructor() {}
}
