import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { WhatsappFloatBtn } from './shared/components/whatsapp-float-btn/whatsapp-float-btn';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, WhatsappFloatBtn],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {}