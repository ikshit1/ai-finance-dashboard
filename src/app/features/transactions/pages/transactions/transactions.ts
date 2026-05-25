import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SearchBar } from '../../../../shared/components/search-bar/search-bar';
import { TransactionsTable } from '../../../../shared/transactions-table/transactions-table';
import { TransactionsService } from '../../../../core/services/transactions.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [SearchBar, TransactionsTable, CommonModule],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions implements OnInit {
  transactions: any[] = [];
  isLoading = true;
  constructor(private transactionsService: TransactionsService, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
  this.transactionsService
    .getTransactions()
    .subscribe({
      next: (data: any) => {
        this.transactions = data;
        this.isLoading = false;
        console.log('LOADING', this.isLoading);
        this.cdr.detectChanges();
      },

      error: () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      },
    });
  }
}
