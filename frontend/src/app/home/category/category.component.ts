import { DataService } from './../../services/data.service';
import { HomeService } from './../../services/home/home.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  id: any;
  name: any;
  productsArr: any;
  categoriesArr: any;

  imageDirectoryPath = 'http://localhost:8000/image/product/';

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.handleSlug(this.route.snapshot.params.slug);
    this.getProductInId(this.id);
    this.getCategories();
  }

  searchProArrange(key_word) {
    var obj = {
      "cate_id": this.id,
      "key_word": key_word
    }
    event.preventDefault();
    this.homeService.searchProViaCategory(obj).subscribe(res => {
      this.productsArr = res;
    });
  }
  
  loadPage() {
    setTimeout(function () {
      location.reload()
    }, 100);
  }

  getCategories() {
    this.dataService.getCategory().subscribe( res => {
      this.categoriesArr = res;
    });
  }

  getProductInId(id) {
    this.homeService.getProductInCategory(id).subscribe( res => {
      this.productsArr = res;
    });
  }

  handleSlug(arr) {
    var nameArr = arr.split('-');
    this.name = nameArr.join(' ');
  }
}
