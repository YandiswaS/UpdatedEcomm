import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from 'src/app/mock_product';
import { ProductService } from 'src/app/product.service';



@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {
  
  products = PRODUCTS

  product: any
  cart: any = []
  value = 1
  constructor( private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.productService.getProduct(id).subscribe(res => this.product = res)
  }
  addToCart(i: number){
    let data = {
      quantity: this.value,
      ...this.products[i]
    } 
    
  this.cart.push(data)
    console.log(this.cart)
    localStorage.setItem('cart', JSON.stringify(this.cart))
    
  }
}


