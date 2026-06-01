import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TransactionsService } from '../../../../core/services/transactions.service';

@Component({
  selector: 'app-add-transaction-modal',
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],

  templateUrl:
    './add-transaction-modal.html',

  styleUrls:
    ['./add-transaction-modal.scss'],
})
export class AddTransactionModal {

  @Output() close =
    new EventEmitter<void>();

  @Output() transactionAdded = new EventEmitter<void>();

  transactionForm: import('@angular/forms').FormGroup<{
    amount: import('@angular/forms').FormControl<string>;
    category: import('@angular/forms').FormControl<string>;
    type: import('@angular/forms').FormControl<string>;
    status: import('@angular/forms').FormControl<string>;
  }>;

  constructor(
    private fb: FormBuilder,
    private transactionsService: TransactionsService
  ) {
    this.transactionForm = this.fb.nonNullable.group({
      amount: this.fb.nonNullable.control('', { validators: [Validators.required] }),
      category: this.fb.nonNullable.control('', { validators: [Validators.required] }),
      type: this.fb.nonNullable.control('Expense', { validators: [Validators.required] }),
      status: this.fb.nonNullable.control('Completed', { validators: [Validators.required] }),
    });
  }


  submit(): void {

    if (
      this.transactionForm.invalid
    ) {
      return;
    }

    this.transactionsService
      .createTransaction(
        this.transactionForm.value
      )
      .subscribe({
        next: () => {

          this.transactionAdded.emit();

          this.close.emit();
        },
      });
  }
}