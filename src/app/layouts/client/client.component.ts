import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Observable, of, Subscription, Subject } from "rxjs";
import { AuthService } from 'src/app/services/auth.service';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public menuItems: any = require('./menuItem.json');
  public toggleMenu;
  public showMenu: boolean = false;
  public currentUrl: string;
  public isActive: boolean;

  constructor(
    public authService: AuthService,
    @Inject(DOCUMENT) private document: Document,
    private router : Router,
    public activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }
  
  subMenu(id) {
    var subMenu = document.getElementById('dropdown-menu' + id);
    if(subMenu.style.display == 'none') subMenu.style.display = 'block';
    else if(subMenu.style.display == 'block') subMenu.style.display = 'none';
  }
  logout() {
    return this.authService.logout();
  }
  toggleMenuOpen() {
    if(this.showMenu == false) {
      this.showMenu = true;
    } else if(this.showMenu == true) {
      this.showMenu = false;
    }
  }
}
