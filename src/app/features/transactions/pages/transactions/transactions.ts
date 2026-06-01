import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SearchBar } from '../../../../shared/components/search-bar/search-bar';
import { TransactionsTable } from '../../../../shared/transactions-table/transactions-table';
import { TransactionsService } from '../../../../core/services/transactions.service';
import { AddTransactionModal } from '../../components/add-transaction-modal/add-transaction-modal';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [SearchBar, TransactionsTable, CommonModule, AddTransactionModal],
  templateUrl: './transactions.html',
  styleUrl: './transactions.scss',
})
export class Transactions implements OnInit {
  transactions: any[] = [];
  isLoading = true;
  isModalOpen = false;
  searchTerm = '';
  selectedType = '';

  constructor(private transactionsService: TransactionsService, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.fetchTransactions();
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  fetchTransactions(): void {
    this.transactionsService
    .getTransactions(this.searchTerm, this.selectedType)
    .subscribe({
      next: (response: any) => {
        this.transactions = response?.data || [];
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

  deleteTransaction(id: string): void {
    this.transactionsService
      .deleteTransaction(id)
      .subscribe({
        next: () => {

          this.fetchTransactions();
        },
      });
  }

  onSearch(value: string): void {

    this.searchTerm = value;

    this.fetchTransactions();
  }

  onTypeChange(event: Event): void {
    const value = (
      event.target as HTMLSelectElement
    ).value;

    this.selectedType = value;

    this.fetchTransactions();
  }
}
