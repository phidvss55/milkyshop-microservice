import { DataService } from './../../../services/data.service';
import { Supplier } from './../supplier';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  imageDirectoryPath = 'http://localhost:8000/public/image';
  file: any;
  imageSrc: string;
  supplier = new Supplier();
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  getSupplierData() {
    this.dataService.getData().subscribe( res => {
      // this.dataArr = res;
    });
  }

  insertData() {
    let formData = new FormData();
    console.log(this.file);
    if(this.file) {
      formData.append('s_avatar', this.file, this.file.name);
    }
    // this.employee.hobby = this.selectedHobbyArr.toString();
    formData.append('data', JSON.stringify(this.supplier));
    this.dataService.insertData(formData).subscribe( res => {
      // this.getSupplierData();
      alert('chen data thanh cong' + res)
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
        // this.imageSrc = event.target.result;
        this.imageSrc = e.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
