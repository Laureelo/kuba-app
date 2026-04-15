import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../core/models/product.model';
import { PRODUCTS } from '../../core/data/products.data';
import { WhatsappService } from '../../core/services/whatsapp';
import { CfaCurrencyPipe } from '../../shared/pipes/cfa-currency-pipe';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, CfaCurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail implements OnInit {
  product: Product | undefined;
  relatedProducts: Product[] = [];
  waLink = '';

  constructor(
    private route: ActivatedRoute,
    private wa: WhatsappService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['id'];
      this.product = PRODUCTS.find(p => p.slug === slug);
      if (this.product) {
        this.waLink = this.wa.getProductLink(this.product);
        this.relatedProducts = PRODUCTS
          .filter(p => p.category === this.product!.category && p.id !== this.product!.id)
          .slice(0, 3);
      }
    });
  }
}