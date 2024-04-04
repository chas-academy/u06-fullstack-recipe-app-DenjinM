import { Routes } from '@angular/router';
import { StarterComponent } from './pages/starter/starter.component';
import { MainComponent } from './pages/main/main.component';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { RecipeComponent } from './pages/recipe/recipe.component';

export const routes: Routes = [
    { path: '', component: MainComponent },

    { path: 'main', component: MainComponent },
    
    { path: 'starter', component: StarterComponent },

    { path: 'desserts', component: DessertsComponent },

    { path: 'login', component: LoginComponent },

    { path: 'register', component: RegisterComponent },

    { path: 'search', component: SearchComponent },

    { path: 'recipe/:id', component: RecipeComponent },

];
