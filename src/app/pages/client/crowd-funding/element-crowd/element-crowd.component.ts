import { Component, OnInit, Input } from '@angular/core';
import { Funds } from 'src/app/model/funds'

@Component({
  selector: 'app-element-crowd',
  templateUrl: './element-crowd.component.html'
})
export class ElementCrowdComponent implements OnInit {

  @Input() public fund: Funds;

  constructor() { }

  ngOnInit(): void {
  }
}
