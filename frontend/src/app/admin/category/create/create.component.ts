import { DataService } from './../../../services/data.service';
import { Category } from './../category.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  category = new Category();
  supplierArr: any;
  
  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSuppliers();
  }

  getSuppliers() {
    this.dataService.getSupplier().subscribe( res => {
      this.supplierArr = res;
      console.log(this.supplierArr);
    });
  }

  // res => {console.log(res);}
  insertData() {
    console.log(this.category);
    this.dataService.insertCategoryData(this.category).subscribe(
      data => this.handleData(data),
      error => console.log(error)
    );
  }

  handleData(data) {
    this.router.navigateByUrl('/admin/category');
  }

}
