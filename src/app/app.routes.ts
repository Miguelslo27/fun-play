import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'partner/default',
    pathMatch: 'full'
  },
  {
    path: 'partner/:id',
    component: AppComponent
  }
];

export const ROUTER = RouterModule.forRoot(ROUTES);