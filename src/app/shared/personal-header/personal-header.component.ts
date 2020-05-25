import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-header',
  templateUrl: './personal-header.component.html'
})
export class PersonalHeaderComponent implements OnInit {

  public personalHerderItems: any = require('./personal-header.json');
  public currentUrl: string;

  constructor(
    private router : Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }

}
