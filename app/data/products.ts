export type Product = {
  name: string;
  category: 'spices' | 'dry-fruits' | 'value-added';
  origin?: string;
  image: string;
};

export const marqueeProducts: Product[] = [
  { name: 'Black Pepper', category: 'spices', origin: 'Karnataka & Kerala', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop' },
  { name: 'Green Cardamom', category: 'spices', origin: 'Kerala', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=400&fit=crop' },
  { name: 'Cloves', category: 'spices', origin: 'Madagascar', image: 'https://images.unsplash.com/photo-1615485290382-441e4d956cb0?w=400&h=400&fit=crop' },
  { name: 'Cinnamon', category: 'spices', origin: 'Sri Lanka', image: 'https://images.unsplash.com/photo-1602928323689-785b087ee8a6?w=400&h=400&fit=crop' },
  { name: 'Star Anise', category: 'spices', origin: 'Premium Grade', image: 'https://images.unsplash.com/photo-1615485290382-441e4d956cb0?w=400&h=400&fit=crop&q=80' },
  { name: 'Cashew Nuts', category: 'dry-fruits', origin: 'Premium W320', image: 'https://images.unsplash.com/photo-1599599810769-2c7f153a6d8e?w=400&h=400&fit=crop' },
  { name: 'Almonds', category: 'dry-fruits', origin: 'California & Indian', image: 'https://images.unsplash.com/photo-1508061250646-f775b8490b18?w=400&h=400&fit=crop' },
  { name: 'Pistachios', category: 'dry-fruits', origin: 'Iranian Premium', image: 'https://images.unsplash.com/photo-1599599810769-2c7f153a6d8e?w=400&h=400&fit=crop&q=80' },
  { name: 'Raisins', category: 'dry-fruits', origin: 'Golden & Black', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=400&fit=crop' },
  { name: 'Dates', category: 'dry-fruits', origin: 'Select Varieties', image: 'https://images.unsplash.com/photo-1606312619070-d48d4d652741?w=400&h=400&fit=crop' },
  { name: 'Nutmeg & Mace', category: 'spices', origin: 'Kerala', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop&q=80' },
  { name: 'Black Cardamom', category: 'spices', origin: 'Nepal & Sikkim', image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=400&fit=crop&q=80' },
];

export const spiceProducts = [
  { name: 'Black Pepper', origins: 'Karnataka, Kerala, Vietnam' },
  { name: 'Green Cardamom', origins: 'Kerala, Tamil Nadu' },
  { name: 'Black Cardamom', origins: 'Nepal, Sikkim, Siliguri' },
  { name: 'Cloves', origins: 'Madagascar, Zanzibar' },
  { name: 'Nutmeg & Mace', origins: 'Kerala' },
  { name: 'Cinnamon', origins: 'Sri Lanka & Other Origins' },
  { name: 'Star Anise', origins: 'India & International' },
  { name: 'Bay Leaf', origins: 'India & International' },
];

export const dryFruitProducts = [
  { name: 'Cashew Nuts', detail: 'Premium Grade W320 & above' },
  { name: 'Almonds', detail: 'California & Indian varieties' },
  { name: 'Pistachios', detail: 'Iranian Premium selection' },
  { name: 'Raisins', detail: 'Golden & Black varieties' },
  { name: 'Dates', detail: 'Multiple premium varieties' },
  { name: 'Other Dry Fruits', detail: 'Walnuts, figs & more on request' },
];

export const marketExpertise = [
  {
    spice: 'Black Pepper',
    regions: 'Karnataka, Kerala, Vietnam',
    expertise: 'Grade-wise sourcing with moisture and density checks for HORECA consistency.',
  },
  {
    spice: 'Green Cardamom',
    regions: 'Kerala, Tamil Nadu',
    expertise: 'Bold pod selection with aroma profiling for premium kitchens and exporters.',
  },
  {
    spice: 'Black Cardamom',
    regions: 'Nepal, Sikkim, Siliguri',
    expertise: 'Smoky, full-bodied lots curated for curries, biryanis and spice blends.',
  },
  {
    spice: 'Cloves',
    regions: 'Madagascar, Zanzibar',
    expertise: 'High-oil content cloves through established international trade networks.',
  },
  {
    spice: 'Nutmeg & Mace',
    regions: 'Kerala',
    expertise: 'Whole nutmeg and mace lots with careful handling for flavour retention.',
  },
  {
    spice: 'HORECA Sourcing',
    regions: 'Pan-India & Global',
    expertise: 'Dedicated supply programmes for hotels, restaurants and institutional buyers.',
  },
];
