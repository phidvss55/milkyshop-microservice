import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseTransactionUrl = 'http://localhost:8000/admin/transaction';

  constructor(
    private httpClient: HttpClient
  ) { }

  //transaction
  getTransaction() {
    return this.httpClient.get(`${this.baseTransactionUrl}`);
  }
}
