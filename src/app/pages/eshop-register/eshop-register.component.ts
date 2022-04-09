import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EshopAccountService } from 'src/app/services/eshop-account.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 

@Component({
  selector: 'app-eshop-register',
  templateUrl: './eshop-register.component.html',
  styleUrls: ['./eshop-register.component.css']
})
export class EshopRegisterComponent implements OnInit {

  is_match= true

  constructor(private router:Router,private accountService:EshopAccountService) { }

  register_form!:FormGroup;
  ngOnInit(): void {

    this.register_form= new FormGroup({
      username:new FormControl(null,[Validators.required, Validators.maxLength(10),Validators.minLength(4)]),
      email:new FormControl(null,[Validators.required, Validators.minLength(13),Validators.maxLength(40),Validators.email]),
      pass:new FormControl(null,[Validators.required, Validators.minLength(8),Validators.maxLength(40)]),
      pass_conf:new FormControl(null,[Validators.required, Validators.minLength(8),Validators.maxLength(40)]),
    })
  }

  handlerRegisterForm()
  {
    if(this.register_form.value.pass != this.register_form.value.pass_conf)
    {
      this.is_match= false
      this.router.navigate(['/register'])

    }
    else
    {
      let data= {
        username:this.register_form.value.username,
        email:this.register_form.value.email,
        password1:this.register_form.value.pass,
        password2:this.register_form.value.pass_conf
      }
      this.accountService.registerNewUser(data).subscribe(()=>{

        Swal.fire({  
          position: "center",  
          icon: 'success',  
          title: 'USER IS CREATED',  
          showConfirmButton: true,  
          timer: 5000
        })  
        this.router.navigate(['/login'])

      },er=>{
        console.log(er)
        if(er.error.username)
        {
          Swal.fire({  
            position: "center",  
            icon: 'error',  
            title: `${er.error.username}`,  
            showConfirmButton: true,  
            timer: 5000
          })  
        }
        
        else if(er.error.email)
        {
          Swal.fire({  
            position: "center",  
            icon: 'error',  
            title: `${er.error.email}`,  
            showConfirmButton: true,  
            timer: 5000
          })  
        }
        
        else if(er.error.password1)
        {
          Swal.fire({  
            position: "center",  
            icon: 'error',  
            title: `${er.error.password1}`,  
            showConfirmButton: true,  
            timer: 5000
          })  
        }
        else if(er.error.password2)
        {
          Swal.fire({  
            position: "center",  
            icon: 'error',  
            title: `${er.error.password2}`,  
            showConfirmButton: true,  
            timer: 5000
          })  

        }
        else if(er.error.non_field_errors) {
          Swal.fire({  
            position: "center",  
            icon: 'error',  
            title: `${er.error.non_field_errors[0]}`,  
            showConfirmButton: true,  
            timer: 5000
          }) 
        }
        else{
          Swal.fire({  
            position: "center",  
            icon: 'error',  
            title: "EXTERNAL ERROR PLEASE TRY AGAIN",  
            showConfirmButton: true,  
            timer: 5000
          }) 
        }

      })
    }
     
  }
    
}


