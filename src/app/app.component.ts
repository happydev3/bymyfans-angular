import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'fans-front';

  langs = ['ch', 'en'];

  constructor(
    private translateService: TranslateService
  ) {
    translateService.addLangs(['ch', 'en']);
    translateService.setDefaultLang('ch');
  }

  ngOnInit() {
   
  }
}
