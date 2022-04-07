import { Component, OnInit } from '@angular/core';
import { EshopAboutUsService } from './../../services/eshop-about-us.service';
import { IEshopAboutUs } from './../../interfaces/eshop.about_us.interface';

@Component({
  selector: 'app-eshop-about-us',
  templateUrl: './eshop-about-us.component.html',
  styleUrls: ['./eshop-about-us.component.css']
})
export class EshopAboutUsComponent implements OnInit {

  constructor(private aboutUsService:EshopAboutUsService) { }
  about_us_info:any;
  ngOnInit(): void {
    this.aboutUsService.getEshopAboutUs().subscribe(value=>{
     console.log(value)
      if(value.length > 1)
      {
        this.about_us_info= value[value.length-1]
      }
      this.about_us_info=value[0]
    })
   
  }

}
