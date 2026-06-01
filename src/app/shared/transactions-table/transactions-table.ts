import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-transactions-table',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './transactions-table.html',
  styleUrl: './transactions-table.scss',
})
export class TransactionsTable {
  @Input() transactions: any[] = [];
  @Output() delete = new EventEmitter<string>();

  deleteTransaction(id: string): void {
    this.delete.emit(id);
  }
}
