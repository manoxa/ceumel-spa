import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import Services from './services';
import Components from './components';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PdvComponent } from './components/pdv/pdv.component';

@NgModule({
  declarations: [
    AppComponent,
    Components.declarations,
    PdvComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    Services.providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
