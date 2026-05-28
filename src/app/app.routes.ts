import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Formulario } from './pages/formulario/formulario';

export const routes: Routes = [
 {
    path: 'home',
    component: Home
 },
 {
    path: 'products',
    component: Products
 },
 {
    path: 'formulario',
    component: Formulario
 },
];
