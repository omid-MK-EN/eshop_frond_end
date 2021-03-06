import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContactForm } from './../interfaces/contact_us.form.interface';
import { Observable } from 'rxjs';
import { ISocialMedia } from '../interfaces/social_medias.interface';
import { INewletters } from './../interfaces/newletters.interface';

@Injectable({
  providedIn: 'root'
})
export class EshopContactUsService {

  constructor(private http:HttpClient) { }

  createNewContactUsForm(contact_form:IContactForm)
  {
    const headers = {'Content-Type':'application/json'}  
    const body=JSON.stringify(contact_form);
    // console.log("------------------")
    // console.log(body)
    return this.http.post("/contact_us/", body,{'headers':headers})
  }

  // getSocialMedias(): Observable<ISocialMedia[]>
  // {
  //   return this.http.get<ISocialMedia[]>('/eshop_social_media');
  // }
  getSocialMedias():Observable<ISocialMedia[]>
  {
    return this.http.get<ISocialMedia[]>('/eshop_social_media');
  }

  createNewNewletters(newletters_form:INewletters)
  {
    const headers = {'Content-Type':'application/json'}  
    const body=JSON.stringify(newletters_form);
    return this.http.post("/newletters/", body,{'headers':headers})
  
  }

  
}
