import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EshopAccountService } from 'src/app/services/eshop-account.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 

@Component({
  selector: 'app-eshop-login',
  templateUrl: './eshop-login.component.html',
  styleUrls: ['./eshop-login.component.css']
})
export class EshopLoginComponent implements OnInit {

  login_form!:FormGroup;
  constructor(private accountService:EshopAccountService,private router:Router) { }

  ngOnInit(): void {
    this.login_form= new FormGroup({
      username:new FormControl(null,[Validators.required, Validators.maxLength(10),Validators.minLength(4)]),
      password:new FormControl(null,[Validators.required, Validators.minLength(8),Validators.maxLength(40)]),
    })
  }

  handlerLoginForm()
  {
    console.log(this.login_form)
    let data= this.login_form.value
    this.accountService.loginUser(data).subscribe(result=>{
      console.log(result)
    },er=>{

      console.log(er)
      if(er.error.non_field_errors)
      {
        Swal.fire({  
          position: "center",  
          icon: 'error',  
          title: `${er.error.non_field_errors[0]}`,  
          showConfirmButton: true,  
          timer: 5000
        }) 
        this.router.navigate(['/login']) 
      }
    })
  }

}
