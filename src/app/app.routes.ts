import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: "full"
    },
    {
        component: DashboardComponent,
        path: "dashboard"
    },
    {
       // localhost:4200/about => nacitam zoznam routes
       loadChildren: () => import('./about/about.routes').then((routes) => routes.AboutRoutes),
       path: "about" 
    }
];
