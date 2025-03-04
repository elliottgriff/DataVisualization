import { Routes } from '@angular/router';
import { AnalyticsHomeComponent } from './analytics-home/analytics-home.component';
import { ChartsComponent } from './charts/charts.component';

export const ANALYTICS_ROUTES: Routes = [
  { path: '', component: AnalyticsHomeComponent },
  { path: 'charts', component: ChartsComponent },
];
