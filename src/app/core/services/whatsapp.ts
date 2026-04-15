import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  private readonly phone = '22600000000'; // ← remplace par le vrai numéro

  getProductLink(product: Product): string {
    const message = `Bonjour Kuba Accessoires 👋, je suis intéressé(e) par *${product.name}* à ${product.price.toLocaleString('fr-FR')} CFA. Est-il disponible ?`;
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(message)}`;
  }

  getGeneralLink(): string {
    const message = `Bonjour Kuba Accessoires 👋, je voudrais voir votre catalogue et passer une commande.`;
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(message)}`;
  }
}