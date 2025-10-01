import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent {
  constructor(
    private readonly _translate: TranslateService,
    private readonly _router: Router
  ) {
    _translate.addLangs(['en', 'fr']);
    _translate.use('en');
  }

  switchLang(lang: string) {
    this._translate.use(lang);
  }

  public navigateToUsers() {
    this._router.navigate(['users']);
  }
}
