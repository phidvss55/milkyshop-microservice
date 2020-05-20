import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  dataArr: any;
  categoriesArr: any;
  imageDirectoryPath = 'http://localhost:8000/image/product/';
  search_value: string;
  data: Array<any>;
  totalRecords: String;
  page: Number = 1;

  constructor(
    private dataService: DataService,
    private activeRoute: ActivatedRoute
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
