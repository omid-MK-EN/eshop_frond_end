import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() product={title:"",price:0,image:"",id:0} ;
  constructor() { }

  ngOnInit(): void {
  }

}
