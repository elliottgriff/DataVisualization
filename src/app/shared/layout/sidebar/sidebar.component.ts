// src/app/shared/layout/sidebar/sidebar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, PanelMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  items: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      routerLink: '/dashboard',
    },
    {
      label: 'Analytics',
      icon: 'pi pi-chart-bar',
      items: [
        {
          label: 'Overview',
          icon: 'pi pi-chart-line',
          routerLink: '/analytics',
        },
        {
          label: 'Charts',
          icon: 'pi pi-chart-bar',
          routerLink: '/analytics/charts',
        },
      ],
    },
    {
      label: 'Projects',
      icon: 'pi pi-briefcase',
      items: [
        {
          label: 'All Projects',
          icon: 'pi pi-list',
          routerLink: '/projects',
        },
        {
          label: 'Add New',
          icon: 'pi pi-plus',
          routerLink: '/projects/new',
        },
      ],
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      routerLink: '/settings',
    },
  ];
}
