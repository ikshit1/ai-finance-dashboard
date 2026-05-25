import { Component, OnInit } from '@angular/core';
import { IncomeExpenseChart } from '../components/income-expense-chart/income-expense-chart';

@Component({
  selector: 'app-chart-widget',
  imports: [IncomeExpenseChart],
  templateUrl: './chart-widget.html',
  styleUrl: './chart-widget.scss',
})
export class ChartWidget implements OnInit {
  ngOnInit(): void {
    // Chart initialization will happen here if needed
  }
}
