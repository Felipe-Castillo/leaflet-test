import { NgModule } from '@angular/core';
import { GraphicRoutingModule } from './graphic-routing.module';
import { GraphicComponent } from './graphic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpHeaders, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    GraphicComponent,
  ],
  imports: [
    GraphicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighchartsChartModule,
    CommonModule
  ],
  providers: [
  ]
})
export class GraphicModule { }
