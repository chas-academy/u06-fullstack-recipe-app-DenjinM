import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  @Input() dishType = "";
  @Output() recipesEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();
  querySearch = '';
  vegan = false;
  dairy = false;
  gluten = false;
  recipes: any
  constructor(private recipeService: RecipeService) { }
  onSearch() {
    const veganQuery = this.vegan ? 'vegan' : ""
    const dairyQuery = this.dairy ? 'dairy-free' : ""
    const glutenQuery = this.gluten ? "gluten-free" : ""
    this.recipeService.getRecipes(this.querySearch, this.dishType, veganQuery, dairyQuery, glutenQuery).subscribe((res) => {
      let recipeArray: any[];
      recipeArray = res.hits;
      let recipes = recipeArray.map(item => {
        return {
          self: item._links.self.href,
          label: item.recipe.label,
          image: item.recipe.image,
          totalTime: item.recipe.totalTime,
          ingredientLines: item.recipe.ingredientLines
        }
      });
      this.recipes = recipes;
      this.recipesEmitter.emit(this.recipes)
    });
  }
  getRecommendations() {
    this.recipeService.getRecipes('', this.dishType).subscribe((res) => {
      let recipeArray: any[];
      recipeArray = res.hits;
      let recipes = recipeArray.map(item => {
        return {
          self: item._links.self.href,
          label: item.recipe.label,
          image: item.recipe.image,
          totalTime: item.recipe.totalTime,
          ingredientLines: item.recipe.ingredientLines
        }
      });
      this.recipes = recipes;
      this.recipesEmitter.emit(this.recipes)
    });
  }
  ngOnInit(): void {
    this.getRecommendations();
  }
}
