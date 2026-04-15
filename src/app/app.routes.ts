import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then(m => m.Home),
  },
  {
    path: 'catalogue',
    loadComponent: () =>
      import('./features/catalogue/catalogue').then(m => m.Catalogue),
  },
  {
    path: 'catalogue/:id',
    loadComponent: () =>
      import('./features/product-detail/product-detail').then(m => m.ProductDetail),
  },
  {
    path: 'lookbook',
    loadComponent: () =>
      import('./features/lookbook/lookbook').then(m => m.Lookbook),
  },
  {
    path: 'notre-histoire',
    loadComponent: () =>
      import('./features/about/about').then(m => m.About),
  },
  {
    path: 'commander',
    loadComponent: () =>
      import('./features/order/order').then(m => m.Order),
  },
  {
    path: '**',
    redirectTo: '',
  },
];