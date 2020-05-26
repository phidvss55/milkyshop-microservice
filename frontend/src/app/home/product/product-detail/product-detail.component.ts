import { Product } from '../../../admin/product/product.model';
import { DataService } from './../../../services/data.service';
import { HomeService } from './../../../services/home/home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  relateProductArr: any;
  imageDirectoryPath = 'http://localhost:8000/image/product/';

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.handleSlug(this.route.snapshot.params.slug);
    this.updateView(this.id);
    this.getProduct();
    this.getCategories();
    this.getPayestProduct();
  }

  updateView(id) {
    var obj = {
      "id": id
    }
    this.homeService.updateViewProduct(obj).subscribe( res => {});
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
