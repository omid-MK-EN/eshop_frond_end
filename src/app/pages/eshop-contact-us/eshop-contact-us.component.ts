import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IEshopAboutUs } from 'src/app/interfaces/eshop.about_us.interface';
import { EshopAboutUsService } from 'src/app/services/eshop-about-us.service';
import { EshopContactUsService } from 'src/app/services/eshop-contact-us.service';
import { IContactForm } from './../../interfaces/contact_us.form.interface';
import { ISocialMedia } from './../../interfaces/social_medias.interface';
import Swal from 'sweetalert2/dist/sweetalert2.js';  
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-eshop-contact-us',
  templateUrl: './eshop-contact-us.component.html',
  styleUrls: ['./eshop-contact-us.component.css']
})
export class EshopContactUsComponent implements OnInit {

  social_medias:ISocialMedia[]=[]
  info_about_us:any;
  
  form_group:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required, Validators.maxLength(10)]),
    title:new FormControl(null,[Validators.required, Validators.maxLength(15)]),
    email:new FormControl(null,[Validators.required, Validators.minLength(13),Validators.maxLength(40),Validators.email]),
    descriptions:new FormControl(null,[Validators.required, Validators.minLength(10)]),
  });
  constructor(private contactFormService:EshopContactUsService,private infoService:EshopAboutUsService, private router: Router) { }
  
  ngOnInit(): void {

    this.infoService.getEshopAboutUs().subscribe(values=>
    {
      if(values.length > 1)
    {
      this.info_about_us= values[values.length-1]
    }
    this.info_about_us=values[0]
    })
    // this.contactFormService.getSocialMedias().subscribe(socialMedias=>{
    //   alert("shood")
    //  console.log(socialMedias)
    //  this.social_medias= socialMedias
    // })
this.contactFormService.getSocialMedias().subscribe(socialMedias=>{
  console.log(socialMedias)
  this.social_medias= socialMedias
})
   
  }

  handlerContactForm()
  {
  
    let data= this.form_group.value
    this.contactFormService.createNewContactUsForm(data).subscribe(val=>{
    
    Swal.fire({  
      position: "center",  
      icon: 'success',  
      title: 'Your Comment Is Send',  
      showConfirmButton: false,  
      timer: 2000
    })  
      })

     this.form_group.reset()
    
  }

}
