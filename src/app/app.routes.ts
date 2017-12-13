import { RouterModule, Routes } from '@angular/router';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';

const ROUTES: Routes = [
  {
    path: 'partner/:id',
    component: AppWrapperComponent
  },
  {
    path: '**',
    redirectTo: 'partner/default',
    pathMatch: 'full'
  },
];

export const ROUTER = RouterModule.forRoot(ROUTES);