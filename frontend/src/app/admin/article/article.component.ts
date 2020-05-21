import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  p: number = 1;
  dataArr: any;
  search_value: any;
  imageDirectoryPath = 'http://localhost:8000/image/article/';
  
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getArticleData();
  }

  search() {
    var obj = {
      search_string: this.search_value
    }
    this.dataService.searchArticle(obj.search_string).subscribe(
      data => this.handleData(data),
      error => console.log(error)
    );
  }

  changeActive(id, active) {
    var obj = {
      "id": id,
      "active": active
    }
    this.dataService.changeActiveArticle(obj).subscribe( res => {
      this.getArticleData();
    });
  }

  handleData(data) {
    this.dataArr = data.data;
    this.search_value = "";
  }

  getArticleData() {
    this.dataService.getArticle().subscribe( res => {
      this.dataArr = res;
    });
  }

  deleteData(id) {
    this.dataService.deleteArticleData(id).subscribe( res => {
      this.getArticleData();
    });
  } 

}
