import {Recipe} from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Pad Thai', 'Tasty Thai street tood', 'https://c1.staticflickr.com/5/4050/4339908741_da16cb10c7_b.jpg'),
    new Recipe('Pad Thai 2', 'Tasty Thai street tood 2', 'https://c1.staticflickr.com/5/4050/4339908741_da16cb10c7_b.jpg'),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
