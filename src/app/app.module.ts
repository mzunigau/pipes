import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID , NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localES from '@angular/common/locales/es';
import localFR from '@angular/common/locales/fr';

registerLocaleData(localES);
registerLocaleData(localFR);

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
