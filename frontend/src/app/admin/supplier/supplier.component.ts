import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from './supplier.model';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  p: number = 1;
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

  changeActive(id, status) {
    var obj = {
      "id": id,
      "status": status
    }
    this.dataService.changeActiveSupplier(obj).subscribe( res => {
      this.getSupplierData();
    });
  }

  changeHome(id, home) {
    var obj = {
      "id": id,
      "home": home
    }
    this.dataService.changeHomeSupplier(obj).subscribe( res => {
      this.getSupplierData();
    })
  }

  deleteData(id) {
    this.dataService.deleteSupplierData(id).subscribe( res => {
      console.log(id);
      this.getSupplierData();
    });
  } 
}