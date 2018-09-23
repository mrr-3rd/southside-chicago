import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyListingsComponent } from './component/property-listings/property-listings.component';
import { routing } from "./app.routing";

import { AngularFireModule } from "@angular/fire";
import { NewPropertyListingComponent } from './component/form/new-property-listing/new-property-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListingsComponent,
    NewPropertyListingComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
