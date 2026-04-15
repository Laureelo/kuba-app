import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-section',
  standalone: true,
  templateUrl: './intro-section.html',
  styleUrl: './intro-section.scss'
})
export class IntroSection {
  stats = [
    { num: '3 ans', label: "d'expertise bijouterie" },
    { num: '500+', label: 'clients satisfaits' },
    { num: '100%', label: 'acier inoxydable' },
  ];
}