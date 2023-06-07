import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-inventory',
  templateUrl: './home-inventory.component.html',
  styleUrls: ['./home-inventory.component.css']
})
export class HomeInventoryComponent {

  constructor(
    private router: Router,
  ) 
  { }


  IncomeStore() {
    this.router.navigateByUrl('/dashboard/income-store')
  }


}
