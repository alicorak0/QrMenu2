import { Component } from '@angular/core';
import { Product } from '../../models/productModel';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product-service';
import { FormsModule } from '@angular/forms';
import { SingleResponseModel } from '../../models/singleResponseModel';

@Component({
  selector: 'app-product-search-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-search-component.html',
  styleUrl: './product-search-component.css',
})
export class ProductSearchComponent    {

 searchName: string = '';             // Input değeri
  products: Product[] = [];            // API’den gelen ürünler
  noResults: boolean = false;          // Sonuç yoksa true
  searchResponseMessage: string = '';  // Mesaj gösterimi
  searched: boolean = false;           // Ara’ya basıldı mı?

  constructor(private productService: ProductService) {}

  // 🔹 API çağrısı ve mesaj mantığı burada
  SearchProducts() {
    this.searched = true; // Ara’ya basıldı

    if (!this.searchName.trim()) {
      // Input boşsa mesaj göster, API çağrma
      this.noResults = true;
      this.searchResponseMessage = "Bir ürün adı girin";
      this.products = [];
      return;
    }

    // API çağrısı
    this.productService.productSearch(this.searchName)
      .subscribe((res: SingleResponseModel<Product[]>) => {
        this.products = res.data;
        this.noResults = this.products.length === 0;

        if (this.noResults) {
          this.searchResponseMessage = "Sonuç Bulunamadı";
        } else {
          this.searchResponseMessage = '';
        }
      });
  }

  // 🔹 OnSearch sadece tetikleme
  onSearch() {
    this.SearchProducts();
  }
}
