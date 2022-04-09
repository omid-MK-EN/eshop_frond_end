import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eshop-register',
  templateUrl: './eshop-register.component.html',
  styleUrls: ['./eshop-register.component.css']
})
export class EshopRegisterComponent implements OnInit {

  is_match= true

  constructor(private router:Router) { }

  register_form!:FormGroup;
  ngOnInit(): void {

    this.register_form= new FormGroup({
      username:new FormControl(null,[Validators.required, Validators.maxLength(10)]),
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
      console.log("match")
    }
    
  }

}
