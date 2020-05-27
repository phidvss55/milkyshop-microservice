import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  p: number = 1;
  ratingsArr: any;
  usersArr: any;
  productsArr: any;
  
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getRatingData();
    this.getUserInfor();
    this.getProductsData();
  }

  deleteData(id) {
    this.dataService.deleteRating(id).subscribe( res => {
      this.getRatingData();
    });
  } 

  getProductsData() {
    this.dataService.getProduct().subscribe( res => {
      this.productsArr = res;
    });
  }

  getUserInfor() {
    this.dataService.getUser().subscribe( res => {
      this.usersArr = res;
    })
  }

  getRatingData() {
    this.dataService.getRating().subscribe( res => {
      this.ratingsArr = res;
      console.log(res);
      
    });
  }

}
