import { Component, OnInit, Input } from '@angular/core';
import { TopView } from 'src/app/model/topView';

@Component({
  selector: 'app-top-view',
  templateUrl: './top-view.component.html'
})
export class TopViewComponent implements OnInit {

  public userPhotoUrl: String = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-pic';

  @Input() topViews: Array<TopView>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.topViews);
  }

}
