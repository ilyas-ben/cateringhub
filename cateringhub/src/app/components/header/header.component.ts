import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();

  constructor(private readonly _translate: TranslateService) {}

  switchLang(lang: string) {
    this._translate.use(lang);
  }
}
