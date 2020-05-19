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

  updateArticleData(id, data) {
    return this.httpClient.post(`${this.baseArticleUrl}/update/` + id, data);
  }

  deleteArticleData(id) {
    return this.httpClient.delete(`${this.baseArticleUrl}/delete/` + id);
  }

  getOneArticle(id) {
    return this.httpClient.get(`${this.baseArticleUrl}/` + id);
  }

}
