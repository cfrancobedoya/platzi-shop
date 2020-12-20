import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Product } from './../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(environment.url_api + '/products');
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }
}
