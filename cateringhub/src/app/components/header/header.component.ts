import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent {
  public isLoggedIn: boolean = false;
  public username!: string;

  @Output() menuToggle = new EventEmitter<void>();

  constructor(
    private readonly _translate: TranslateService,
    private readonly _userService: UserService
  ) {
    this._userService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
      this.username = localStorage.getItem('username') || '';
    });
  }

  switchLang(lang: string) {
    this._translate.use(lang);
  }

  logout() {
    this._userService.logout();
    this.isLoggedIn = false;
    this.username = '';
  }
}
