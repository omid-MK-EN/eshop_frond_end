import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { IBrand } from 'src/app/interfaces/brand.interface';
import { BrandService } from './../../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands_infoes:IBrand[]=[]
  @Output() sendBrand = new EventEmitter<number>();
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.brandService.getActiveBrands().subscribe(brands=>{
      this.brands_infoes= brands
      // console.log(this.brands_infoes)
    })
  }

  sendBrandToAllProductComponent(brand_id:number)
  {
    this.sendBrand.emit(brand_id)
  }

}
