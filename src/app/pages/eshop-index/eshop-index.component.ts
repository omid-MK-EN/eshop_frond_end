import { Component, OnInit } from '@angular/core';
import { IProperty } from 'src/app/interfaces/product.interface';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-eshop-index',
  templateUrl: './eshop-index.component.html',
  styleUrls: ['./eshop-index.component.css']
})
export class EshopIndexComponent implements OnInit {

  all_products:IProperty[]= []
  popular_products:any[]=[]
  sale_products:any[]=[]
  whole_products:any[]=[]
  slider_products:IProperty[]= []
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getActiveProdutHomeComponent().subscribe(products=>{
      this.all_products= products

      this.sale_products = this.all_products.filter(elem=>{
        return elem.is_sale_product
      })

      this.whole_products= this.all_products.filter(elem=>{
        return elem.is_whole_product
      })

      this.popular_products= this.all_products.filter(elem=>{
        return elem.is_popular_product
      })
    

      this.slider_products= this.all_products.filter(elem=>{
        return elem.is_slider
      })

      this.popular_products=this.sliceIntoChunks(this.popular_products,4)
      this.sale_products= this.sliceIntoChunks(this.sale_products,4)
      this.whole_products = this.sliceIntoChunks(this.whole_products,4)
      // console.log(this.popular_products)
     
      // console.log(this.popular_products)
      // console.log(this.sale_products)
      // console.log(this.whole_products)
      // this.popular_products=this.sliceIntoChunks(this.popular_products,4)
      // console.log(this.popular_products)
      // console.log(this.slider_products)
      
     })
  }

  sliceIntoChunks(arr:any[], chunkSize:number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

}
