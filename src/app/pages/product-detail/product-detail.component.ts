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
  group_images!:any[];
  constructor(private route:ActivatedRoute,private ProductService:ProductService,private router:Router ) { 

  }

  ngOnInit(): void {
    let id= Number(this.route.snapshot.params['id'])

    this.route.params.subscribe(params=>{
      let id= Number(params['id'])
      this.ProductService.getActiveProduct(id).subscribe(product=>{
        this.product_details=product
        this.group_images = this.sliceIntoChunks(this.product_details.product_related,4)
        // console.log("////")
        console.log(this.product_details)
        // console.log("==================================")
      },err=>{
        this.router.navigateByUrl("/notfound")
      })
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
  


