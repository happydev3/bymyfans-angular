import { Component, OnInit, Injectable, Inject, SimpleChanges } from '@angular/core';
import { Observable, of, Subscription, Subject } from "rxjs";
import { AuthenticationService } from 'src/app/services/auth.service';
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
  public languages: any;
  public selectedLanguage: any = {
    id   : 'ch',
    title: 'Chinese',
    flag : 'ch'
  };

  constructor(
    public authService: AuthenticationService,
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
    this.translate.setDefaultLang(lang.id);
  }
}
