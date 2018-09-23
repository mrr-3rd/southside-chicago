import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { PropertyListingsComponent } from './component/property-listings/property-listings.component';
import { NewPropertyListingComponent } from './component/form/new-property-listing/new-property-listing.component';

import { AngularFireModule } from "@angular/fire";
import { masterFirebaseConfig } from './api-keys/api-keys';

import { environment, api_keys } from "./.environment/environment";
export const firebaseConfig = environment.firebaseConfig;
export const apiKeys = api_keys;

@NgModule({
  declarations: [
    AppComponent,
    PropertyListingsComponent,
    NewPropertyListingComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
