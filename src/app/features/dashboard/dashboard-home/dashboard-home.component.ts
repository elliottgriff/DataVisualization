// src/app/features/dashboard/dashboard-home/dashboard-home.component.ts
import { Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';

interface Project {
  name: string;
  progress: number;
  status: string;
  date: string;
}

interface StatCard {
  title: string;
  value: string;
  icon: string;
  change: string;
  changeDirection: 'up' | 'down';
  color: string;
}

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ChartModule,
    TableModule,
    TagModule,
    ProgressBarModule,
  ],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss',
})
export class DashboardHomeComponent {
  // Using signals for reactive state
  stats = signal<StatCard[]>([
    {
      title: 'Total Projects',
      value: '12',
      icon: 'pi pi-folder',
      change: '2.5%',
      changeDirection: 'up',
      color: 'var(--blue-500)',
    },
    {
      title: 'Active Tasks',
      value: '42',
      icon: 'pi pi-check-square',
      change: '8.1%',
      changeDirection: 'up',
      color: 'var(--green-500)',
    },
    {
      title: 'Pending Reviews',
      value: '7',
      icon: 'pi pi-comments',
      change: '3.2%',
      changeDirection: 'down',
      color: 'var(--yellow-500)',
    },
    {
      title: 'Recent Commits',
      value: '124',
      icon: 'pi pi-code',
      change: '12.4%',
      changeDirection: 'up',
      color: 'var(--purple-500)',
    },
  ]);

  recentProjects = signal<Project[]>([
    {
      name: 'E-commerce Dashboard',
      progress: 75,
      status: 'In Progress',
      date: '2025-02-21',
    },
    {
      name: 'Weather App',
      progress: 100,
      status: 'Completed',
      date: '2025-02-15',
    },
    {
      name: 'Task Manager',
      progress: 30,
      status: 'In Progress',
      date: '2025-02-10',
    },
    {
      name: 'Portfolio Website',
      progress: 60,
      status: 'In Progress',
      date: '2025-02-05',
    },
  ]);

  // Chart data using signal
  chartData = signal({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Commits',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'var(--primary-color)',
        tension: 0.4,
      },
      {
        label: 'Pull Requests',
        data: [28, 48, 40, 19, 36, 27],
        fill: false,
        borderColor: 'var(--teal-500)',
        tension: 0.4,
      },
    ],
  });

  // Chart options
  chartOptions = {
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  getStatusSeverity(
    status: string
  ): 'success' | 'info' | 'warn' | 'danger' | undefined {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'In Progress':
        return 'info';
      case 'Pending':
        return 'warn';
      default:
        return 'info';
    }
  }
}
