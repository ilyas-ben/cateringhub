import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent {
  constructor(private readonly _translate: TranslateService) {
    _translate.addLangs(['en', 'fr']);
    _translate.use('en');
  }

  switchLang(lang: string) {
    this._translate.use(lang);
  }
}
