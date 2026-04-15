import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCTS } from '../../../core/data/products.data';
import { Product } from '../../../core/models/product.model';
import { WhatsappService } from '../../../core/services/whatsapp';
import { CfaCurrencyPipe } from '../../../shared/pipes/cfa-currency-pipe';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [RouterLink, CfaCurrencyPipe],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.scss'
})
export class FeaturedProducts implements OnInit {
  products: Product[] = [];

  constructor(private wa: WhatsappService) {}

  ngOnInit() {
    this.products = PRODUCTS.slice(0, 4);
  }

  getWaLink(product: Product): string {
    return this.wa.getProductLink(product);
  }
}