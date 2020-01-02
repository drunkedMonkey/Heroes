import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeES);

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  providers: [{provide: LOCALE_ID, useValue: "es"}],
  exports: [RouterModule]
})
export class AppRoutingModule { }
