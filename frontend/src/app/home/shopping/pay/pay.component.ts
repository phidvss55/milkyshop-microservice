import { HomeService } from './../../../services/home/home.service';
import { TokenService } from 'src/app/services/token.service';
import { DataService } from './../../../services/data.service';
import { CartService } from './../../../services/home/cart.service';
import { ProductCart } from './../../product/product-cart.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  productAddedTocart: ProductCart[];
  allTotal:number = 0;
  dataUser: any;
  note: string;

  imageDirectoryPath = 'http://localhost:8000/image/product/';
  
  constructor( 
    private cartService: CartService ,
    private dataService: DataService,
    private tokenService: TokenService,
    private homeService: HomeService,
    private router: Router
  ) { }

  saveInforCart() {
    console.log(this.productAddedTocart);
    let formData = new FormData();
    
    var obj = {
      "tr_user_id": this.dataUser.id,
      "tr_total": this.allTotal,
      "tr_note": this.note,
      "tr_address": this.dataUser.address,
      "tr_phone": this.dataUser.phone,
    }
    formData.append('transaction', JSON.stringify(obj));
    formData.append('order', JSON.stringify(this.productAddedTocart));
    this.homeService.saveInforCart(formData).subscribe( res => {
      alert(res);
      this.cartService.removeAllProductFromCart();
      this.router.navigateByUrl('/home');
    });
  }

  ngOnInit(): void {
    this.getUserInfor();
    this.productAddedTocart = this.cartService.getProductFromCart();
    this.cartService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
  }

  calculteAllTotal(allItems: ProductCart[])
  {
    let total=0;
    for (let i in allItems) {
      total = total + (allItems[i].quantity * allItems[i].price);
   }
   this.allTotal = total;
  }

  getUserInfor() {
    let email = this.tokenService.getEmail();
    console.log(email);
    this.dataService.getOneUser(email).subscribe( res => {
      this.dataUser = res;
    });
  }
  
}
