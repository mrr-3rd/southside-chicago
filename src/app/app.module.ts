import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyListingsComponent } from './component/property-listings/property-listings.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
