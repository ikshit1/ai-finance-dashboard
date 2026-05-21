import { Component } from '@angular/core';
import { Navbar } from '../../../../layout/navbar/navbar';
import { Sidebar } from '../../../../layout/sidebar/sidebar';
import { DashboardCard } from '../../../../shared/dashboard-card/dashboard-card';
import { ChartWidget } from '../../../../shared/chart-widget/chart-widget';
import { TransactionsTable } from '../../../../shared/transactions-table/transactions-table';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, Sidebar, DashboardCard, ChartWidget, TransactionsTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
