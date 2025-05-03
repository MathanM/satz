import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {WorkComponent} from './pages/work/work.component';
import {ShopComponent} from './pages/shop/shop.component';
import {AboutComponent} from './pages/about/about.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'work', component: WorkComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'about', component: AboutComponent},
];
