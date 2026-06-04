import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export interface DebtInterface {
  _id?: string;
  type: string;
  lender: string;
  emi: number;
  outstandingAmount: number;
  interestRate: number;

}

@Injectable({
  providedIn: 'root'
})

export class Debt {

  private apiUrl = 'http://localhost:4000/api/debts';

  constructor(
    private http: HttpClient
  ) {}

  getDebts(): Observable<DebtInterface[]> {
    return this.http.get<DebtInterface[]>(
      this.apiUrl
    );
  }

  createDebt(debt: DebtInterface) {
    return this.http.post(
      this.apiUrl,
      debt
    );
  }

  deleteDebt(id: string) {
    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }
}