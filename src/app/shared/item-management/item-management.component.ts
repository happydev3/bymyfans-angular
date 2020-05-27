import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-management',
  templateUrl: './item-management.component.html'
})
export class ItemManagementComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
