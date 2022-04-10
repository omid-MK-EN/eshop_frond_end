import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../services/category.service';
import { ICategory } from './../../interfaces/category.inteface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  all_categories:ICategory[]=[]
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void 
  {


    this.categoryService.getActiveCategories().subscribe(categories=>{
      
      this.all_categories= categories
      console.log(this.all_categories)
      console.log(Array.isArray(this.all_categories[0].products[0].id))
      
    })


  }

}
