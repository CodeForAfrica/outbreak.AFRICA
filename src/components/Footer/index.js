import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import { Footer } from "@commons-ui/core";

// import Email from 'assets/Icon awesome-at.svg';
import Facebook from "assets/Icon awesome-facebook-f.svg";
import GitHub from "assets/Icon awesome-git.svg";
import Instagram from "assets/Icon awesome-instagram.svg";
import LinkedIn from "assets/Icon awesome-linkedin-in.svg";
import Twitter from "assets/Icon awesome-twitter.svg";
import cc from "assets/cc.svg";

const COPYRIGHT_LOGO = {
  image: cc,
  alt: "Creative Commons",
  link: "#",
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

function MainFooter({
  classes: classesProp,
  outbreak: {
    page: {
      about,
      initiative_logo: initiativeLogo,
      legal_links: legalLinks,
      organization_logo: organizationLogo,
      quick_links: quickLinks,
    },
  },
  ...props
}) {
  const classes = useStyles({ classes: classesProp });
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

MainFooter.propTypes = {
  outbreak: PropTypes.shape({
    page: PropTypes.shape({
      about: PropTypes.shape({}),
      organization_logo: PropTypes.shape({}),
      initiative_logo: PropTypes.shape({}),
      quick_links: PropTypes.shape({}),
      legal_links: PropTypes.shape({}),
    }),
  }).isRequired,
};

export default MainFooter;
