import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[
    new Recipe('A Test Recipe','The test recipe description',
    'https://i.pinimg.com/originals/74/b9/55/74b955513795417b28ec3e1a36c7ae0a.jpg'),
    new Recipe('A Test Recipe','The test recipe description',
    'https://i.pinimg.com/originals/74/b9/55/74b955513795417b28ec3e1a36c7ae0a.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
