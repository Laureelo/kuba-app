import { Component, OnInit } from '@angular/core';
import { WhatsappService } from '../../../core/services/whatsapp';

@Component({
  selector: 'app-whatsapp-float-btn',
  standalone: true,
  templateUrl: './whatsapp-float-btn.html',
  styleUrl: './whatsapp-float-btn.scss'
})
export class WhatsappFloatBtn implements OnInit {
  waLink = '';

  constructor(private wa: WhatsappService) {}

  ngOnInit() {
    this.waLink = this.wa.getGeneralLink();
  }
}