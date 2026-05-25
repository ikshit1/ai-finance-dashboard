import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  ChartConfiguration,
  ChartType,
} from 'chart.js';

@Component({
  selector: 'app-income-expense-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './income-expense-chart.html',
  styleUrls: ['./income-expense-chart.scss'],
})
export class IncomeExpenseChart {
  public barChartType: 'bar' = 'bar';

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: [80000, 75000, 90000, 85000, 95000],
        label: 'Income',
        backgroundColor: '#2563eb',
        borderRadius: 8,
      },
      {
        data: [35000, 40000, 30000, 45000, 38000],
        label: 'Expenses',
        backgroundColor: '#ef4444',
        borderRadius: 8,
      },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: 'top',
      },
    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
}