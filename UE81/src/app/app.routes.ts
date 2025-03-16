import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {WarenkorbComponent} from './warenkorb/warenkorb.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title: 'Home Page',
    component: HomeComponent
  },
  {
    path: 'shop',
    title: "Shop",
    component: ShopComponent
  },
  {
    path: 'warenkorb',
    title: 'Warenkorb',
    component: WarenkorbComponent
  },
  {
    path: 'impressum',
    title: 'Impressum',
    component: ImpressumComponent
  },
  {
    path: 'page-not-found',
    title: 'Page Not Found',
    component: PagenotfoundComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];
