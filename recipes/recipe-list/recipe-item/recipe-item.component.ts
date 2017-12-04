import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() evRecipeRI = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeRI() {
    this.evRecipeRI.emit();
  }
}
