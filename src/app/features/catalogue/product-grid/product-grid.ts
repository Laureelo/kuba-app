import { Component, Input } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.scss'
})
export class ProductGrid {
  @Input() products: Product[] = [];
}