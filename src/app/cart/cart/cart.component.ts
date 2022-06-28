import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any // JSON.parse(`${localStorage.getItem('cart')}`) ? JSON.parse(`${localStorage.getItem('cart')}`) : []
  
  total: number = 0
  
  constructor( ) { }

  ngOnInit(): void {
    this.getCart()
    console.log(this.cart)
  }

  getCart() {
    this.cart = JSON.parse(`${localStorage.getItem('cart')}`) ?
    JSON.parse(`${localStorage.getItem('cart')}`) : []
    this.totalCost()
  }

  

  totalCost(){
    this.cart.map( (elem: any) => {
      if(elem.quantity) this.total += elem.price*elem.quantity
    })
  }

  checkout(){
    console.log('We are here now')
  }


}

