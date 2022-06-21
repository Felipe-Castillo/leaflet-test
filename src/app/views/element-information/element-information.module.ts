import { NgModule } from '@angular/core';
import { ElementInformationRoutingModule } from './element-information-routing.module';
import { ElementInformationComponent } from './element-information.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpHeaders, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ElementInformationComponent,
  ],
  imports: [
    ElementInformationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
  ]
})
export class ElementInformationModule { }
