import { CartService } from './../../services/home/cart.service';
import { Alert } from './../product/alert.model';
import { ProductCart } from './../product/product-cart.model';
import { DataService } from './../../services/data.service';
import { HomeService } from './../../services/home/home.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  id: any;
  name: any;
  productsArr: any;
  categoriesArr: any;
  startArr = [1, 2, 3, 4, 5];

  productAddedTocart: ProductCart[];
  cartItemCount: number = 0;
  public alerts: Array<Alert> = [];

  imageDirectoryPath = 'http://localhost:8000/image/product/';

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private dataService: DataService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.handleSlug(this.route.snapshot.params.slug);
    this.getProductInId(this.id);
    this.getCategories();
  }

  searchProArrange(key_word) {
    var obj = {
      "cate_id": this.id,
      "key_word": key_word
    }
    event.preventDefault();
    this.homeService.searchProViaCategory(obj).subscribe(res => {
      this.productsArr = res;
    });
  }
  
  loadPage() {
    setTimeout(function () {
      location.reload()
    }, 100);
  }

  getCategories() {
    this.dataService.getCategory().subscribe( res => {
      this.categoriesArr = res;
    });
  }

  getProductInId(id) {
    this.homeService.getProductInCategory(id).subscribe( res => {
      this.productsArr = res;
    });
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

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  handleSlug(arr) {
    var nameArr = arr.split('-');
    this.name = nameArr.join(' ');
  }
}
