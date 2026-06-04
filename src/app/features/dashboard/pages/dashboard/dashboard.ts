import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '../../../../shared/dashboard-card/dashboard-card';
import { ChartWidget } from '../../../../shared/chart-widget/chart-widget';
import { CommonModule } from '@angular/common';
import { Analytics, AnalyticsInterface } from '../../../../core/services/analytics';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCard, ChartWidget, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  analytics!: AnalyticsInterface;

  constructor(private analyticsService: Analytics) {}
  
  ngOnInit(): void {
    this.getAnalytics();
  }

  getAnalytics(): void {
      this.analyticsService
      .getAnalytics()
      .subscribe({

        next: (
          response
        ) => {

          this.analytics =
            response;

        }

      });
  }
}
