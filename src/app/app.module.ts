import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {BotonComponent} from './boton/boton.component';
import {Tema1Component} from './tema1/tema1.component';
import {Tema2Component} from './tema2/tema2.component';
import {Tema3Component} from './tema3/tema3.component';
import {TablaComponent} from './tabla/tabla.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BotonComponent,Tema1Component,Tema2Component,Tema3Component, TablaComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
