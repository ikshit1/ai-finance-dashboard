import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeExpenseChart } from './income-expense-chart';

describe('IncomeExpenseChart', () => {
  let component: IncomeExpenseChart;
  let fixture: ComponentFixture<IncomeExpenseChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeExpenseChart],
    }).compileComponents();

    fixture = TestBed.createComponent(IncomeExpenseChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
