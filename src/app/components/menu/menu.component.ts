import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS } from 'src/app/mock_product';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products = PRODUCTS

  cart: any[] = []
  value = 1

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(index: number){
    let data = {
      quantity: this.value,
      ...this.products[index]
    } 
    
  this.cart.push(data)
    console.log(this.cart)
    localStorage.setItem('cart', JSON.stringify(this.cart))
    {
      
    }
    
  }
}
