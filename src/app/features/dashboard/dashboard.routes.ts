import { Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardStatsComponent } from './dashboard-stats/dashboard-stats.component';
import { DashboardActivityComponent } from './dashboard-activity/dashboard-activity.component';

export const DASHBOARD_ROUTES: Routes = [
  { path: '', component: DashboardHomeComponent },
  { path: 'stats', component: DashboardStatsComponent },
  { path: 'activity', component: DashboardActivityComponent },
];
