import { Routes } from '@angular/router';
import { SaladComponent } from './pages/salad/salad.component';
import { SoupComponent } from './pages/soup/soup.component';
import { SweetsComponent } from './pages/sweets/sweets.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
    { path: 'salad', component: SaladComponent },

    { path: 'soup', component: SoupComponent },

    { path: 'sweets', component: SweetsComponent },

    { path: 'login', component: LoginComponent },

    { path: 'register', component: RegisterComponent },

    { path: 'search', component: SearchComponent },
];
