import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS } from 'src/app/mock_product';
import { Product } from 'src/app/products';



@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product?: Product
  @Input() i: any
   @Input() cart!: Product[]
  @Input() method!: (() => void) 
  
  value: number = 1
  
  constructor(private router: Router) { }

  ngOnInit(): void {}

   editCart(){
     let found = this.cart.find((elem: any) => elem.id == this.cart[this.i].id)
   if(found) found.quantity = this.value
   
  if(found) this.cart.splice(this.i,1,found)
    localStorage.setItem('cart', JSON.stringify(this.cart))
      alert('You updated your price!')
     this.method()
     this.reloadCurrentRoute()
    }

    deleteItem(){
      if(this.cart){
        let found = this.cart.find((elem: any) => elem.id == this.cart[this.i].id)
        if(found)  this.cart.splice(this.i,1)
        localStorage.setItem('cart', JSON.stringify(this.cart))
        this.method()
       this.reloadCurrentRoute()
      }
      
 }



  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });

  
  }
  }


