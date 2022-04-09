import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,tap } from 'rxjs';
import { IProduct, IProperty } from './../interfaces/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  all_products:IProperty[]= []
  page_size:number[]=[]
  next:string=""
  prev:string=""
  
  constructor(private http:HttpClient) { }

  getActiveAllProduct():Observable<IProduct>
  {
    
    
     return this.http.get<IProduct>("/products").pipe(
       tap(data=>{
         this.all_products=data.results
         this.next= data.next
         this.prev=data.previous
         let pages= Math.floor(data.count / 3)
         for(let index=1;index <= pages;index++)
         {
          this.page_size.push(index)
         }
       })
     )
   
    
    
  }
  
  getChangePageByNextOrPrev(url:string):Observable<IProduct>
  {
   
    return this.http.get<IProduct>(url).pipe(
      tap(data=>{
        this.all_products=data.results
         this.next= data.next
         this.prev=data.previous
      })
    )
  }




}
