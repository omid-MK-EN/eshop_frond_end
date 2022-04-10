import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable,tap } from 'rxjs';
import { IProduct, IProperty } from './../interfaces/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  all_products:IProperty[]= []
  page_size:number[]=[]
  next:string=""
  prev:string=""
  all_product_url:string="/products";
  
  constructor(private http:HttpClient) { }

  getActiveAllProduct(brand_id?:number):Observable<IProduct>
  {
    
    
    if(brand_id)
    {
     this.all_product_url =`/products/?brand=${brand_id}` 
    }
    console.log(brand_id)
    console.log(this.all_product_url)
    
     return this.http.get<IProduct>(this.all_product_url).pipe(
       tap(data=>{
         this.all_products=data.results
         this.next= data.next
         this.prev=data.previous
         if(brand_id)
         {
          //  console.log("shoooood")
           this.page_size= []
         }
         let pages= Math.floor(data.count / 3)
         this.page_size= []
         for(let index=1;index <= pages;index++)
         {
          this.page_size.push(index)
         }
        //  console.log("-------------------------page")
        //  console.log(this.page_size)
       })
     )
   
    
    
  }

  getActiveProduct(id:number):Observable<IProperty>
  {
    return this.http.get<IProperty>(`/products/${id}`).pipe(
      // tap(i=>console.log(i)),
      
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
