// app/components/footer-nav/footer-nav.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-nav',
   imports: [CommonModule],
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent {
  navItems = [
    { icon: 'fas fa-home', label: 'Home', active: false },
    { icon: 'fas fa-video', label: 'Webinar', active: true },
    { icon: 'fas fa-calendar', label: 'Calendar', active: false },
    { icon: 'fas fa-certificate', label: 'SKP', active: false },
    { icon: 'fas fa-bell', label: 'Notifications', active: false }
  ];
}