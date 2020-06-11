import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bidder-list-element',
  templateUrl: './bidder-list-element.component.html'
})
export class BidderListElementComponent implements OnInit {

  @Input() bidder: any;
  public userPhotoUrl: String = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-pic';
  
  constructor() { }

  ngOnInit(): void {
  }

}
