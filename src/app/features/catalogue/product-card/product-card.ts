import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../core/models/product.model';
import { WhatsappService } from '../../../core/services/whatsapp';
import { CfaCurrencyPipe } from '../../../shared/pipes/cfa-currency-pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, CfaCurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard implements OnInit {
  @Input() product!: Product;
  waLink = '';

  constructor(private wa: WhatsappService) {}

  ngOnInit() {
    this.waLink = this.wa.getProductLink(this.product);
  }
}