import { Routes } from "@angular/router";
import { CompanyComponent } from "./company/company.component";

export const AboutRoutes: Routes = [
    // localhost:4200/about/company => company
    {
        component: CompanyComponent,
        path: "company"
    },
    {
        // localhost:4200/about/team => company
        loadComponent: () => import('./team/team.component').then((component) => component.TeamComponent),
        path: "team"
    },
    {
        path: "",
        redirectTo: 'company',
        pathMatch: "full"
    }
]