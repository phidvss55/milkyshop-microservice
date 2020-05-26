import { Alert } from './product/alert.model';
import { CartService } from './../services/home/cart.service';
import { ProductCart } from './product/product-cart.model';
import { HomeService } from './../services/home/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageDirectoryPath = 'http://localhost:8000/image/product/';
  articleImageDirectoryPath = 'http://localhost:8000/image/article/';

  proDiscountArr: any;
  hotestProduct: any;
  newestProduct: any;
  loveProducts: any;
  articlesArr: any;
  productAddedTocart: ProductCart[];
  cartItemCount: number = 0;
  public alerts: Array<Alert> = [];

  constructor(
    private homeService: HomeService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getProductSale();
    this.getHotestProduct();
    this.getNewestProduct();
    this.getLoveProduct();
    this.getArticles();
  }

  getArticles() {
    this.homeService.getHomeArticles().subscribe( res => {
      this.articlesArr = res;
    });
  }

  getLoveProduct() {
    this.homeService.getLoveProduct().subscribe( res => {
      this.loveProducts = res;
    })
  }

  getNewestProduct() {
    this.homeService.getNewestProduct().subscribe( res => {
      this.newestProduct = res;
    });
  }

  addCart(product: ProductCart) {
    this.productAddedTocart = this.cartService.getProductFromCart();
    if (this.productAddedTocart == null) {
      this.productAddedTocart = [];
      if(product['pro_sale'] > 0) {
        product.price = product['pro_price'] * (100 - product['pro_sale']) / 100;        
      } else {
        product.price = product['pro_price'];
      }
      this.productAddedTocart.push(product);
      
      this.cartService.addProductToCart(this.productAddedTocart);
      this.alerts.push({
        id: 1,
        type: 'success',
        message: 'Thêm sản phẩm thành công.'
      });
      setTimeout(() => {
        this.closeAlert(this.alerts);
      }, 3000);
    } else {
      let tempProduct = this.productAddedTocart.find(p => p.id == product.id);
      if (tempProduct == null) {
        if(product['pro_sale'] > 0) {
          product.price = product['pro_price'] * (100 - product['pro_sale']) / 100;        
        } else {
          product.price = product['pro_price'];
        }
        this.productAddedTocart.push(product);
        this.cartService.addProductToCart(this.productAddedTocart);
        this.alerts.push({
          id: 1,
          type: 'success',
          message: 'Thêm sản phẩm thành công.'
        });
        setTimeout(() => {
          this.closeAlert(this.alerts);
        }, 3000);
      }
      else {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: ' Sản phẩm này đã tồN tại trong giỏ hàng.'
        });
        setTimeout(() => {
          this.closeAlert(this.alerts);
        }, 3000);
      }
    }
    this.cartItemCount = this.productAddedTocart.length;
    this.cartService.updateCartCount(this.cartItemCount);
  }

  getHotestProduct() {
    this.homeService.getHotestProduct().subscribe( res => {
      this.hotestProduct = res;
    });
  }

  getProductSale() {
    this.homeService.getDiscountProduct().subscribe(res => {
      this.proDiscountArr = res;
    });
  }

  loveProduct(id) {
    event.preventDefault();
    this.homeService.loveProducts(id).subscribe(
      data => this.handleData(data),
      error => console.log(error)      
    )
  }

  handleData(data) {
    alert(data);
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
