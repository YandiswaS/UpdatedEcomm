import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock_product';
import { Product } from "./products";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  // ALL PRODUCTS
  getProducts(): Observable<Product[]>{
    let data = of(PRODUCTS)
    return data
  }

  // GET ONE
  getProduct(id: number): Observable<Product> {
    const product = PRODUCTS.find(element => element.id === id)!
    return of(product)
  }

}
