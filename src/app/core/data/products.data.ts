import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Collier Valentina',
    slug: 'collier-valentina',
    category: 'femme',
    material: 'Acier inoxydable · Pierres naturelles',
    price: 9500,
    images: ['assets/images/products/valentina.jpg'],
    isBestseller: true,
    isNew: false,
    inStock: true,
    description: 'Un collier élégant aux pierres naturelles, parfait pour sublimer toutes les tenues.'
  },
  {
    id: '2',
    name: 'Set Graham',
    slug: 'set-graham',
    category: 'set',
    material: 'Acier doré · Coffret duo',
    price: 12500,
    images: ['assets/images/products/graham.jpg'],
    isBestseller: false,
    isNew: true,
    inStock: true,
    description: 'Un coffret duo alliant bracelet et collier, idéal en cadeau.'
  },
  {
    id: '3',
    name: 'Bracelet Atlas',
    slug: 'bracelet-atlas',
    category: 'homme',
    material: 'Acier mat',
    price: 7000,
    images: ['assets/images/products/atlas.jpg'],
    isBestseller: false,
    isNew: false,
    inStock: false,       // ← exemple rupture
    description: 'Un bracelet sobre et masculin, conçu pour durer.'
  },
  {
    id: '4',
    name: 'Bague Lumière',
    slug: 'bague-lumiere',
    category: 'femme',
    material: 'Acier rosé · Pierre zircon',
    price: 5500,
    images: ['assets/images/products/lumiere.jpg'],
    isBestseller: false,
    isNew: true,
    inStock: true,
    description: 'Une bague fine et délicate, ornée d\'un zircon étincelant.'
  },
  {
    id: '5',
    name: 'Collier Soleil',
    slug: 'collier-soleil',
    category: 'femme',
    material: 'Acier doré · Pendentif',
    price: 8000,
    images: ['assets/images/products/soleil.jpg'],
    isBestseller: false,
    isNew: false,
    inStock: true,
    description: 'Un pendentif soleil en acier doré, léger et lumineux.'
  },
  {
    id: '6',
    name: 'Set Kuba Classic',
    slug: 'set-kuba-classic',
    category: 'set',
    material: 'Acier inoxydable · Coffret trio',
    price: 15000,
    images: ['assets/images/products/kuba-classic.jpg'],
    isBestseller: true,
    isNew: false,
    inStock: true,
    description: 'Notre coffret signature : collier, bracelet et bague assortis.'
  }
];