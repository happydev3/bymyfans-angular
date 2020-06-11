import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-top-view',
  templateUrl: './top-view.component.html'
})
export class TopViewComponent implements OnInit {

  public userPhotoUrl: String = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-pic';

  @Input() topViews: Array<User>;

  constructor() { }

  ngOnInit(): void {
  }

}
