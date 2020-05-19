import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

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

  deleteData(id) {
    this.dataService.deleteCategoryData(id).subscribe( res => {
      this.getCategoriesData();
    });
  } 

}
