import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)},
  {path: 'work/:id', loadComponent: () => import('./pages/work/work.component').then(m => m.WorkComponent)},
  {path: 'shop', loadComponent: () => import('./pages/shop/shop.component').then(m => m.ShopComponent)},
  {path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)},
];
