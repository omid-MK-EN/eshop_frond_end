import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct, IProperty, IData } from './../../interfaces/product.interface';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  all_products:IProperty[]= []
  brand_id!:number;

  constructor(private productService:ProductService) { 
   
  }

  ngOnInit(): void
  {
    // this.productService.getActiveAllProduct().subscribe(i=>{
    //  this.all_products= this.productService.all_products
    //  this.page_size= this.productService.page_size
    //  this.next = this.productService.next
    //  this.prev= this.productService.prev
    // //  console.log(this.all_products)
    // //  console.log(this.all_products)
    // })

  }
  refreshAllProduct(all_products: IProperty[]) {
    this.all_products= all_products
  }
  filterByBrand(brand_id:number)
  {
    // console.log("filter brand is:============")
    // console.log(brand_id)
    this.brand_id= brand_id
  }
}
