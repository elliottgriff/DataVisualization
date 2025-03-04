import { Routes } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const PROJECTS_ROUTES: Routes = [
  { path: '', component: ProjectsListComponent },
  { path: ':id', component: ProjectDetailsComponent },
];
