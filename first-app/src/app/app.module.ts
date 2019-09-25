import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { Calculator2Component } from './calculator/calculator2.component';
import { CalculatorResultComponent } from './calculator/calculatorResult.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    Calculator2Component,
    CalculatorResultComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent, ProductsComponent ]
})
export class AppModule { }
