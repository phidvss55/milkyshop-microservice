import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseProductUrl = 'http://localhost:8000/home/product';
  private baseArticleUrl = 'http://localhost:8000/home/article';
  private baseCategoryeUrl = 'http://localhost:8000/home/category';
  private baseContactUrl = 'http://localhost:8000/home/contact';
  private baseShoppingUrl = 'http://localhost:8000/home/shopping'; //thanh-toan/{id}
  private baseRatingUrl = 'http://localhost:8000/home/rating';
  private baseHomeUrl = 'http://localhost:8000/home';

  constructor(
    private httpClient: HttpClient
  ) { }

  //articles
  getArticles() {
    return this.httpClient.get(`${this.baseArticleUrl}`);
  }

  getHomeArticles() {
    return this.httpClient.get(`${this.baseArticleUrl}/home-article/get`);
  }

  updateView(id) {
    return this.httpClient.post(`${this.baseArticleUrl}/updateView`, id);
  }

  getDetailArticle(id) {
    return this.httpClient.get(`${this.baseArticleUrl}/` + id);
  }

  getTopArticle() {
    return this.httpClient.get(`${this.baseArticleUrl}/top/article`);
  }

  getRelateArticle() {
    return this.httpClient.get(`${this.baseArticleUrl}/relate/article`);
  }

  //category
  getProductInCategory(id) {
    return this.httpClient.get(`${this.baseCategoryeUrl}/get/` + id);
  }

  searchProViaCategory(data) {
    return this.httpClient.post(`${this.baseCategoryeUrl}/search`, data);
  }

  //get product HomeProudctController
  getProducts() {
    return this.httpClient.get(`${this.baseProductUrl}`);
  }

  updateViewProduct(id) {
    return this.httpClient.post(`${this.baseProductUrl}/update-view`, id);
  }

  getLoveProduct() {
    return this.httpClient.get(`${this.baseProductUrl}/love-product`);
  }

  loveProducts(data) {
    return this.httpClient.post(`${this.baseProductUrl}/love-product`, data);
  }
  
  searchProduct(data) {
    return this.httpClient.post(`${this.baseProductUrl}/search`, data);
  }

  //homeproductdetailcontroller
  getOneProducts(id) {
    return this.httpClient.get(`${this.baseProductUrl}/` + id);
  }

  getPayProduct() {
    return this.httpClient.get(`${this.baseProductUrl}/pay/top`);
  }

  getRelateProduct(id) {
    return this.httpClient.get(`${this.baseProductUrl}/relate-product/` + id);
  }

  //contact 
  insertContact(data) {
    return this.httpClient.post(`${this.baseContactUrl}`, data);
  }

  //shopping cart
  saveInforCart(data) {
    return this.httpClient.post(`${this.baseShoppingUrl}/thanh-toan`, data);
  }

  //Home
  getDiscountProduct() {
    return this.httpClient.get(`${this.baseHomeUrl}/get-discount`);
  }

  getHotestProduct() {
    return this.httpClient.get(`${this.baseHomeUrl}/get-hotest`);
  }

  getNewestProduct() {
    return this.httpClient.get(`${this.baseHomeUrl}/get-newest`);
  }

  //rating
  saveRating(data) {
    return this.httpClient.post(`${this.baseRatingUrl}/save-rating`, data);
  }

  // getListProduct() {
  //   return this.httpClient.get(`${this.baseShoppingUrl}/danh-sach`);
  // }
}
