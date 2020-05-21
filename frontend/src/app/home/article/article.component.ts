import { HomeService } from './../../services/home/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  dataArr: any;
  imageDirectoryPath = 'http://localhost:8000/image/article/';
  topArticleArr: any;
  relateArticleArr: any;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getArticles();
    this.getTopArticle();
    this.getRelateArticle();
  }

  loadPage() {
    setTimeout(function () {
      location.reload()
    }, 100);
  }

  getRelateArticle() {
    this.homeService.getRelateArticle().subscribe( res => {
      this.relateArticleArr = res;
    })
  }

  getTopArticle() {
    this.homeService.getTopArticle().subscribe( res => {
      this.topArticleArr = res;
    })
  }

  getArticles() {
    this.homeService.getArticles().subscribe( res => {
      this.dataArr = res;
    })
  }
}
