import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-retail-sales',
  templateUrl: './retail-sales.component.html',
  styleUrls: ['./retail-sales.component.css']
})
export class RetailSalesComponent implements OnInit {
  @Input() sale_products:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
