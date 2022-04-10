import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IProperty } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-bestsellers-products',
  templateUrl: './bestsellers-products.component.html',
  styleUrls: ['./bestsellers-products.component.css']
})
export class BestsellersProductsComponent implements OnInit {
  @Input() popular_products:any[]=[]
  constructor() { }

  ngOnInit(): void {
  }

ngOnChanges(changes: SimpleChanges): void {
//  console.log("[[[[[[[[[[[[[[[[")
//  console.log(this.popular_products)
  
}

}
