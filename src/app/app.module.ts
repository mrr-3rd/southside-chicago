import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { PropertyListingsComponent } from './component/property-listings/property-listings.component';
import { NewPropertyListingComponent } from './component/form/new-property-listing/new-property-listing.component';

import { AngularFireModule } from "@angular/fire";
import { masterFirebaseConfig } from './api-keys/api-keys';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

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
