import { DataService } from './../../services/data.service';
import { HomeService } from './../../services/home/home.service';
import { AuthService } from './../../services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productbought',
  templateUrl: './productbought.component.html',
  styleUrls: ['./productbought.component.css']
})
export class ProductboughtComponent implements OnInit {

  idTransaction: any;
  dataUser: any;
  idProduct: any[] = [];
  p: number = 1;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.getUserInfor();
  }

  getUserInfor() {
    let email = this.tokenService.getEmail();
    var obj = {
      "email": email
    }
    this.authService.getDataUser(obj).subscribe( 
      data => this.handleData(data),
      error => console.log(error)
    );
  }

  handleData(data) {
    this.dataUser = data;
    this.getDataTransaction(this.dataUser.id);
  }

  getDataTransaction(id) {
    this.dataService.getUserTransaction(id).subscribe( 
      data => this.passUserIdTransaction(data),
      error => console.log(error)
    );
  }

  passUserIdTransaction(data) {
  //   this.idTransaction = data;
  //   this.idTransaction.forEach(ele => {
  //     this.dataService.getProductByIdTransaction(ele.id).subscribe( res => {

  //     });
  //   });
  }
}
