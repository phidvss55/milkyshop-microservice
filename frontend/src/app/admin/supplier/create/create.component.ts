import { DataService } from './../../../services/data.service';
import { Supplier } from '../supplier.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  file: any;
  imageSrc: string;
  supplier = new Supplier();
  
  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  insertData() {
    let formData = new FormData();
    console.log(this.file);
    if(this.file) {
      formData.append('s_avatar', this.file, this.file.name);
    }
    formData.append('data', JSON.stringify(this.supplier));
    this.dataService.insertSupplierData(formData).subscribe( 
      data => this.handleData(data),
      error => console.log(error)
    );
  }

  handleData(data) {
    this.router.navigateByUrl('/admin/supplier');
  }

  imageUpload(event) {
    this.file = event.target.files[0];
  }

  readURL(event) {
    let files = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (e: any) => {
        // this.imageSrc = event.target.result;
        this.imageSrc = e.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
