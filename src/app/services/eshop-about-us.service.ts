import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEshopAboutUs } from './../interfaces/eshop.about_us.interface';
import { pipe,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EshopAboutUsService {

  constructor(private http:HttpClient) { }

  // getEshopAboutUs(): Observable<IEshopAboutUs[]>
  //  {
  //   return this.http.get<IEshopAboutUs[]>('/about-us').pipe(
  //     tap(i=>console.log(i))
  //   );
  //  }

  getEshopAboutUs():Observable<IEshopAboutUs[]>
  {
    return this.http.get<IEshopAboutUs[]>("/about_us").pipe(
      tap(i=>console.log(i))
    )
  }
}
