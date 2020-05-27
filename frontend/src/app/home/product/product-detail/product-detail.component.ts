import { TokenService } from 'src/app/services/token.service';
import { Alert } from './../alert.model';
import { CartService } from './../../../services/home/cart.service';
import { ProductCart } from './../product-cart.model';
import { DataService } from './../../../services/data.service';
import { HomeService } from './../../../services/home/home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  name: String;
  id: any;
  dataArr: any;
  categoriesArr: any;
  suppliersArr: any;
  payProductArr: any;
  usersArr: any;
  ratingsArr : any;
  relateProductArr: any;
  currentRate = 8;
  productAddedTocart: ProductCart[];
  cartItemCount: number = 0;
  public alerts: Array<Alert> = [];
  totalstar = 5;
  ratingStart: any = 0;
  review: any;
  startArr = [1, 2, 3, 4, 5];
  average: number = 5;

  imageDirectoryPath = 'http://localhost:8000/image/product/';
  userImageDirectoryPath = 'http://localhost:8000/image/user/';

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private dataService: DataService,
    private cartService: CartService,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.handleSlug(this.route.snapshot.params.slug);
    this.updateView(this.id);
    this.getProduct();
    this.getCategories();
    this.getPayestProduct();
    this.getUsers();
    this.getRatingByIdProduct();
  }

  getRatingByIdProduct() {
    this.dataService.getRatingById(this.id).subscribe( res => {
      this.ratingsArr = res;
    });
  }

  getUsers() {
    this.dataService.getUser().subscribe( res => {
      this.usersArr = res;
    })
  }

  updateView(id) {
    var obj = {
      "id": id
    }
    this.homeService.updateViewProduct(obj).subscribe( res => {});
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

  saveRating() {
    let email = this.tokenService.getEmail();
    var obj = {
      "id_product": this.id,
      "start": this.ratingStart,
      "review": this.review,
      "email": email
    }

  this.homeService.saveRating(obj).subscribe( res => {
      alert(res)
      this.loadPage();
    });
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    this.ratingStart = $event.newValue;
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  getPayestProduct() {
    this.homeService.getPayProduct().subscribe( res => {
      this.payProductArr = res;
    });
  }

  loveProduct(id) {
    event.preventDefault();
    this.homeService.loveProducts(id).subscribe( res => {
      alert(res);
    });
  }

  loadPage() {
    setTimeout(function () {
      location.reload()
    }, 100);
  }

  handleSlug(arr) {
    var nameArr = arr.split('-');
    this.name = nameArr.join(' ');
  }

  getProduct() {
    this.homeService.getOneProducts(this.id).subscribe( res => {
      this.dataArr = res;
    });
  }

  getCategories() {
    this.dataService.getCategory().subscribe(
      data => this.passCategories(data),
      error => console.log(error)
    );
  }

  passCategories(data) {
    this.categoriesArr = data;
    this.categoriesArr.forEach(ele => {
        if(ele.id == this.dataArr[0].pro_category_id) {
          this.getRelateProduct(ele.id);   
        }
    });
  }

  getRelateProduct(id) {
    this.homeService.getRelateProduct(id).subscribe( res => {
      this.relateProductArr = res;
    });
  }
}
