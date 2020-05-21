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

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.homeService.getArticles().subscribe( res => {
      this.dataArr = res;
    })
  }
}
