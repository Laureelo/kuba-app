import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../core/data/products.data';
import { Product } from '../../core/models/product.model';
import { ProductGrid } from './product-grid/product-grid';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [ProductGrid],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.scss'
})
export class Catalogue implements OnInit {
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  activeFilter: string = 'tous';

  filters = [
    { label: 'Tous', value: 'tous' },
    { label: 'Femme', value: 'femme' },
    { label: 'Homme', value: 'homme' },
    { label: 'Sets & Cadeaux', value: 'set' },
  ];

  ngOnInit() {
    this.allProducts = PRODUCTS;
    this.filteredProducts = PRODUCTS;
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
    this.filteredProducts = filter === 'tous'
      ? this.allProducts
      : this.allProducts.filter(p => p.category === filter);
  }
}