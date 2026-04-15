import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhatsappService } from '../../../core/services/whatsapp';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements OnInit {
  waLink = '';

  constructor(private wa: WhatsappService) {}

  ngOnInit() {
    this.waLink = this.wa.getGeneralLink();
  }
}