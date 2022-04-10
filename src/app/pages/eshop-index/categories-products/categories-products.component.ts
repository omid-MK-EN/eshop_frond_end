import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category.inteface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-products',
  templateUrl: './categories-products.component.html',
  styleUrls: ['./categories-products.component.css']
})
export class CategoriesProductsComponent implements OnInit {
  all_categories:ICategory[]=[]
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getActiveCategories().subscribe(categories=>{
      
      this.all_categories= categories
      // console.log(this.all_categories)
      console.log(Array.isArray(this.all_categories[0].products[0].id))
      
    })
  }

}
