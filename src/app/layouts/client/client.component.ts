import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription, Subject } from "rxjs";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor() { }

  public menuItems: any = require('./menuItem.json');
  ngOnInit(): void {
    console.log(this.menuItems);
  }
  subMenu(id) {
    var subMenu = document.getElementById('dropdown-menu' + id);
    if(subMenu.style.display == 'none') subMenu.style.display = 'block';
    else if(subMenu.style.display == 'block') subMenu.style.display = 'none';
  }

}