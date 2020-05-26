import { HomeService } from './../../../services/home/home.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  id: any;
  name: any;
  imageDirectoryPath = 'http://localhost:8000/image/article/';
  dataArr: any;
  topArticleArr: any;
  relateArticleArr: any;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.handleSlug(this.route.snapshot.params.slug);
    this.updateView(this.id);
    this.getDetailArticle(this.id);
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

  getDetailArticle(id) {
    this.homeService.getDetailArticle(id).subscribe( res => {
      this.dataArr = res
    })
  }

  updateView(id) {
    var obj = {
      "id": id
    }
    this.homeService.updateView(obj).subscribe( res => {});
  }

  handleSlug(arr) {
    var nameArr = arr.split('-');
    this.name = nameArr.join(' ');
  }
}
