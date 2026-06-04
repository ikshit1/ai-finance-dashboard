import {
  Component,
  OnInit
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
  form: FormGroup;

  constructor(
    private debtService: Debt,
    private fb: FormBuilder
  ) {

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
          0
        ],

        interestRate: [
          0
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
      next: (debts) => {
          this.debts = debts;
        }
      });
  }

  onSubmit(): void {

    if (this.form.invalid) {
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

        }

      });

  }

  deleteDebt(
    id: string
  ): void {

    this.debtService
      .deleteDebt(id)
      .subscribe({
        next: () => {
          this.loadDebts();
        }
      });
  }

}