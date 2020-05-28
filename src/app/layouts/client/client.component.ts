import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Observable, of, Subscription, Subject } from "rxjs";
import { AuthService } from 'src/app/services/auth.service';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

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
  public languages: any;
  public selectedLanguage: any = {
    id   : 'ch',
    title: 'Chinese',
    flag : 'ch'
  };

  constructor(
    public authService: AuthService,
    @Inject(DOCUMENT) private document: Document,
    private router : Router,
    private translate: TranslateService,
    public activatedRoute: ActivatedRoute
    ) {
        this.languages = [
          {
              id   : 'ch',
              title: 'Chinese',
              flag : 'ch'
          },
          {
              id   : 'en',
              title: 'English',
              flag : 'en'
          }
        ];
     }

  ngOnInit(): void {
    let browserlang = this.translate.getBrowserLang();
    if(this.languages.indexOf(browserlang) > -1) {
      this.translate.setDefaultLang(browserlang);
    } else {
      this.translate.setDefaultLang('ch');
    }
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

  public useLanguage(lang: any): void {
    this.selectedLanguage = lang;
    this.translate.use(lang.id);
  }
}
