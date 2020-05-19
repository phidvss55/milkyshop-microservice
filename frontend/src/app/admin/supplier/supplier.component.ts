import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from './supplier.module';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  dataArr: any;
  imageDirectoryPath = 'http://localhost:8000/image/supplier/';
  // imageDirectoryPath = 'C:/xampp/htdocs/GUI/backend/public/image/supplier/';

  // supplier = new Supplier();
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getSupplierData();
  }

  getSupplierData() {
    this.dataService.getSupplier().subscribe( res => {
      this.dataArr = res;
    });
  }

  deleteData(id) {
    this.dataService.deleteSupplierData(id).subscribe( res => {
      console.log(id);
      this.getSupplierData();
    });
  } 
}