import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private apiUrl =
    'http://localhost:4000/api/transactions';
  constructor(private http: HttpClient) {}

  getTransactions(search = '', type = '') {
    return this.http.get(
      `${this.apiUrl}?search=${search}&type=${type}`
    );
  }

  createTransaction(data: any) {

    return this.http.post(
      this.apiUrl,
      data
    );
  }

  deleteTransaction(id: string) {
    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }
}
