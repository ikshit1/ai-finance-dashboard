import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export interface CategoryBreakdown {

  category: string;

  amount: number;

}

export interface AnalyticsInterface {

  income: number;

  expense: number;

  monthlySavings: number;

  totalSavings: number;

  monthlyBudget: number;

  monthlySalary: number;

  totalMonthlyEmi: number;

  activeLoans: number;

  totalOutstanding: number;

  healthScore: number;

  insights: string[];

  categoryBreakdown: CategoryBreakdown[];

}

@Injectable({
  providedIn: 'root'
})
export class Analytics {

  private apiUrl =
    'http://localhost:4000/api/analytics';

  constructor(
    private http: HttpClient
  ) {}

  getAnalytics():
    Observable<AnalyticsInterface> {

    return this.http.get<AnalyticsInterface>(
      this.apiUrl
    );

  }

}