import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-sweets',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './sweets.component.html',
  styleUrl: './sweets.component.css'
})
export class SweetsComponent {
  dishType = "Desserts";
  recipes: any[] =[] ;
  constructor(private recipeService: RecipeService, private router: Router) { }
  recieveRecipes(recipes: any[]) {
    this.recipes = recipes
  }
  goToDetails(recipe: any) {
    let startIndex = recipe.self.indexOf("/v2/") + 4;
    let endIndex = recipe.self.indexOf("?");
    let extractedId = recipe.self.substring(startIndex, endIndex);
    console.log(extractedId);
    this.router.navigate(['/recipe', extractedId]);
  }
}
