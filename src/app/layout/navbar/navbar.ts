import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  @Output() menuClick = new EventEmitter<void>();

  toggleMenu(): void {
    this.menuClick.emit();
  }
}
