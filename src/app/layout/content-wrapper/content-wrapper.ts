import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Sidebar } from '../sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content-wrapper',
  imports: [Navbar, Sidebar, CommonModule, RouterOutlet],
  templateUrl: './content-wrapper.html',
  styleUrl: './content-wrapper.scss',
})
export class ContentWrapper {
  isSidebarOpen = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
