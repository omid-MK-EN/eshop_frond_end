import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct, IProperty } from './../../interfaces/product.interface';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  all_products:IProperty[]= []
  pages:number=0;
  next:string=""
  prev:string=""
  constructor(private productService:ProductService) { }

  ngOnInit(): void
  {
    this.productService.getActiveAllProduct()
    .subscribe(products=>
    {
     console.log(products)
     this.pages=products.results.length
     console
     this.next=products.next;
     this.prev= this.prev
     this.all_products=products.results
    })

  }

}
