import { API_URL, API_URL_DI_TOKEN } from './api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    MaterialModule,
    EffectsModule.forRoot([]),
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [
    { provide: API_URL_DI_TOKEN, useValue: API_URL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
