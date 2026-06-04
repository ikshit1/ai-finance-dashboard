import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  DebtInterface,
  Debt
} from '../../core/services/debt';

@Component({
  selector: 'app-debts',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './debts.html',
  styleUrl: './debts.scss'
})
export class Debts implements OnInit {

  debts: DebtInterface[] = [];
  totalEmi = 0;
  totalOutstanding = 0;
  form: FormGroup;

  constructor(private debtService: Debt, private fb: FormBuilder, private cdr: ChangeDetectorRef) {

    this.form =
      this.fb.group({
        type: [
          '',
          Validators.required
        ],
        lender: [
          '',
          Validators.required
        ],
        emi: [
          0,
          Validators.required
        ],
        outstandingAmount: [
          0,
          Validators.required
        ],
        interestRate: [
          0,
          Validators.required
        ]
      });

  }

  ngOnInit(): void {
    this.loadDebts();
  }

  loadDebts(): void {

    this.debtService
      .getDebts()
      .subscribe({
        next: (
          debts
        ) => {

          this.debts = debts;
          this.calculateSummary();
          this.cdr.detectChanges();
        },

        error: (
          error
        ) => {

          console.error(
            error
          );

        }

      });

  }

   calculateSummary(): void {

    this.totalEmi =
      this.debts.reduce(

        (
          sum,
          debt
        ) =>

          sum +
          debt.emi,

        0

      );

    this.totalOutstanding =
      this.debts.reduce(

        (
          sum,
          debt
        ) =>

          sum +
          debt.outstandingAmount,

        0

      );

  }

  onSubmit(): void {

    if (
      this.form.invalid
    ) {

      return;

    }

    this.debtService
      .createDebt(
        this.form.value
      )
      .subscribe({

        next: () => {

          this.loadDebts();

          this.form.reset({

            type: '',

            lender: '',

            emi: 0,

            outstandingAmount: 0,

            interestRate: 0

          });

        },

        error: (
          error
        ) => {

          console.error(
            error
          );

        }

      });

  }

   deleteDebt(
    id: string
  ): void {

    const confirmDelete =
      confirm(
        'Delete this loan?'
      );

    if (
      !confirmDelete
    ) {

      return;

    }

    this.debtService
      .deleteDebt(id)
      .subscribe({

        next: () => {

          this.loadDebts();

        },

        error: (
          error
        ) => {

          console.error(
            error
          );

        }

      });

  }

}
