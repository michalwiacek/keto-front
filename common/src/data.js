/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable import/no-duplicates */
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialInstagram } from 'react-icons-kit/ionicons/socialInstagram';
import Image1 from './assets/images/tried_everything.svg';
import Image2 from './assets/images/for_yourself.svg';
import Image3 from './assets/images/medics.svg';
import Image4 from './assets/images/efficiency.svg';
import Latest1 from './assets/images/blog-1.svg';
import Latest2 from './assets/images/blog-2.svg';
import Client1 from './assets/images/1.png';
import Client2 from './assets/images/1.png';

export const SOCIAL_PROFILES = [
  {
    icon: socialTwitter,
    url: 'https://twitter.com/',
  },
  {
    icon: socialFacebook,
    url: 'https://facebook.com',
  },
  {
    icon: socialInstagram,
    url: 'https://instagram.com',
  },
];

export const MENU_ITEMS = [
  {
    label: 'O nas',
    path: '/about',
  },
  {
    label: 'Przepisy',
    path: '/recipes',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'Kontakt',
    path: '/contact',
  },
];

export const MENU_LEFT_ITEMS = [
  {
    label: 'O nas',
    path: '/about',
  },
  {
    label: 'Przepisy',
    path: '/recipes',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'Kontakt',
    path: '/contact',
  },
];

export const MENU_RIGHT_ITEMS = [
  {
    label: 'Login',
    path: '#',
    offset: '70',
  },
  {
    label: 'Sign Up',
    path: '#',
    offset: '70',
  },
];

export const Features = [
  {
    id: 1,
    img: `${Image1}`,
    title: 'Próbowałeś wszystkiego?',
    content: 'Sprawdziłeś już niezliczoną ilość diet? Wciąż bez skutku? Spróbuj raz jeszcze...\u00A0 ostatni raz!',
  },
  {
    id: 2,
    img: `${Image2}`,
    title: 'Chcesz schudnąć dla siebie?',
    content: 'Zbliża się wyjazd w ciepłe kraje? A\u00A0może nadeszła pora na sukienkę ze studniówki?',
  },
  {
    id: 3,
    img: `${Image3}`,
    title: 'Dieta jako wsparcie w leczeniu?',
    content: 'Na pewno wiesz jak istotne znaczenie ma dieta w leczeniu chorób. Mówił o tym Twój lekarz.',
  },
  {
    id: 4,
    img: `${Image4}`,
    title: 'Dieta jako inwestycja?',
    content: 'Potrzebujesz utrzymać wysoką efektywność działania? Mamy dla Ciebie coś specjalnego! ',
  },
];
export const LatestNews = [
  {
    id: 1,
    img: `${Latest1}`,
    title: 'Built for drivers, with drivers',
    description: 'The new Driver app helps you earn smarter and supports you–like a partner–at every turn.',
    buttonText: 'Learn More',
  },
  {
    id: 2,
    img: `${Latest2}`,
    title: 'Bike Share',
    description: 'All the Riders have been verified by us. Not random people with bikes that we don’t know.',
    buttonText: 'Learn More',
  },
];
export const Testimonial = [
  {
    id: 1,
    name: 'Jon Doe',
    designation: 'CEO of Invission Co.',
    comment:
      'Love to work with this designer in every our future project to ensure we are going to build best prototyping features. Impressed with master class support of the team and really look forward for the future. A true passionate team.',
    avatar_url: Client1,
    social_icon: 'flaticon-instagram',
  },
  {
    id: 2,
    name: 'Roman Ul Oman',
    designation: 'Co-founder of QatarDiaries',
    comment:
      'Impressed with master class support of the team and really look forward for the future. A true passionate team. Love to work with this designer in every our future project to ensure we are going to build best prototyping features.',
    avatar_url: Client2,
    social_icon: 'flaticon-twitter',
  },
];
export const menuWidget = [
  {
    id: 1,
    title: 'About Us',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Support Center',
      },
      {
        id: 2,
        url: '#',
        text: 'Customer Support',
      },
    ],
  },
  {
    id: 2,
    title: 'Our Information',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Return Policy',
      },
      {
        id: 2,
        url: '#',
        text: 'Privacy Policy',
      },
    ],
  },
  {
    id: 3,
    title: 'My Account',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Press inquiries',
      },
      {
        id: 2,
        url: '#',
        text: 'Social media directories',
      },
    ],
  },
];
export const LANGUAGE_NAMES = [
  {
    label: 'Polish',
    value: 'pol',
  },
  {
    label: 'English',
    value: 'eng',
  },
];
