// Business facts come from heavenlyangelsms.com and the NPI registry.
// See docs/content-sources.md for sources and items the owner still needs to confirm.
export const business = {
  name: 'Heavenly Angels',
  url: 'https://heavenlyangelsms.com',
  phone: '662-295-3257',
  phoneHref: 'tel:+16622953257',
  director: 'Angela Rice',
  city: 'West Point',
  region: 'MS',
  locations: [
    {
      label: 'Supervised living home',
      street: '1333 East Broad Street',
      city: 'West Point',
      region: 'MS',
      zip: '39773',
      maps: 'https://maps.google.com/?q=1333+East+Broad+Street+West+Point+MS+39773',
    },
    {
      label: 'Adult day services',
      street: '26457 East Main Street',
      city: 'West Point',
      region: 'MS',
      zip: '39773', // TODO: confirm ZIP with owner; the live site omits it
      maps: 'https://maps.google.com/?q=26457+East+Main+Street+West+Point+MS',
    },
  ],
};

// Homepage anchors for the prototype; these become real pages in the full build.
export const nav = [
  { label: 'Our care', href: '/#programs' },
  { label: 'A day here', href: '/#a-day-here' },
  { label: 'About Angela', href: '/#about' },
  { label: 'Getting started', href: '/#getting-started' },
];

export const services = [
  { prop: 'clipboard', title: 'Experienced staff', text: 'Qualified, caring people on site who know each resident by name.' },
  { prop: 'moon', title: 'Care around the clock', text: 'Staff are on duty 24 hours a day, 7 days a week.' },
  { prop: 'bowl', title: 'Three meals a day', text: 'Planned, nutritious meals prepared fresh in the home.' },
  { prop: 'palette', title: 'Daily activities', text: 'Things to do every day, shaped around what each person enjoys.' },
  { prop: 'van', title: 'Rides to appointments', text: 'Transportation to and from doctor visits, with staff alongside.' },
  { prop: 'pills', title: 'Medication support', text: 'Medications given as each resident’s physician prescribes.' },
  { prop: 'scissors', title: 'Grooming', text: 'Barber and hair stylist visits, so everyone looks and feels their best.' },
  { prop: 'towels', title: 'Housekeeping', text: 'Clean rooms, fresh linens, and hygiene products taken care of.' },
] as const;

export const faqs = [
  {
    q: 'Who does Heavenly Angels support?',
    a: 'Adults with intellectual and developmental disabilities (IDD), people with disabilities, and people living with serious mental illness. Call us to talk through individual needs and whether our home is the right fit.',
  },
  {
    q: 'Where are you located?',
    a: 'Our supervised living home is at 1333 East Broad Street in West Point, Mississippi. Adult day services are at 26457 East Main Street in West Point. We welcome families from across the Golden Triangle, including Columbus, Starkville, and Aberdeen.',
  },
  {
    q: 'Can residents keep their own doctors?',
    a: 'Yes. Residents choose their own physicians and their own home health and hospice providers. Our staff support appointments and accompany residents in the home, in transit, and in the community.',
  },
  {
    q: 'How do I schedule a visit?',
    a: 'Call 662-295-3257. We’ll answer your questions and find a time for you to come see the home and meet the team.',
  },
  {
    q: 'What does it cost?',
    a: 'Costs depend on the service and each person’s needs, so we don’t publish prices online. Call us and we’ll walk you through costs, payment options, and current availability.',
  },
];
