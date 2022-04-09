import { Injectable } from '@angular/core';
import { ILogin, IRegister, IUser } from '../interfaces/account.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EshopAccountService {

  constructor(private http:HttpClient) { }

  registerNewUser(register_form:IRegister)
  {
    const headers = {'Content-Type':'application/json'}  
    const body=JSON.stringify(register_form);
    // console.log("------------------")
    // console.log(body)
    return this.http.post("/rest-auth/register/", body,{'headers':headers})
  }

  getAllUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>("/user")
  }

  loginUser(login_form:ILogin)
  {
    const headers = {'Content-Type':'application/json'}  
    const body=JSON.stringify(login_form);
    // console.log("------------------")
    // console.log(body)
    return this.http.post("/rest-auth/login/", body,{'headers':headers})
  }



}
