import { Routes } from '@angular/router';
import { landingRoutes } from './pages/landing/landing.routes';

export const routes: Routes = [
    ...landingRoutes,
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: '**', redirectTo: '/landing' },
];
