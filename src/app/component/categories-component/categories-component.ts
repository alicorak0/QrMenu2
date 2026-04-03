import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import path from 'path';
import { Category } from '../../models/categoryModel';
import { CategoryService } from '../../services/category-service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-categories-component',
  imports: [CommonModule,RouterModule],
  templateUrl: './categories-component.html',
  styleUrl: './categories-component.css',
})
export class CategoriesComponent  {


  constructor(private categoryService: CategoryService) {} // kategory gelir
   categories: Category[] = [];


 ngOnInit(): void {
  this.getAllCategories();  
 }
  

 getAllCategories(){  
   // Backend'e category adıyla istekte bulun
    this.categoryService.getAllCategories().subscribe(res => {

  console.log(res.data); // categoryName mi var yoksa name mi
      this.categories = res.data;
    });
 }
   
 // ---- slugify fonksiyonu ----
  slugify(name: string): string {
    return name
      .trim()
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // ç, ü, ş -> c, u, s
      .replace(/[\s\_]+/g, '-')                        // boşluk -> tire
      .replace(/[^\w\-]+/g, '')                        // özel karakterleri kaldır
      .replace(/\-\-+/g, '-')                          // birden fazla tireyi tek yap
      .replace(/^-+/, '')                              
      .replace(/-+$/, '');
  }

  //  categories = [
  //    { id: 1, name: 'Burgerler',pathUrl:"burgers" },
  //    { id: 3, name: 'Aperatifler',pathUrl:"snacks" },
  //    { id: 4, name: 'İçecekler', pathUrl:"drinks"},
  //    { id: 5, name: 'Tatlılar',pathUrl:"sweets" },
  //    { id: 6, name: 'Soslar' ,pathUrl:"sauces" }
  //  ];
}
