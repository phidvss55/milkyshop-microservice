import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  p: number = 1;
  dataArr: any;

  categoriesArr: any;
  imageDirectoryPath = 'http://localhost:8000/image/product/';
  search_value: string;
 
  constructor(
    private dataService: DataService,
    // private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProductsData();
    this.getCategories();
  }

  searchCateProduct(event) {
    var id = event.target.value;
    this.search_value = "";
    this.dataService.searchCateProduct(id).subscribe(
      data => this.handleData(data),
      error => console.log(error)
    );
  }

  searchProduct() {
    var obj = {
      search_string: this.search_value
    }
    this.dataService.searchProduct(obj.search_string).subscribe(
      data => this.handleData(data),
      error => console.log(error)
    );
  }

  changeActive(id, status) {
    var obj = {
      "id": id,
      "status": status
    }
    this.dataService.changeActiveProduct(obj).subscribe( res => {
      this.getProductsData();
    });
  }

  changeHot(id, hot) {
    var obj = {
      "id": id,
      "hot": hot
    }
    this.dataService.changeHotProduct(obj).subscribe( res => {
      this.getProductsData();
    })
  }

  handleData(data) {
    this.dataArr = data.data;
  }

  getCategories() {
    this.dataService.getCategory().subscribe(res => {
      this.categoriesArr = res;
    });
  }

  getProductsData() {
    this.dataService.getProduct().subscribe(res => {
      this.dataArr = res;
    });
  }

  deleteData(id) {
    this.dataService.deleteProductData(id).subscribe(res => {
      this.getProductsData();
    });
  }
}
