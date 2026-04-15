import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhatsappService } from '../../../core/services/whatsapp';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  waLink = '';

  constructor(private wa: WhatsappService) {
    this.waLink = this.wa.getGeneralLink();
  }

  testimonials = [
    {
      text: "J'ai commandé le Collier Valentina pour l'anniversaire de ma femme. Elle était tellement surprise par la qualité. On aurait dit un bijou à 50 000 CFA !",
      name: 'Abdoul K.',
      city: 'Ouagadougou',
      initial: 'A',
      stars: 5
    },
    {
      text: "Je commande régulièrement depuis Instagram. Maintenant avec le site c'est encore plus facile de voir toute la collection avant de choisir.",
      name: 'Fatima O.',
      city: 'Bobo-Dioulasso',
      initial: 'F',
      stars: 5
    },
    {
      text: "Le Set Graham pour moi et mon frère. Livraison rapide, emballage soigné. C'est clairement la meilleure adresse bijoux à Ouaga.",
      name: 'Mohamed T.',
      city: 'Ouagadougou',
      initial: 'M',
      stars: 5
    },
  ];

  getStars(count: number): number[] {
    return Array(count).fill(0);
  }
}