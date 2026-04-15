import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhatsappService } from '../../core/services/whatsapp';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  waLink = '';

  constructor(private wa: WhatsappService) {
    this.waLink = this.wa.getGeneralLink();
  }

  values = [
    {
      title: 'Authenticité',
      desc: 'Chaque bijou est choisi avec soin pour refléter un style vrai, sans artifice.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z"/>
      </svg>`
    },
    {
      title: 'Qualité',
      desc: 'Acier inoxydable premium, pierres soigneusement sélectionnées. Du beau qui dure.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 2l2.5 5.5H20l-4.5 4 1.5 6L12 14l-5 3.5 1.5-6L4 7.5h5.5L12 2z"/>
      </svg>`
    },
    {
      title: 'Accessibilité',
      desc: 'Le luxe pour tous. Des prix justes pour que chacun puisse se faire plaisir.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0"/>
      </svg>`
    },
  ];
}