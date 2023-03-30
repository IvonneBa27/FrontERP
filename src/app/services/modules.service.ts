import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModulesService {
  menu: any[] = [
    {
      titulo: 'Usuarios',
      id: 1,
    },
    {
      titulo: 'Configuracion',
      id: 2,
    },
  ];
  constructor() {}
}
