import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import { Footer } from "@commons-ui/core";

import pulitzer from "assets/pulitzer.png";
import cfaLogo from "assets/cfa.png";

// import Email from 'assets/Icon awesome-at.svg';
import Facebook from "assets/Icon awesome-facebook-f.svg";
import GitHub from "assets/Icon awesome-git.svg";
import Instagram from "assets/Icon awesome-instagram.svg";
import LinkedIn from "assets/Icon awesome-linkedin-in.svg";
import Twitter from "assets/Icon awesome-twitter.svg";
import cc from "assets/cc.svg";

const QUICK_LINKS = [
  {
    title: "MORE",
    links: [
      { href: "#", label: "FAQs" },
      { href: "#", label: "Data Sources" },
      { href: "#", label: "Methodology" },
    ],
  },
  {
    title: "CONTACTS",
    links: [
      { href: "#", label: "About Us" },
      { href: "#", label: "Join Us" },
      { href: "/contact", label: "Press Releases" },
    ],
  },
];

const LEGAL_LINKS = [
  { href: "#", label: "PRIVACY POLICY" },
  { href: "#", label: "TERMS OF SERVICE" },
];

const ABOUT = {
  about:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n" +
    "        sed diam nonumy eirmod tempor invidunt ut labore et dolore\n" +
    "        magna aliquyam erat, sed diam voluptua. At vero eos et\n" +
    "        accusam et justo duo dolores et ea rebum. Stet clita kasd\n" +
    "        gubergren, no sea takimata sanctus est",
  initiative:
    "This initiative was made possible with support \nfrom Pulitzer Center.",
};

const COPYRIGHT_LOGO = {
  image: cc,
  alt: "Creative Commons",
  link: "#",
};

const INITIATIVE_LOGO = {
  image: pulitzer,
  alt: "Plutizer Center",
  link: "https://link.url",
};

const ORGANIZATION_LOGO = {
  image: cfaLogo,
  alt: "CodeForAfrica",
  link: "#",
};

const SOCIAL_MEDIA = {
  // support: {
  //   email: 'hello@contact.com',
  //   image: {
  //     url: Email,
  //     alt: 'Email',
  //   },
  // },
  socialMedia: [
    {
      url: "https://linkedin.com",
      image: {
        url: LinkedIn,
        alt: "LinkedIn",
      },
    },
    {
      url: "https://instagram.com",
      image: {
        url: Instagram,
        alt: "Instagram",
      },
    },
    {
      url: "https://twitter.com",
      image: {
        url: Twitter,
        alt: "Twitter",
      },
    },
    {
      url: "https://facebook.com",
      image: {
        url: Facebook,
        alt: "Facebook",
      },
    },
    {
      url: "https://github.com/CodeForAfrica",
      image: {
        url: GitHub,
        alt: "GitHub",
      },
    },
  ],
};

const useStyles = makeStyles((theme) => ({
  typography: {
    fontWeight: 700,
    lineHeight: 69 / 27,
  },
  legalLinks: {
    marginTop: "3.09375",
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    },
  },
  legalLinksLink: {},
  stayInTouchLinks: {
    marginTop: "2.215rem",
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    },
  },
  stayInTouchText: {},
  text: {},
}));

function MainFooter({ classes: classesProp, ...props }) {
  const classes = useStyles({ classes: classesProp });

  return (
    <Footer
      {...props}
      about={SOCIAL_MEDIA}
      aboutSection={ABOUT}
      copyrightLogo={COPYRIGHT_LOGO}
      initiativeLogo={INITIATIVE_LOGO}
      legalLinks={LEGAL_LINKS}
      quickLinks={QUICK_LINKS}
      organizationLogo={ORGANIZATION_LOGO}
      classes={{
        legalLinks: classes.legalLinks,
        legalLinksLink: classNames(classes.typography, classes.legalLinksLink),
        stayInTouchLinks: classes.stayInTouchLinks,
        stayInTouchText: classNames(
          classes.typography,
          classes.stayInTouchText
        ),
        text: classNames(classes.typography, classes.text),
        ...classesProp,
      }}
    />
  );
}

export default MainFooter;
