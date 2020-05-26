import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  p: number = 1;
  dataArr: any;
  supplierArr: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getCategoriesData();
    this.getSupplier();
  }

  getSupplier() {
    this.dataService.getSupplier().subscribe( res => {
      this.supplierArr = res;
    });
  }

  getCategoriesData() {
    this.dataService.getCategory().subscribe( res => {
      this.dataArr = res;
    });
  }

  changeActive(id, status) {
    var obj = {
      "id": id,
      "status": status
    }
    this.dataService.changeActiveCategory(obj).subscribe( res => {
      this.getCategoriesData();
    });
  }

  changeHome(id, home) {
    var obj = {
      "id": id,
      "home": home
    }
    this.dataService.changeHomeCategory(obj).subscribe( res => {
      this.getCategoriesData();
    })
  }

  deleteData(id) {
    this.dataService.deleteCategoryData(id).subscribe( res => {
      this.getCategoriesData();
    });
  } 

}
