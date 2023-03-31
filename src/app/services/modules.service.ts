import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModulesService {
  menu: any[] = [
   
	{
		"name" : "Almacen",
		"id" : 2,
     read: false,
      edit: false,
      delete: false,
      create: false,
	},
	{
		"name" : "Clientes",
		"id" : 6,
     read: false,
      edit: false,
      delete: false,
      create: false,
	},
	{
		"name" : "Empleados",
		"id" : 5,
     read: false,
      edit: false,
      delete: false,
      create: false,
	},
	{
		"name" : "Inventeario",
		"id" : 1,
     read: false,
      edit: false,
      delete: false,
      create: false,
	},
	{
		"name" : "Ordenes de compra",
		"id" : 4,
     read: false,
      edit: false,
      delete: false,
      create: false,
	},
	{
		"name" : "Productos",
		"id" : 8,
     read: false,
      edit: false,
      delete: false,
      create: false,
	},
	{
		"name" : "Proveedores",
		"id" : 7,
     read: false,
      edit: false,
      delete: false,
      create: false,
	},
	{
		"name" : "Requisiciones",
		"id" : 3,
     read: false,
      edit: false,
      delete: false,
      create: false,
	},
	{
		"name" : "Tipo de cambio",
		"id" : 9,
     read: false,
      edit: false,
      delete: false,
      create: false,
	},
	{
		"name" : "Usuarios",
		"id" : 10,
     read: false,
      edit: false,
      delete: false,
      create: false,
	}
];
  constructor() {}
}
