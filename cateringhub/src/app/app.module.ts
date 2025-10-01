import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    TranslateModule.forRoot(),
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [
    provideTranslateHttpLoader({
      prefix: '/assets/i18n/',
      suffix: '.json',
    }),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}