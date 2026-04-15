import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhatsappService } from '../../../core/services/whatsapp';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit {
  waLink = '';

  constructor(private wa: WhatsappService) {}

  ngOnInit() {
    this.waLink = this.wa.getGeneralLink();
  }
}