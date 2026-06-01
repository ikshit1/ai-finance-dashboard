import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { Router, RouterLink } from '@angular/router';

import {
  Auth,
  AuthResponse
} from '../../../../core/services/auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})

export class Signup {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private router: Router
  ) {

    this.form = this.fb.group({

      name: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]

    });

  }

  onSubmit(): void {

    if (this.form.invalid) {
      return;
    }

    this.authService
      .register(this.form.value)
      .subscribe({

        next: (
          response: AuthResponse
        ) => {

          this.authService.saveToken(
            response.token
          );

          this.router.navigate([
            '/dashboard'
          ]);

        },

        error: error => {

          console.error(error);

        }

      });

  }

}