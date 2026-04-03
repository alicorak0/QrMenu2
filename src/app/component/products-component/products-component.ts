import { Component } from '@angular/core';
import { Product } from '../../models/productModel';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import { ProductSearchComponent } from '../product-search-component/product-search-component';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-products-component',
  imports: [CommonModule, RouterModule, ProductSearchComponent],
  templateUrl: './products-component.html',
  styleUrl: './products-component.css',
})
export class ProductsComponent implements AfterViewInit {
@ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

ngAfterViewInit() {
  const vid = this.bgVideo.nativeElement;

  vid.muted = true;

  const tryPlay = () => {
    vid.play().catch(() => {
      setTimeout(() => vid.play(), 300);
    });
  };

  if (vid.readyState >= 2) {
    tryPlay();
  } else {
    vid.onloadeddata = tryPlay;
  }
}
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  activeKey: string = ''; // Sidebar hangi kategori aktif

    categoryMap: { [key: number]: string } = {
    1: 'Burgers',
    2: 'Snacks',
    3: 'Drinks',
    4: 'Desserts',
    5: 'Sauces'
  };
categoryNameMap: { [key: string]: string } = {
  'burgers': 'Burgerler',
  'snacks': 'Aperatifler',
  'drinks': 'İçecekler',
  'desserts': 'Tatlılar',
  'sauces': 'Soslar'
};
   ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.activeKey = params['name']; // burgers, snacks, desserts vs

    console.log('Aktif kategori:', this.activeKey);
    if (this.activeKey) {
      this.loadProducts(this.activeKey); // kategori varsa
    } 
    // else {
    //   this.productService.getAllProducts().subscribe(res => {
    //     this.products = res.data; // tüm ürünleri al
    //   });
    // }
  });
}
 loadProducts(category: string) {
    // Backend'e category adıyla istekte bulun
    this.productService.getProductsByCategory(category).subscribe(res => {
      this.products = res.data;
    });
  }

   }

