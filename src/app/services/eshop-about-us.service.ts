import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEshopAboutUs } from './../interfaces/eshop.about_us.interface';

@Injectable({
  providedIn: 'root'
})
export class EshopAboutUsService {

  constructor(private http:HttpClient) { }

  getEshopAboutUs(): Observable<IEshopAboutUs[]> {
    return this.http.get<IEshopAboutUs[]>('/about_us');
}

}
