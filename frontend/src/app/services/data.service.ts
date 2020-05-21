import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  data: any;
  
  private baseSupplierUrl = 'http://localhost:8000/admin/supplier';
  private baseCategoryUrl = 'http://localhost:8000/admin/category';
  private baseArticleUrl = 'http://localhost:8000/admin/article';
  private baseProductUrl = 'http://localhost:8000/admin/product';
  private baseUserUrl = 'http://localhost:8000/admin/user';

  constructor(
    private httpClient: HttpClient
  ) { }

  //supplier
  getSupplier() {
    return this.httpClient.get(`${this.baseSupplierUrl}`);
  }

  insertSupplierData(data) {
    return this.httpClient.post(`${this.baseSupplierUrl}/create`, data);
  }

  updateSupplierData(id, data) {
    return this.httpClient.post(`${this.baseSupplierUrl}/update/` + id, data);
  }

  deleteSupplierData(id) {
    return this.httpClient.delete(`${this.baseSupplierUrl}/delete/` + id);
  }

  getOneSupplier(id) {
    return this.httpClient.get(`${this.baseSupplierUrl}/` + id);
  }

  //category
  insertCategoryData(data) {
    return this.httpClient.post(`${this.baseCategoryUrl}/create`, data);
  }

  getCategory() {
    return this.httpClient.get(`${this.baseCategoryUrl}`);
  }

  updateCategoryData(id, data) {
    return this.httpClient.post(`${this.baseCategoryUrl}/update/` + id, data);
  }

  deleteCategoryData(id) {
    return this.httpClient.delete(`${this.baseCategoryUrl}/delete/` + id);
  }

  getOneCategory(id) {
    return this.httpClient.get(`${this.baseCategoryUrl}/` + id);
  }

  //article
  insertArticleData(data) {
    return this.httpClient.post(`${this.baseArticleUrl}/create`, data);
  }

  getArticle() {
    return this.httpClient.get(`${this.baseArticleUrl}`);
  }

  searchArticle(data) {
    return this.httpClient.get(`${this.baseArticleUrl}/search?` + data);
  }

  updateArticleData(id, data) {
    return this.httpClient.post(`${this.baseArticleUrl}/update/` + id, data);
  }

  deleteArticleData(id) {
    return this.httpClient.delete(`${this.baseArticleUrl}/delete/` + id);
  }

  getOneArticle(id) {
    return this.httpClient.get(`${this.baseArticleUrl}/` + id);
  }

  //product
  insertProductData(data) {
    return this.httpClient.post(`${this.baseProductUrl}/create`, data);
  }

  getProduct() {
    return this.httpClient.get(`${this.baseProductUrl}`);
  }

  searchCateProduct(id) {
    return this.httpClient.get(`${this.baseProductUrl}/cate/` + id);
  }

  searchProduct(data) {
    return this.httpClient.get(`${this.baseProductUrl}/search?search_string=` + data);
  }

  searchMultiProduct(id) {
    return this.httpClient.get(`${this.baseProductUrl}/multi/` + id);
  }

  updateProductData(id, data) {
    return this.httpClient.post(`${this.baseProductUrl}/update/` + id, data);
  }

  deleteProductData(id) {
    return this.httpClient.delete(`${this.baseProductUrl}/delete/` + id);
  }

  getOneProduct(id) {
    return this.httpClient.get(`${this.baseProductUrl}/` + id);
  }
  //user data
  getUser() {
    return this.httpClient.get(`${this.baseUserUrl}`);
  }
}
