import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyListingsComponent } from './component/property-listings/property-listings.component';
import { routing } from "./app.routing";

import { AngularFireModule } from "@angular/fire";

@NgModule({
  declarations: [
    AppComponent,
    PropertyListingsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
