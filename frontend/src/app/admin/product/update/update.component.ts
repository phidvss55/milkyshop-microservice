import { DataService } from './../../../services/data.service';
import { Product } from './../product.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  product = new Product();
  id: any;
  data: any;
  file: any;
  imageSrc: string;
  categoriesArr: any;
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
    this.getCategories()
  }

  getCategories() {
    this.dataService.getCategory().subscribe( res => {
      this.categoriesArr = res;
      console.log(this.categoriesArr);
    });
  }

  updateData() {
    let formData = new FormData();
    if(this.file) {
      formData.append('pro_avatar', this.file, this.file.name);
    }    
    formData.append('data', JSON.stringify(this.product));
    formData.append('_method', 'PUT');
    
    this.dataService.updateProductData(this.id, formData).subscribe( 
      data => this.handleData(data),
      error => console.log(error)
    );
  }

  handleData(data) {
    this.router.navigateByUrl('/admin/product');
  }

  getData() {
    this.dataService.getOneProduct(this.id).subscribe( res => {
      this.data = res;
      this.product = this.data;
    });
  }

  imageUpload(event) {
    this.file = event.target.files[0];
    console.log(this.file);
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
