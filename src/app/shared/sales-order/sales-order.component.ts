import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html'
})
export class SalesOrderComponent implements OnInit {

  @Input() sales_order: any;
  public productPhotoUrl: String;

  constructor() { }

  ngOnInit(): void {
    this.productPhotoUrl = 'https://bvmwebsolutions.com/bemyfans/public/uploads/products/' + this.sales_order.image; 
  }

}
