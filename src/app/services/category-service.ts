import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModel } from '../models/responseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/categoryModel';


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
      private apiUrl = 'https://localhost:44311/api/categories/'; // backend endpoint

  constructor(private http: HttpClient) { }

   getAllCategories(): Observable<{ data: Category[] }> {
      return this.http.get<{ data: Category[] }>(`${this.apiUrl}getall`);
    }


}
