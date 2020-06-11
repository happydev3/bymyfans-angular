import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-top-subscribe',
  templateUrl: './top-subscribe.component.html'
})
export class TopSubscribeComponent implements OnInit {

  @Input() topSubscribers: Array<User>;
  public userPhotoUrl: String = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-pic';

  constructor() { }

  ngOnInit(): void {
  }

}
