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

  getData() {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  insertData(data) {
    // return this.httpClient.post('http://localhost:8000/admin/supplier/create', data);
    return this.httpClient.post(`${this.baseUrl}/create`, data);
  }
}
