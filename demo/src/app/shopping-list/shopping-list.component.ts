import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
   ingredients: Ingredients[] = [
     new Ingredients('Apples', 15),
     new Ingredients('Onion', 3),
     new Ingredients('Tomato', 4)
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
