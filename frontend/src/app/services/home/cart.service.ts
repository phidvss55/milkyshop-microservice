import { Injectable } from '@angular/core';
import { throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private currentCartCount = new BehaviorSubject(0);
  currentMessage = this.currentCartCount.asObservable();

  constructor() { }

  addProductToCart(prodcuts: any) {
    localStorage.setItem("product", JSON.stringify(prodcuts));
  }
  
  getProductFromCart() {
    return JSON.parse(localStorage.getItem('product'));
  }

  getTotalItem() {
    if (localStorage.getItem("product") != null) {
      return JSON.parse(localStorage.product).length;
    } else {
      return 0;
    }
  }

  removeAllProductFromCart() {
    return localStorage.removeItem("product");
  }

  errorHandler(error: Response) {
    console.log(error);
    return throwError(error);
  }

  updateCartCount(count: number) {
    this.currentCartCount.next(count)
  }
}
