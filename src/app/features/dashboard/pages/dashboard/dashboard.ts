import { Component } from '@angular/core';
import { Navbar } from '../../../../layout/navbar/navbar';
import { Sidebar } from '../../../../layout/sidebar/sidebar';
import { DashboardCard } from '../../../../shared/dashboard-card/dashboard-card';
import { ChartWidget } from '../../../../shared/chart-widget/chart-widget';
import { TransactionsTable } from '../../../../shared/transactions-table/transactions-table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, Sidebar, DashboardCard, ChartWidget, TransactionsTable, CommonModule
    
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  isSidebarOpen = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
