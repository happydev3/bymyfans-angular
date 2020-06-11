import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-list-element',
  templateUrl: './block-list-element.component.html'
})
export class BlockListElementComponent implements OnInit {

  @Input() blockedUser: any;
  public userPhotoUrl: string;
  public userWallUrl: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.blockedUser);
    this.userPhotoUrl = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-pic/' + this.blockedUser.get_blocked_user.profile_pic;
    this.userWallUrl = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-wall-pic/' + this.blockedUser.get_blocked_user.wall_pic;
  }

}
