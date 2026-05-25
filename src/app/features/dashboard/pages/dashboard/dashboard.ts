import { Component } from '@angular/core';
import { DashboardCard } from '../../../../shared/dashboard-card/dashboard-card';
import { ChartWidget } from '../../../../shared/chart-widget/chart-widget';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardCard, ChartWidget, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  
}
