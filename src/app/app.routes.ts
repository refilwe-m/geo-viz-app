import { Routes } from '@angular/router';
import { Histogram } from './components/histogram/histogram';
import { MapView } from './components/map-view/map-view';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Histogram },
  { path: 'locator', component: MapView },
];
