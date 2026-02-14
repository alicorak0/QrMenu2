import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/productModel';
import { HttpClientModule } from '@angular/common/http'; // ← ekle
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    private apiUrl = 'https://localhost:44311/api/products/'; // backend endpoint

  constructor(private http: HttpClient) { }

 //Tüm ürünleri al
  getAllProducts(): Observable<{ data: Product[] }> {
    return this.http.get<{ data: Product[] }>(`${this.apiUrl}getall`);
  }

// Belirli kategoriye göre ürünleri al
   getProductsByCategory(categoryPath: string): Observable<{ data: Product[] }> {
     // backend'in parametre kabul ettiği URL formatına göre düzenle
     return this.http.get<{ data: Product[] }>(`${this.apiUrl}getbycategoryname/${categoryPath}`);
   }

  getFeaturedProducts(): Observable<{ data: Product[] }> {
    return this.http.get<{ data: Product[] }>(`https://localhost:44311/api/featuredproducts/getall
`);
  }

  productSearch(name: string):Observable<SingleResponseModel<Product[]>> {
    return this.http.get<SingleResponseModel<Product[]>>(`https://localhost:44311/api/products/search?name=${name}`);
  }

}
