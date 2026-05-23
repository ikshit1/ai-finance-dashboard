import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions-table',
  imports: [CommonModule],
  templateUrl: './transactions-table.html',
  styleUrl: './transactions-table.scss',
})
export class TransactionsTable {
  transactions = [
    {
      id: 1,
      date: '22 May 2026',
      category: 'Food',
      amount: '₹450',
      type: 'Expense',
      status: 'Completed',
    },
    {
      id: 2,
      date: '21 May 2026',
      category: 'Salary',
      amount: '₹80,000',
      type: 'Income',
      status: 'Received',
    },
    {
      id: 3,
      date: '20 May 2026',
      category: 'EMI',
      amount: '₹21,148',
      type: 'Expense',
      status: 'Pending',
    },
    {
      id: 4,
      date: '19 May 2026',
      category: 'Shopping',
      amount: '₹3,200',
      type: 'Expense',
      status: 'Completed',
    },
    {
      id: 5,
      date: '18 May 2026',
      category: 'Freelancing',
      amount: '₹12,000',
      type: 'Income',
      status: 'Received',
    },
    {
      id: 6,
      date: '17 May 2026',
      category: 'Electricity Bill',
      amount: '₹2,100',
      type: 'Expense',
      status: 'Completed',
    },
  ];
}
