import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import path from 'path';

@Component({
  selector: 'app-categories-component',
  imports: [CommonModule,RouterModule],
  templateUrl: './categories-component.html',
  styleUrl: './categories-component.css',
})
export class CategoriesComponent {
  categories = [
    { id: 1, name: 'Burgerler',pathUrl:"burgers" },
    { id: 3, name: 'Aperatifler',pathUrl:"snacks" },
    { id: 4, name: 'İçecekler', pathUrl:"drinks"},
    { id: 5, name: 'Tatlılar',pathUrl:"sweets" },
    { id: 6, name: 'Soslar' ,pathUrl:"sauces" }
  ];
}
