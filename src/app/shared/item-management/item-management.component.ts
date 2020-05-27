import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-management',
  templateUrl: './item-management.component.html'
})
export class ItemManagementComponent implements OnInit {

  @Input() item: any;
  public productPhotoUrl: String;

  constructor() { }

  ngOnInit(): void {
    this.productPhotoUrl = 'https://bvmwebsolutions.com/bemyfans/public/uploads/products/' + this.item.image; 
  }
}
