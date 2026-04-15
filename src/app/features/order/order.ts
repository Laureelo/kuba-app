import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhatsappService } from '../../core/services/whatsapp';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './order.html',
  styleUrl: './order.scss'
})
export class Order {
  waLink = '';

  constructor(private wa: WhatsappService) {
    this.waLink = this.wa.getGeneralLink();
  }

  steps = [
    {
      num: '01',
      title: 'Choisissez votre bijou',
      desc: 'Parcourez notre catalogue et notez le nom du bijou qui vous plaît.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 3h12l4 6-10 12L2 9l4-6z"/>
        <path stroke-linecap="round" stroke-linejoin="round" d="M2 9h20M6 3l4 6m4 0 4-6"/>
      </svg>`
    },
    {
      num: '02',
      title: 'Contactez-nous sur WhatsApp',
      desc: 'Envoyez-nous le nom du bijou choisi via WhatsApp. Réponse en moins de 30 minutes.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-4 4v-4z"/>
      </svg>`
    },
    {
      num: '03',
      title: 'Confirmez et payez',
      desc: 'Nous confirmons la disponibilité, vous payez via Mobile Money ou en espèces.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`
    },
    {
      num: '04',
      title: 'Recevez votre bijou',
      desc: 'Livraison rapide à Ouagadougou. Votre bijou arrive emballé avec soin.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/>
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
      </svg>`
    },
  ];

  faqs = [
    {
      q: 'Quels sont les délais de livraison ?',
      a: 'Livraison sous 24 à 48h à Ouagadougou selon votre zone.'
    },
    {
      q: 'Quels moyens de paiement acceptez-vous ?',
      a: 'Orange Money, Moov Money et paiement en espèces à la livraison.'
    },
    {
      q: 'Puis-je retourner un bijou ?',
      a: 'Oui, sous 48h après réception si le bijou est dans son état d\'origine.'
    },
    {
      q: 'Livrez-vous en dehors de Ouagadougou ?',
      a: 'Oui, nous livrons dans tout le Burkina Faso via transporteur.'
    },
  ];
}