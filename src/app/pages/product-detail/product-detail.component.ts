import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IProperty } from './../../interfaces/product.interface';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product_details!:IProperty;
  constructor(private route:ActivatedRoute,private ProductService:ProductService,private router:Router ) { 

  }

  ngOnInit(): void {
    let id= Number(this.route.snapshot.params['id'])
    this.ProductService.getActiveProduct(id).subscribe(product=>{
      this.product_details=product
      console.log("////")
      console.log(this.product_details)
      console.log("==================================")
    },err=>{
      this.router.navigateByUrl("/notfound")
    })
  }

}
