import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Profile } from '../../../../core/services/profile';

@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private profileService: Profile
  ) {
    this.form = this.fb.group({
      monthlyBudget:[0],
      totalSavings:[0],
      monthlySalary:[0]
    });
  }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {

    this.profileService
      .getProfile()
      .subscribe({
        next: (profile: any) => {
          if (!profile) {
            return;
          }
          this.form.patchValue({
            monthlyBudget:
              profile.monthlyBudget,
            totalSavings:
              profile.totalSavings,
            monthlySalary:
              profile.monthlySalary,
            homeLoanEmi:
              profile.homeLoanEmi,
            otherEmi:
              profile.otherEmi
          });
        },
        error: (error) => {
          console.error(error);
        }
      });

  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.profileService
      .saveProfile(
        this.form.value
      )
      .subscribe({
        next: () => {
          this.loading = false;
          alert(
            'Profile saved successfully'
          );
        },

        error: (error) => {
          this.loading = false;
          console.error(error);
          alert(
            'Failed to save profile'
          );
        }

      });

  }
}
