import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component'
import { HeroesComponent } from "./components/shared/heroes/heroes.component";
import { AboutComponent } from './components/shared/about/about.component'

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);