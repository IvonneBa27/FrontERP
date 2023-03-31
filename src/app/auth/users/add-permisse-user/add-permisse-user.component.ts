import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from 'src/app/models/module.model';
import { Users } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { ModulesService } from 'src/app/services/modules.service';

@Component({
  selector: 'app-add-permisse-user',
  templateUrl: './add-permisse-user.component.html',
  styleUrls: ['./add-permisse-user.component.css'],
})
export class AddPermisseUserComponent implements OnInit {
  id_usuario: number;
  modules: Module[] = [];
  modulesLocal;
  user: Users = new Users();
  constructor(
    private activatedRoute: ActivatedRoute,
    private _srvAuth: AuthService,
    public _srvModules: ModulesService,
    private router: Router
  ) {
    this.id_usuario = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    
    this._srvAuth.getUserById(this.id_usuario).subscribe( res => {
      this.user = res.data;
    });

    this.getModules(this.id_usuario);
    this.modulesLocal = _srvModules.menu.sort();
  }

  ngOnInit(): void {}

  getModules(id_usuario: number) {
    this._srvAuth.getModuleUserById(id_usuario).subscribe((res) => {
      this.modules = res.data;
      const m = this.modulesLocal;
      for (let module of this.modules) {
        const result = m.findIndex((x) => x.id == module.id_modulo);
        if (result >= 0) {
          m[result].edit = module.edit;
          m[result].create = module.create;
          m[result].delete = module.delete;
          m[result].read = module.read;
        }
      }
    });
  }

  savePermisse() {
    const data = [];

    for (let m of this.modulesLocal) {
      data.push({
        id_usuario: this.id_usuario,
        id_modulo: m.id,
        create: m.create,
        edit: m.edit,
        delete: m.delete,
        read: m.read,
      });
    }

    this._srvAuth.addPermisse(data).subscribe((res) => {
      console.log(res);
    });
  }

  ListTypeModule() {
    this.router.navigateByUrl('/dashboard/users-list');
  }
}
