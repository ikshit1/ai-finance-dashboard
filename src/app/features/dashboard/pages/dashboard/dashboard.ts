import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  DashboardCard
} from '../../../../shared/dashboard-card/dashboard-card';

import {
  ChartWidget
} from '../../../../shared/chart-widget/chart-widget';

import {
  Analytics,
  AnalyticsInterface
} from '../../../../core/services/analytics';

@Component({
  selector: 'app-dashboard',
  imports: [
    DashboardCard,
    ChartWidget,
    CommonModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: true
})
export class Dashboard
implements OnInit {

  analytics!: AnalyticsInterface;

  isAnalyticsLoading =
    true;

  constructor(

    private analyticsService:
      Analytics,

    private cdr:
      ChangeDetectorRef

  ) {}

  ngOnInit(): void {

    this.getAnalytics();

  }

  getAnalytics(): void {

    this.analyticsService
      .getAnalytics()
      .subscribe({

        next: response => {

          this.analytics =
            response;

          this.isAnalyticsLoading =
            false;

          this.cdr.detectChanges();

        }

      });

  }

  getHealthClass(): string {

  const score =
    this.analytics?.healthScore || 0;

  if (score >= 80) {

    return 'health-good';

  }

  if (score >= 60) {

    return 'health-medium';

  }

  return 'health-bad';

  }

  getHealthStatus(): string {

    const score =
      this.analytics?.healthScore || 0;

    if (score >= 80) {
      return 'Excellent 🟢';
    }

    if (score >= 60) {
      return 'Good 🟡';
    }

    if (score >= 40) {
      return 'Average 🟠';
    }

    return 'Poor 🔴';
  }
  
  getPrimaryRisk(): string {

    if (
      this.analytics?.totalMonthlyEmi >
      this.analytics?.monthlySalary * 0.5
    ) {

      return 'High EMI burden';

    }

    if (
      this.analytics?.monthlySavings < 0
    ) {

      return 'Negative savings';

    }

    return 'Healthy finances';

  }

  getAiSummary(): string {

    return `
      You earn ₹${this.analytics?.monthlySalary || 0}
      per month but ₹${this.analytics?.totalMonthlyEmi || 0}
      goes towards EMI payments.
      Reducing debt should be your top priority.
    `;

  }
}