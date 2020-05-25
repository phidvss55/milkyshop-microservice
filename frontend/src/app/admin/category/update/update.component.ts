import { DataService } from './../../../services/data.service';
import { Category } from '../category.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: any;
  category = new Category();
  data: any;
  supplierArr: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
    this.getSuppliers();
  }

  getSuppliers() {
    this.dataService.getSupplier().subscribe( res => {
      this.supplierArr = res;
    });
  }
  
  updateData() {
    let formData = new FormData();
    formData.append('data', JSON.stringify(this.category));
    formData.append('_method', 'PUT');
    
    this.dataService.updateCategoryData(this.id, formData).subscribe( 
      data => this.handleData(data),
      error => console.log(error)
    );
  }

  handleData(data) {
    this.router.navigateByUrl('/admin/category');
  }

  getData() {
    this.dataService.getOneCategory(this.id).subscribe( res => {
      this.data = res;
      this.category = this.data;
    });
  }

}
