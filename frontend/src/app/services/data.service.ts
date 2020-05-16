import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  data: any;
  private baseUrl = 'http://localhost:8000/admin/supplier';

  constructor(
    private httpClient: HttpClient
  ) { }

  //supplier
  getSupplier() {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  insertData(data) {
    return this.httpClient.post(`${this.baseUrl}/create`, data);
  }

  updateData(id, data) {
    return this.httpClient.post(`${this.baseUrl}/update/` + id, data);
  }

  deleteData(id) {
    return this.httpClient.delete(`${this.baseUrl}/delete/` + id);
  }

  getOneSupplier(id) {
    return this.httpClient.get(`${this.baseUrl}/` + id);
  }

  //category

}
