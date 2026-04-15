import { Component } from '@angular/core';

@Component({
  selector: 'app-why-section',
  standalone: true,
  templateUrl: './why-section.html',
  styleUrl: './why-section.scss'
})
export class WhySection {
  reasons = [
    {
      title: 'Durabilité garantie',
      description: 'Acier inoxydable anti-rouille, anti-ternissement. Vos bijoux restent beaux dans le temps, malgré la chaleur et la sueur.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 2l2.5 5.5H20l-4.5 4 1.5 6L12 14l-5 3.5 1.5-6L4 7.5h5.5L12 2z"/>
      </svg>`
    },
    {
      title: 'Prix accessibles',
      description: 'De 5 000 à 15 000 CFA. Le luxe ne devrait pas être réservé à quelques-uns — chez Kuba, il est pour tous.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v2m0 8v2m-4-6h8M9 10h6"/>
      </svg>`
    },
    {
      title: 'Commande facile',
      description: 'Un message WhatsApp suffit. Choisissez, contactez, recevez. Simple, rapide, sans complication.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-4 4v-4z"/>
      </svg>`
    },
    {
      title: 'Designs exclusifs',
      description: 'Chaque modèle est soigneusement sélectionné pour son caractère unique. Des pièces que vous ne trouverez nulle part ailleurs.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 3h12l4 6-10 12L2 9l4-6z"/>
        <path stroke-linecap="round" stroke-linejoin="round" d="M2 9h20M6 3l4 6m4 0 4-6"/>
      </svg>`
    },
    {
      title: 'Livraison Ouaga',
      description: 'Livraison rapide dans tout Ouagadougou et ses environs. Votre bijou arrive chez vous en toute sécurité.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/>
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
      </svg>`
    },
    {
      title: 'Service client',
      description: 'Une équipe disponible 7j/7 sur WhatsApp pour répondre à toutes vos questions et vous accompagner dans votre choix.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z"/>
      </svg>`
    },
  ];
}