import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Theme } from '../../core/services/theme';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  @Output() menuClick = new EventEmitter<void>();
  constructor(private themeService: Theme) {}
  toggleMenu(): void {
    this.menuClick.emit();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
