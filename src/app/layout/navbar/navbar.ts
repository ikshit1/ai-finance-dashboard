import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Theme } from '../../core/services/theme';
import { Router } from '@angular/router';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  @Output() menuClick = new EventEmitter<void>();
  constructor(private themeService: Theme, private authService: Auth, private router: Router) {}
  toggleMenu(): void {
    this.menuClick.emit();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
