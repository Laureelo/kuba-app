import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lookbook-strip',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lookbook-strip.html',
  styleUrl: './lookbook-strip.scss'
})
export class LookbookStrip {
  collections = [
    {
      label: 'Collection Femme',
      filter: 'femme',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 10c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4z"/>
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14v8M9 19l3 3 3-3"/>
      </svg>`
    },
    {
      label: 'Collection Homme',
      filter: 'homme',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 10c-4 0-7 2-7 4v8h14v-8c0-2-3-4-7-4z"/>
      </svg>`
    },
    {
      label: 'Sets & Cadeaux',
      filter: 'set',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <rect x="3" y="8" width="18" height="13" rx="1" stroke-linecap="round"/>
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8H3V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2zM12 5V21"/>
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 5c0 0-2-3-4-2s-1 3 4 2zM12 5c0 0 2-3 4-2s1 3-4 2z"/>
      </svg>`
    },
  ];
}