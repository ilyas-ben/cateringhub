import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent {
  public isLoggedIn: boolean;
  public username!: string;

  @Output() menuToggle = new EventEmitter<void>();

  constructor(private readonly _translate: TranslateService) {
    this.isLoggedIn = !!localStorage.getItem('jwtToken');
    this.username = localStorage.getItem('username') || '';
  }

  switchLang(lang: string) {
    this._translate.use(lang);
  }

  logout() {
    throw new Error('Method not implemented.');
  }
}
