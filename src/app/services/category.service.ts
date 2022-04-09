import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category.inteface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  // getActiveBrands():Observable<ICategory[]>
  // {
  //   return this.http.get<ICategory[]>('/product_categories');
  // }
}
