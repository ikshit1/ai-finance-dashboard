import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DashboardCard } from '../../../../shared/dashboard-card/dashboard-card';
import { ChartWidget } from '../../../../shared/chart-widget/chart-widget';
import { CommonModule } from '@angular/common';
import { Analytics, AnalyticsInterface } from '../../../../core/services/analytics';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCard, ChartWidget, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: true
})
export class Dashboard implements OnInit {
  analytics!: AnalyticsInterface;
  isAnalyticsLoading = true;

  constructor(private analyticsService: Analytics, private cdr: ChangeDetectorRef) {}
  
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
          this.analytics = response;
          this.isAnalyticsLoading = false;
          this.cdr.detectChanges();
        }
      });
  }
}
