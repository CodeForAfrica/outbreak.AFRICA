import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import { Footer } from "@commons-ui/core";

import Link from "components/Link";

// import Email from 'assets/Icon awesome-at.svg';
import Facebook from "assets/Icon awesome-facebook-f.svg";
import GitHub from "assets/Icon awesome-git.svg";
import Instagram from "assets/Icon awesome-instagram.svg";
import LinkedIn from "assets/Icon awesome-linkedin-in.svg";
import Twitter from "assets/Icon awesome-twitter.svg";
import cc from "assets/cc.svg";

const COPYRIGHT_LOGO = {
  image: {
    alt: "Creative Commons",
    url: cc,
  },
  url: "/#",
};

const SOCIAL_MEDIA = {
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
  initiative: {
    [theme.breakpoints.up("md")]: {
      "& img": {
        width: "100%",
      },
    },
  },
  copyright: {
    "& img": {
      height: theme.typography.caption.fontSize,
      width: theme.typography.caption.fontSize,
    },
  },
  legalLinks: {
    marginTop: "3.09375",
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    },
  },
  legalLinksLink: {},
  organizationLogo: {
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  primary: {
    paddingBottom: theme.typography.pxToRem(50),
    [theme.breakpoints.up("md")]: {
      paddingBottom: theme.typography.pxToRem(50),
    },
  },
  secondary: {
    [theme.breakpoints.up("md")]: {
      paddingBottom: theme.typography.pxToRem(50),
      paddingTop: theme.typography.pxToRem(50),
    },
    [theme.breakpoints.up("xl")]: {
      paddingBottom: theme.typography.pxToRem(80.5),
      paddingTop: theme.typography.pxToRem(86),
    },
  },
  stayInTouchLinks: {
    marginTop: "2.215rem",
    "& img": {
      height: theme.typography.caption.fontSize,
      width: theme.typography.caption.fontSize,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    },
  },
  stayInTouchText: {},
  text: {},
  typography: {
    fontWeight: 700,
    lineHeight: 69 / 27,
  },
}));

const toLink = (link) => {
  if (!(link && link.href)) {
    return link;
  }
  let as;
  let { href } = link;
  // About page links
  if (link.href.startsWith("/about/")) {
    as = href;
    href = "/about/[...slug]";
  }
  // Resource link
  if (link.href.startsWith("/insights/")) {
    as = href;
    href = "/insights/[slug]";
  }
  return { as, href };
};

function MainFooter({
  classes: classesProp,
  outbreak: {
    page: {
      about,
      initiative_logo: initiativeLogoProp,
      legal_links: legalLinksLinks,
      organization_logo: organizationLogoProp,
      quick_links: quickLinksLinks,
    },
  },
  ...props
}) {
  const classes = useStyles({ classes: classesProp });
  const initiativeLogo = {
    image: { url: initiativeLogoProp.image, alt: organizationLogoProp.alt },
    url: initiativeLogoProp.link,
  };
  const organizationLogo = {
    image: { url: organizationLogoProp.image, alt: organizationLogoProp.alt },
    url: organizationLogoProp.link,
  };
  const legalLinks = {
    linkComponent: Link,
    links: legalLinksLinks.map((l) => ({
      ...l,
      as: l.href,
      href: "/legal/[...slug]",
    })),
  };
  const quickLinks = quickLinksLinks.map((q) => ({
    ...q,
    links: q.links.map((l) => ({ ...l, ...toLink(l) })),
    linkComponent: Link,
  }));

  return (
    <Footer
      {...props}
      about={SOCIAL_MEDIA}
      aboutSection={about}
      copyrightLogo={COPYRIGHT_LOGO}
      initiativeLogo={initiativeLogo}
      legalLinks={legalLinks}
      quickLinks={quickLinks}
      organizationLogo={organizationLogo}
      classes={{
        initiative: classes.initiative,
        copyright: classes.copyright,
        legalLinks: classes.legalLinks,
        legalLinksLink: classNames(classes.typography, classes.legalLinksLink),
        organizationLogo: classes.organizationLogo,
        primary: classes.primary,
        secondary: classes.secondary,
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

MainFooter.propTypes = {
  outbreak: PropTypes.shape({
    page: PropTypes.shape({
      about: PropTypes.shape({}),
      initiative_logo: PropTypes.shape({}),
      legal_links: PropTypes.arrayOf(PropTypes.shape({})),
      quick_links: PropTypes.arrayOf(PropTypes.shape({})),
      organization_logo: PropTypes.shape({}),
    }),
  }).isRequired,
};

export default MainFooter;
