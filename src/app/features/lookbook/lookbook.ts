import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCTS } from '../../core/data/products.data';
import { Product } from '../../core/models/product.model';
import { WhatsappService } from '../../core/services/whatsapp';
import { CfaCurrencyPipe } from '../../shared/pipes/cfa-currency-pipe';

@Component({
  selector: 'app-lookbook',
  standalone: true,
  imports: [RouterLink, CfaCurrencyPipe],
  templateUrl: './lookbook.html',
  styleUrl: './lookbook.scss'
})
export class Lookbook {
  activeTab: 'femme' | 'homme' | 'set' = 'femme';

  tabs = [
    { label: 'Collection Femme', value: 'femme' as const },
    { label: 'Collection Homme', value: 'homme' as const },
    { label: 'Sets & Cadeaux',   value: 'set'   as const },
  ];

  constructor(private wa: WhatsappService) {}

  get filteredProducts(): Product[] {
    return PRODUCTS.filter(p => p.category === this.activeTab);
  }

  getWaLink(product: Product): string {
    return this.wa.getProductLink(product);
  }
}