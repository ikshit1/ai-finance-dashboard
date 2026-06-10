import { CommonModule } from '@angular/common';
import {
  Component,
  Input
} from '@angular/core';

import {
  MatIconModule
} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-card',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './dashboard-card.html',
  styleUrl: './dashboard-card.scss'
})
export class DashboardCard {

  @Input()
  title = '';

  @Input()
  amount = '';

  @Input()
  icon = '';

  @Input()
  status = '';

  @Input()
  cardType = '';

}