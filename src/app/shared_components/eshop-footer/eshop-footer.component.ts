import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EshopContactUsService } from './../../services/eshop-contact-us.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';  

@Component({
  selector: 'app-eshop-footer',
  templateUrl: './eshop-footer.component.html',
  styleUrls: ['./eshop-footer.component.css']
})
export class EshopFooterComponent implements OnInit {

  form_group= new FormGroup({
    email:new FormControl(null,[Validators.minLength(13),Validators.maxLength(40),Validators.email])
  })
  constructor(private contactUsService:EshopContactUsService) { }

  ngOnInit(): void {
  }
  handlerNewlettersForm()
  {
    const data= this.form_group.value
    this.contactUsService.createNewNewletters(data).subscribe(val=>{
      Swal.fire({  
        position: "center",  
        icon: 'success',  
        title: 'ADD YOUR EMIAL TO NEWLETTERS',  
        showConfirmButton: true,  
        timer: 5000
      })  
        
  
       this.form_group.reset()
    },er=>
    {
      if(er.error.email == "newsletters with this email already exists.")
      {
        Swal.fire({  
          position: "center",  
          icon: 'error',  
          title: 'YOUR EMAIL IS EXIST',  
          showConfirmButton: true,  
          timer: 5000
        })  
      }
      else{
        Swal.fire({  
          position: "center",  
          icon: 'error',  
          title: 'EXTERNAL ERROR PLEASE TRY AGAIN',  
          showConfirmButton: true,  
          timer: 5000
        })  

      }
    })
    
    
  }

}
