/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable import/no-duplicates */
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialInstagram } from 'react-icons-kit/ionicons/socialInstagram';
import Image1 from './assets/images/feature-2.svg';
import Image2 from './assets/images/feature-1.svg';
import Image3 from './assets/images/feature-3.svg';
import Latest1 from './assets/images/blog-1.svg';
import Latest2 from './assets/images/blog-2.svg';
import Client1 from './assets/images/1.png';
import Client2 from './assets/images/1.png';
import Member1 from './assets/images/team/photo1.jpg';
import Member2 from './assets/images/team/photo2.jpg';
import Member3 from './assets/images/team/photo3.jpg';

export const SOCIAL_PROFILES = [
    {
        icon: socialTwitter,
        url: '#',
    },
    {
        icon: socialFacebook,
        url: '#',
    },
    {
        icon: socialInstagram,
        url: '#',
    },
];

export const TEAM_MEMBER = [
    {
        id: 1,
        name: 'Jessica Fanddy',
        thumbnail_url: Member1,
        designation: 'Co Founder',
        social_links: [
            {
                id: 1,
                icon: 'flaticon-facebook-logo',
                url: '#',
            },
            {
                id: 1,
                icon: 'flaticon-twitter-logo-silhouette',
                url: '#',
            },
            {
                id: 1,
                icon: 'flaticon-instagram',
                url: '#',
            },
            {
                id: 1,
                icon: 'flaticon-dribble-logo',
                url: '#',
            },
        ],
    },
    {
        id: 2,
        name: 'Devid Justingul',
        thumbnail_url: Member2,
        designation: 'Senior Ui/UX Designer',
        social_links: [
            {
                id: 1,
                icon: 'flaticon-facebook-logo',
                url: '#',
            },
            {
                id: 1,
                icon: 'flaticon-twitter-logo-silhouette',
                url: '#',
            },
            {
                id: 1,
                icon: 'flaticon-instagram',
                url: '#',
            },
            {
                id: 1,
                icon: 'flaticon-dribble-logo',
                url: '#',
            },
        ],
    },
    {
        id: 3,
        name: 'Handdy Albuzz',
        thumbnail_url: Member3,
        designation: 'Article Writer',
        social_links: [
            {
                id: 1,
                icon: 'flaticon-facebook-logo',
                url: '#',
            },
            {
                id: 1,
                icon: 'flaticon-twitter-logo-silhouette',
                url: '#',
            },
            {
                id: 1,
                icon: 'flaticon-instagram',
                url: '#',
            },
            {
                id: 1,
                icon: 'flaticon-dribble-logo',
                url: '#',
            },
        ],
    },
];

export const MENU_ITEMS = [
    {
        label: 'O NAS',
        path: '/about',
        offset: '70',
    },
    {
        label: 'PRZEPISY',
        path: '/recipes',
        offset: '700',
    },
    {
        label: 'BLOG',
        path: '/blog',
        offset: '700',
    },
    {
        label: 'KONTAKT',
        path: '/contact',
        offset: '1700',
    },
];

export const MENU_LEFT_ITEMS = [
    {
        label: 'O NAS',
        path: '/about',
        offset: '70',
    },
    {
        label: 'PRZEPISY',
        path: '/recipes',
        offset: '700',
    },
    {
        label: 'BLOG',
        path: '/blog',
        offset: '700',
    },
    {
        label: 'KONTAKT',
        path: '/contact',
        offset: '1700',
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
        title: 'Delivery',
        description: 'Documents, accessories, packages and even gifts! Deliver them all within your city, in a jiffy!',
    },
    {
        id: 2,
        img: `${Image2}`,
        title: 'Bike Share',
        description: 'All the Riders have been verified by us. Not random people with bikes that we don’t know.',
    },
    {
        id: 3,
        img: `${Image3}`,
        title: 'Food',
        description: 'Order food from your favorite Place near you with the convenience of Godrive.',
    },
    {
        id: 4,
        img: `${Image1}`,
        title: 'Food',
        description: 'Order food from your favorite Place near you with the convenience of Godrive.',
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
            {
                id: 3,
                url: '#',
                text: 'About Us',
            },
            {
                id: 4,
                url: '#',
                text: 'Copyright',
            },
            {
                id: 5,
                url: '#',
                text: 'Popular Campaign',
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
            {
                id: 3,
                url: '#',
                text: 'Terms & Conditions',
            },
            {
                id: 4,
                url: '#',
                text: 'Site Map',
            },
            {
                id: 5,
                url: '#',
                text: 'Store Hours',
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
            {
                id: 3,
                url: '#',
                text: 'Images & B-roll',
            },
            {
                id: 4,
                url: '#',
                text: 'Permissions',
            },
            {
                id: 5,
                url: '#',
                text: 'Speaker requests',
            },
        ],
    },
];
export const LANGUAGE_NAMES = [
    {
        label: 'English',
        value: 'eng',
    },
    {
        label: 'Polish',
        value: 'pol',
    },
];
export const featuredPost = {
    id: 535,
    title: 'Featured Article',
    excerpt:
        '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
    thumbUrl: 'https://picsum.photos/600/400',
    btnText: 'Learn More ',
    btnUrl: '#1',
    category: 'keto',
    categoryUrl: '/',
    author: 'Bobek',
    authorUrl: '/',
};

export const posts = [
    {
        id: 1,
        title: 'Uganda Embraces South Sudanese Refugees, For Now',
        excerpt:
            '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
        thumbUrl: 'https://picsum.photos/300',
        category: 'keto',
        categoryUrl: '/',
        author: 'Bobek',
        authorUrl: '/',
        btnText: 'Learn More ',
        btnUrl: '#1',
    },
    {
        id: 2,
        title: 'BRITs Week 2019 together with O2 is here',
        excerpt:
            '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
        thumbUrl: 'https://picsum.photos/300',
        btnText: 'Learn More ',
        btnUrl: '#1',
        category: 'keto',
        categoryUrl: '/',
        author: 'Bobek',
        authorUrl: '/',
    },
    {
        id: 3,
        title: 'BRITs Week 2019 together with O2 is here',
        excerpt:
            '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
        thumbUrl: 'https://picsum.photos/300',
        btnText: 'Learn More ',
        btnUrl: '#1',
        category: 'keto',
        categoryUrl: '/',
        author: 'Bobek',
        authorUrl: '/',
    },
    {
        id: 4,
        title: 'BRITs Week 2019 together with O2 is here',
        excerpt:
            '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
        thumbUrl: 'https://picsum.photos/300',
        btnText: 'Learn More ',
        btnUrl: '#1',
        category: 'keto',
        categoryUrl: '/',
        author: 'Bobek',
        authorUrl: '/',
    },
    {
        id: 5,
        title: 'BRITs Week 2019 together with O2 is here',
        excerpt:
            '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
        thumbUrl: 'https://picsum.photos/300',
        btnText: 'Learn More ',
        btnUrl: '#1',
        category: 'keto',
        categoryUrl: '/',
        author: 'Bobek',
        authorUrl: '/',
    },
    {
        id: 6,
        title: 'BRITs Week 2019 together with O2 is here',
        excerpt:
            '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
        thumbUrl: 'https://picsum.photos/300',
        btnText: 'Learn More ',
        btnUrl: '#1',
        category: 'keto',
        categoryUrl: '/',
        author: 'Bobek',
        authorUrl: '/',
    },
    {
        id: 7,
        title: 'BRITs Week 2019 together with O2 is here',
        excerpt:
            '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
        thumbUrl: 'https://picsum.photos/300',
        btnText: 'Learn More ',
        btnUrl: '#1',
        category: 'keto',
        categoryUrl: '/',
        author: 'Bobek',
        authorUrl: '/',
    },
    {
        id: 8,
        title: 'BRITs Week 2019 together with O2 is here',
        excerpt:
            '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
        thumbUrl: 'https://picsum.photos/300',
        btnText: 'Learn More ',
        btnUrl: '#1',
        category: 'keto',
        categoryUrl: '/',
        author: 'Bobek',
        authorUrl: '/',
    },
];
