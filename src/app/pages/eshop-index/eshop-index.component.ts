import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-eshop-index',
  templateUrl: './eshop-index.component.html',
  styleUrls: ['./eshop-index.component.css']
})
export class EshopIndexComponent implements OnInit {

  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
    // this.ProductService.getActiveAllProduct().subscribe(products=>
    // {
    //   console.log(products)
    // })
  }

}
