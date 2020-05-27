import { CartService } from './../../../services/home/cart.service';
import { ProductCart } from './../../product/product-cart.model';
import { HomeService } from './../../../services/home/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productAddedTocart: ProductCart[];
  allTotal:number = 0;

  imageDirectoryPath = 'http://localhost:8000/image/product/';

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.productAddedTocart = this.cartService.getProductFromCart();
    this.initQuantityProduct();
    this.initTotalPriceItem();
    this.cartService.removeAllProductFromCart();
    this.cartService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
  }

  updateInfor(event, product) {
    this.productAddedTocart[this.productAddedTocart.indexOf(product)].quantity = parseInt(event.target.value);
    this.calculteAllTotal(this.productAddedTocart);
    this.initTotalPriceItem();
    this.cartService.removeAllProductFromCart();
    this.cartService.addProductToCart(this.productAddedTocart);
  }

  totalMoneyCountr(allItems: ProductCart[]) {
    let total=0;
    for (let i in allItems) {
      total = total + (allItems[i].quantity * allItems[i].price);
   }
   this.allTotal = total;
  }

  deleteItemFromCart(id) {
    let index = this.productAddedTocart.indexOf(id);
    this.productAddedTocart.splice(index, 1)
    this.calculteAllTotal(this.productAddedTocart);
    this.cartService.removeAllProductFromCart();
    this.cartService.addProductToCart(this.productAddedTocart);
  }

  initTotalPriceItem() {
    this.productAddedTocart.forEach(ele => {
      ele.totalPrice = ele.price * ele.quantity;
    });
  }

  calculteAllTotal(allItems: ProductCart[])
  {
    let total=0;
    for (let i in allItems) {
      total = total + (allItems[i].quantity * allItems[i].price);
   }
   this.allTotal = total;
  }

  initQuantityProduct() {
    for( let i in this.productAddedTocart) {
      if(!this.productAddedTocart[i].quantity || this.productAddedTocart[i].quantity == 0) {
        this.productAddedTocart[i].quantity = 1;
      }
    }
  }
}
