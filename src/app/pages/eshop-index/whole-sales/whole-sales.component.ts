import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-whole-sales',
  templateUrl: './whole-sales.component.html',
  styleUrls: ['./whole-sales.component.css']
})
export class WholeSalesComponent implements OnInit {

  @Input() whole_products:any[]=[] 
  constructor() { }

  ngOnInit(): void {
  }

}
