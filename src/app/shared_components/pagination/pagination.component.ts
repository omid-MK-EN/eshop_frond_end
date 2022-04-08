import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from './../../interfaces/product.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() all_products:IProperty[]= []
  constructor() { }

  ngOnInit(): void {
  }
  handlerPaginate(num:number)
  {
    

  }

}
