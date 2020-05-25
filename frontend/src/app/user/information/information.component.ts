import { TokenService } from 'src/app/services/token.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  public form = {
    name: null,
    phone: null,
    address: null,
    about: null
  }

  dataArr: any;
  file: any;
  imageSrc: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private token: TokenService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  updateData() {
    let formData = new FormData();

    if(this.file) {
      formData.append('avatar', this.file, this.file.name);
    }
    formData.append('data', JSON.stringify(this.form));
    formData.append('_method', 'PUT');
    
    this.auth.updateInfor(this.token.getEmail(), formData).subscribe( 
      data => this.handleData(data),
      error => console.log(error)
    );
  }

  getData() {
    var obj = {
      "email": this.token.getEmail()
    }
    this.auth.getDataUser(obj).subscribe(res => {
      this.dataArr = res;
      this.form = this.dataArr;
    });
  }

  handleData(data) {
    this.router.navigateByUrl('/user');
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
