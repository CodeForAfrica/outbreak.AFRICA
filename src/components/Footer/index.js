import React from 'react';

// import { Footer } from '@commons-ui/core';

import pulitzer from 'assets/pulitzer.png';
import cfaLogo from 'assets/cfa.png';

import Email from 'assets/email.svg';
import Facebook from 'assets/facebook.svg';
import Medium from 'assets/group-3.svg';
import LinkedIn from 'assets/group-3-copy.svg';
import Twitter from 'assets/twitter.svg';

import Footer from './Footer';

const QUICK_LINKS = [
  {
    title: 'MORE',
    links: [
      { href: '#', label: 'FAQs' },
      { href: '#', label: 'Data Sources' },
      { href: '#', label: 'Methodology' },
    ],
  },
  {
    title: 'CONTACTS',
    links: [
      { href: '#', label: 'About Us' },
      { href: '#', label: 'Join Us' },
      { href: '/contact', label: 'Press Releases' },
    ],
  },
];

const ABOUT = {
  about:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n' +
    '        sed diam nonumy eirmod tempor invidunt ut labore et dolore\n' +
    '        magna aliquyam erat, sed diam voluptua. At vero eos et\n' +
    '        accusam et justo duo dolores et ea rebum. Stet clita kasd\n' +
    '        gubergren, no sea takimata sanctus est',
  initiative:
    'This initiative was made possible with support \nfrom Pulitzer Center.',
};

const INITIATIVE_LOGO = {
  image: pulitzer,
  alt: 'Plutizer Center',
  link: 'https://link.url',
};

const CFA = {
  image: cfaLogo,
  alt: 'CodeForAfrica',
};

const SOCIAL_MEDIA = {
  support: {
    email: 'hello@contact.com',
    image: {
      url: Email,
      alt: 'Email',
    },
  },
  socialMedia: [
    {
      url: 'https://twitter.com',
      image: {
        url: Twitter,
        alt: 'Twitter',
      },
    },
    {
      url: 'https://facebook.com',
      image: {
        url: Facebook,
        alt: 'Facebook',
      },
    },
    {
      url: 'https://medium.com',
      image: {
        url: Medium,
        alt: 'Medium',
      },
    },
    {
      url: 'https://linkedin.com',
      image: {
        url: LinkedIn,
        alt: 'LinkedIn',
      },
    },
  ],
};

function MainFooter(props) {
  return (
    <Footer
      {...props}
      about={SOCIAL_MEDIA}
      quickLinks={QUICK_LINKS}
      aboutSection={ABOUT}
      initiativeLogo={INITIATIVE_LOGO}
      CFA={CFA}
    />
  );
}

export default MainFooter;
