import { Routes } from '@angular/router';
import { SettingsHomeComponent } from './settings-home/settings-home.component';
import { ProfileComponent } from './profile/profile.component';

export const SETTINGS_ROUTES: Routes = [
  { path: '', component: SettingsHomeComponent },
  { path: 'profile', component: ProfileComponent },
];
