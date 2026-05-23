import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart-widget',
  imports: [CommonModule],
  templateUrl: './chart-widget.html',
  styleUrl: './chart-widget.scss',
})
export class ChartWidget implements OnInit {
  chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [80000, 85000, 90000, 88000, 92000, 95000],
        backgroundColor: '#3b82f6',
      },
      {
        label: 'Expenses',
        data: [35000, 38000, 32000, 40000, 35000, 38000],
        backgroundColor: '#ef4444',
      },
    ],
  };

  ngOnInit(): void {
    // Chart initialization will happen here if needed
  }
}
