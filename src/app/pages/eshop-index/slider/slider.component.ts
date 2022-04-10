import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IProperty } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }
  @Input() slider_products:IProperty[]=[]
  ngOnInit(): void {
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("emn sliderrrrrr")
    // console.log(this.slider_products)
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }

}
