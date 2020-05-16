import { DataService } from './../../../services/data.service';
import { Supplier } from './../supplier.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: any;
  supplier = new Supplier();
  data: any;
  file: any;
  imageSrc: string;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  updateData() {
    let formData = new FormData();
    if(this.file) {
      formData.append('s_avatar', this.file, this.file.name);
    }    
    formData.append('data', JSON.stringify(this.supplier));
    formData.append('_method', 'PUT');
    
    this.dataService.updateData(this.id, formData).subscribe( res => {
      console.log(res);
    });
  }

  getData() {
    this.dataService.getOneSupplier(this.id).subscribe( res => {
      this.data = res;
      this.supplier = this.data;
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
        // this.imageSrc = event.target.result;
        this.imageSrc = e.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
