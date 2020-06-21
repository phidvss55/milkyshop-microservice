import { Alert } from './alert.model';
import { CartService } from './../../services/home/cart.service';
import { ProductCart } from './product-cart.model';
import { HomeService } from './../../services/home/home.service';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  p: number = 1;

  keyword_search: any;
  categoriesArr: any;
  suppliersArr: any;
  productsArr: any;
  loveProductsArr: any;

  productAddedTocart: ProductCart[];
  cartItemCount: number = 0;
  public alerts: Array<Alert> = [];

  imageDirectoryPath = 'http://localhost:8000/image/product/';

  constructor(
    private dataService: DataService,
    private homeService: HomeService,
    private cartService: CartService

  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getSupplier();
    this.getProduct();
    this.getLoveProduct();
  }

  addCart(product: ProductCart) {
    this.productAddedTocart = this.cartService.getProductFromCart();
    if (this.productAddedTocart == null) {
      this.productAddedTocart = [];
      if (product['pro_sale'] > 0) {
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
        if (product['pro_sale'] > 0) {
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
          message: ' Sản phẩm này đã tồn tại trong giỏ hàng.'
        });
        setTimeout(() => {
          this.closeAlert(this.alerts);
        }, 3000);
      }
    }
    this.cartItemCount = this.productAddedTocart.length;
    this.cartService.updateCartCount(this.cartItemCount);
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  getLoveProduct() {
    this.homeService.getLoveProduct().subscribe(res => {
      this.loveProductsArr = res;
    });
  }

  searchProduct() {
    var obj = {
      "keyword_search": this.keyword_search
    }
    event.preventDefault();
    this.homeService.searchProduct(obj).subscribe(res => {
      this.productsArr = res;
    });
    this.keyword_search = "";
  }

  loveProduct(id) {
    event.preventDefault();
    this.homeService.loveProducts(id).subscribe(
      data => this.handleData(data),
      error => console.log(error)
    )
  }

  searchProArrange(key_word) {
    var obj = {
      "key_word": key_word
    }
    event.preventDefault();
    this.homeService.searchProduct(obj).subscribe(res => {
      this.productsArr = res;
    });
  }

  handleData(data) {
    alert(data);
  }

  searchProductBetween(id) {
    var obj = {
      'distance': id
    }
    event.preventDefault();
    this.homeService.searchProduct(obj).subscribe(res => {
      this.productsArr = res;
      console.log(this.productsArr);
    });
  }

  searchProCate(id) {
    var obj = {
      "cate_id": id
    }
    event.preventDefault();
    this.homeService.searchProduct(obj).subscribe(res => {
      this.productsArr = res;
    });
  }

  getProduct() {
    this.homeService.getProducts().subscribe(
      data => this.passProduct(data),
      error => console.log(error)
    )
  }

  passProduct(data) {
    this.productsArr = data
  }

  getSupplier() {
    this.dataService.getSupplier().subscribe(
      data => this.passSupplier(data),
      error => console.log(error)
    )
  }

  passSupplier(data) {
    this.suppliersArr = data;
  }


  getCategories() {
    this.dataService.getCategory().subscribe(
      data => this.passCategories(data),
      error => console.log(error)
    );
  }

  passCategories(data) {
    this.categoriesArr = data;
  }
}