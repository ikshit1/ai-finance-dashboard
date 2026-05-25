import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  getTransactions() {
    return of([
      {
        id: 1,
        date: '22 May 2026',
        category: 'Food',
        type: 'Expense',
        amount: '₹450',
        status: 'Completed',
      },
      {
        id: 2,
        date: '21 May 2026',
        category: 'Salary',
        type: 'Income',
        amount: '₹80,000',
        status: 'Received',
      },
      {
        id: 3,
        date: '20 May 2026',
        category: 'EMI',
        type: 'Expense',
        amount: '₹21,148',
        status: 'Pending',
      },
      {
        id: 4,
        date: '19 May 2026',
        category: 'Shopping',
        type: 'Expense',
        amount: '₹3,200',
        status: 'Completed',
      },
    ]).pipe(
      delay(100)
    );
  }
}
