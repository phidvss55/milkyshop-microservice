import { DataService } from './../../../services/data.service';
import { Product } from './../product.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product = new Product();
  file: any;
  imageSrc: string;
  categoriesArr: any;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  insertData() {
    let formData = new FormData();
    if(this.file) {
      formData.append('pro_avatar', this.file, this.file.name);
    }

    formData.append('data', JSON.stringify(this.product));

    this.dataService.insertProductData(formData).subscribe(
      data => this.handleData(data),
      error => console.log(error)
    );
  }

  handleData(data) {
    this.router.navigateByUrl('admin/product');
  }

  getCategories() {
    this.dataService.getCategory().subscribe( res => {
      this.categoriesArr = res;
      console.log(this.categoriesArr);
    });
  }

  imageUpload(event) {
    this.file = event.target.files[0];
  }

  readURL(event) {
    let files = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
