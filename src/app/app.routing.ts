import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyListingsComponent } from './component/property-listings/property-listings.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PropertyListingsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
