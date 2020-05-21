import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseTransactionUrl = 'http://localhost:8000/admin/transaction'; // ???????? change to data service
  private baseProductUrl = 'http://localhost:8000/home/product';
  private baseArticleUrl = 'http://localhost:8000/home/article';

  constructor(
    private httpClient: HttpClient
  ) { }

  //articles
  getArticles() {
    return this.httpClient.get(`${this.baseArticleUrl}`);
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

  //get product HomeProudctController
  getProducts() {
    return this.httpClient.get(`${this.baseProductUrl}`);
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

  //transaction
  getTransaction() {
    return this.httpClient.get(`${this.baseTransactionUrl}`);
  }
}
