import { Component, signal } from '@angular/core';
import { HeaderComponent } from './component/header-component/header-component';
import { CategoriesComponent } from './component/categories-component/categories-component';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; // 👈 bunu ekle
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './component/products-component/products-component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FormsModule,CategoriesComponent,RouterOutlet,RouterModule,FontAwesomeModule,HttpClientModule,ProductsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('QRMenu');
}
