import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cat_modues } from 'src/app/models/cat_modues.model';


import { ActivatedRoute } from '@angular/router';
import { UserservicesService } from 'src/app/auth/service/userservices.service';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.css']
})
export class ListModuleComponent implements OnInit {
  cat_modues: cat_modues[]=[];
  p: number = 1;


  constructor(
    private router: Router,
    private _servicesuser: UserservicesService,
  ) { }

  ngOnInit(): void {
    this._servicesuser.getModule().subscribe((res) => {
      this.cat_modues = res.data;
      
   
    });
  }

  createModule(){
    this.router.navigateByUrl('/dashboard/create-module')
  }

}
