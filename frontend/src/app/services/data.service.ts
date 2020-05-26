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
  private baseContactUrl = 'http://localhost:8000/admin/contact';

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

  changeActiveSupplier(data) {
    return this.httpClient.post(`${this.baseSupplierUrl}/change-active`, data);
  }

  changeHomeSupplier(data) {
    return this.httpClient.post(`${this.baseSupplierUrl}/change-home`, data);
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

  changeActiveCategory(data) {
    return this.httpClient.post(`${this.baseCategoryUrl}/change-active`, data);
  }

  changeHomeCategory(data) {
    return this.httpClient.post(`${this.baseCategoryUrl}/change-home`, data);
  }

  //article -----------------------------------------------------------------------------------------
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

  changeActiveArticle(data) {
    return this.httpClient.post(`${this.baseArticleUrl}/change-active`, data);
  }

  //product ----------------------------------------------------------
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
  
  changeActiveProduct(data) {
    return this.httpClient.post(`${this.baseProductUrl}/change-active`, data);
  }

  changeHotProduct(data) {
    return this.httpClient.post(`${this.baseProductUrl}/change-home`, data);
  }

  //contact 
  getContacts() {
    return this.httpClient.get(`${this.baseContactUrl}`);
  }

  resolveContact(data) {
    return this.httpClient.post(`${this.baseContactUrl}/status`, data);
  }

  deleteContact(id) {
    return this.httpClient.delete(`${this.baseContactUrl}/delete/` + id);
  }
  //user data
  getUser() {
    return this.httpClient.get(`${this.baseUserUrl}`);
  }

  changeActiveUser(data) {
    return this.httpClient.post(`${this.baseUserUrl}/change-active`, data);
  }

  deleteUser(id) {
    return this.httpClient.delete(`${this.baseUserUrl}/delete/` + id);
  }
}
