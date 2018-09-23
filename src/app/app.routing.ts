// import { routing } from './app.routing';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyListingsComponent } from './component/property-listings/property-listings.component';
import { NewPropertyListingComponent } from './component/form/new-property-listing/new-property-listing.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PropertyListingsComponent
    },
    {
        path: 'property',
        component: NewPropertyListingComponent
    }
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
