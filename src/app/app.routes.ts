import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'work/:id', loadComponent: () => import('./pages/work/work.component').then(m => m.WorkComponent)},
  {path: 'shop', loadComponent: () => import('./pages/shop/shop.component').then(m => m.ShopComponent)},
  {path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)},
  // Intentionally unlinked personal-work route.
  {path: 'Rotizo', loadComponent: () => import('./pages/rotizo/rotizo.component').then(m => m.RotizoComponent), data: {bareLayout: true}},
  {path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)},
];
