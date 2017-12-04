import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pad Thai',
      'Tasty Thai street food',
      'https://c1.staticflickr.com/5/4050/4339908741_da16cb10c7_b.jpg'),
    new Recipe('Pad Thai',
      'Tasty Thai street food',
      'https://c1.staticflickr.com/5/4050/4339908741_da16cb10c7_b.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
