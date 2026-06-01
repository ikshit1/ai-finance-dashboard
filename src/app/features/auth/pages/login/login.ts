import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import { Auth } from '../../../../core/services/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private router: Router
  ) {

    this.form = this.fb.group({

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [
        '',
        Validators.required
      ]

    });

  }

  onSubmit(): void {

    if (this.form.invalid) {
      return;
    }

    this.authService
      .login(this.form.value)
      .subscribe({

        next: (response: any) => {

          this.authService.saveToken(
            response.token
          );

          this.router.navigate([
            '/dashboard'
          ]);

        },

        error: (error: any) => {

          console.error(error);

          alert(
            error?.error?.message ||
            'Invalid credentials'
          );

        }

      });

  }

}