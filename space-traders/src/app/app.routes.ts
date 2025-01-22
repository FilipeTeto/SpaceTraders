import { Routes } from '@angular/router';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { LoginComponent } from '../components/login/login.component';

export const routes: Routes = [

    { path: 'home', component: LandingPageComponent},
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/home', pathMatch:'full'}

];
