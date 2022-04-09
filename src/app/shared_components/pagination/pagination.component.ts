import { Component, Output, OnInit,EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProperty } from './../../interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output() sendAllProducts = new EventEmitter<IProperty[]>();
  constructor(private productService:ProductService,private router:Router) { }

  all_products:IProperty[]= []
  page_size:number[]=[]
  next:string=""
  prev:string=""
  // current_page:number;

  ngOnInit(): void {
    this.productService.getActiveAllProduct().subscribe(i=>{
      this.all_products= this.productService.all_products
      this.page_size= this.productService.page_size
      this.next = this.productService.next
      this.prev= this.productService.prev
      this.sendAllProducts.emit(this.all_products);
     //  console.log(this.all_products)
     //  console.log(this.all_products)
     })
  }
  handlerPaginate(num:number)
  {
    let url:string= `/products/?limit=3&offset=${num*3}`
    
    this.productService.getChangePageByNextOrPrev(url).subscribe(value=>{
      this.all_products= this.productService.all_products
      this.next = this.productService.next
      this.prev = this.productService.prev
      this.sendAllProducts.emit(this.all_products);
 
     })

  }
  handlerNextPage(url:string)
  {
    
     this.productService.getChangePageByNextOrPrev(url.slice(21)).subscribe(value=>{
     this.all_products= this.productService.all_products
     this.next = this.productService.next
     this.prev = this.productService.prev
     this.sendAllProducts.emit(this.all_products);

    })
  }

  handlerPrevPage(url:string)
  {
    this.productService.getChangePageByNextOrPrev(url.slice(21)).subscribe(value=>{
     
      this.all_products= this.productService.all_products
      this.next = this.productService.next
      this.prev = this.productService.prev
      this.sendAllProducts.emit(this.all_products);
 
     })

  }

}
