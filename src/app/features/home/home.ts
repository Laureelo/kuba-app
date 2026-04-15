import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { FeaturedProducts } from './featured-products/featured-products';
import { LookbookStrip } from './lookbook-strip/lookbook-strip';
import { WhySection } from './why-section/why-section';
import { Testimonials } from './testimonials/testimonials';
import { IntroSection } from './intro-section/intro-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, IntroSection, FeaturedProducts, LookbookStrip, WhySection, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}