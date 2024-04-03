import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-soup',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './soup.component.html',
  styleUrl: './soup.component.css'
})
export class SoupComponent {
  dishType = "Main course";
  recipes?: any;
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

