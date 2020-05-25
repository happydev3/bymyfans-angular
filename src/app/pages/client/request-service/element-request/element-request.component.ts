import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from 'src/app/model/requestServices';

@Component({
  selector: 'app-element-request',
  templateUrl: './element-request.component.html'
})
export class ElementRequestComponent implements OnInit {

  @Input() public request: RequestService;

  constructor() { }

  ngOnInit(): void {
  }

}
