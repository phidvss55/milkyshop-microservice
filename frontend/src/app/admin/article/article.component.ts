import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  dataArr: any;
  imageDirectoryPath = 'http://localhost:8000/image/article/';
  
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getArticleData();
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
