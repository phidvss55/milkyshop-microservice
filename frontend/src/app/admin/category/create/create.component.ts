import { DataService } from './../../../services/data.service';
import { Category } from './../category.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  category = new Category();
  supplierArr: any;
  constructor(
    private dataService: DataService 
  ) { }

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers() {
    this.dataService.getSupplier().subscribe( res => {
      console.log(this.supplierArr);
      
      this.supplierArr = res;
    });
  }

  insertData() {
    
  }

}
