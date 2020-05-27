import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html'
})
export class SalesOrderComponent implements OnInit {

  @Input() sales_order: any;

  constructor() { }

  ngOnInit(): void {
  }

}
