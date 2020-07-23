import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import { Footer } from "@commons-ui/core";

import Link from "components/Link";
import cc from "assets/cc.svg";

const COPYRIGHT_LOGO = {
  image: {
    alt: "Creative Commons",
    url: cc,
  },
  url: "//creativecommons.org",
};

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {},
  section: {},
  initiative: {
    "& img": {
      objectFit: "contain",
      width: typography.pxToRem(154),
    },
    [breakpoints.up("md")]: {
      textAlign: "right",
      "& img": {
        width: typography.pxToRem((widths.values.md * 189) / widths.values.xl),
      },
    },
    [breakpoints.up("lg")]: {
      "& img": {
        width: typography.pxToRem((widths.values.lg * 189) / widths.values.xl),
      },
    },
    [breakpoints.up("xl")]: {
      "& img": {
        width: typography.pxToRem(189),
      },
    },
  },
  copyright: {
    "& img": {
      height: typography.caption.fontSize,
      width: typography.caption.fontSize,
    },
  },
  legalLinks: {
    marginTop: "3.09375",
    [breakpoints.up("md")]: {
      marginTop: 0,
    },
  },
  legalLinksLink: {},
  organizationLogo: {
    objectFit: "contain",
    width: typography.pxToRem(222),
    [breakpoints.up("md")]: {
      width: typography.pxToRem((widths.values.md * 293) / widths.values.xl),
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem((widths.values.lg * 293) / widths.values.xl),
    },
    [breakpoints.up("xl")]: {
      width: typography.pxToRem(293),
    },
  },
  primary: {
    paddingBottom: typography.pxToRem(50),
    [breakpoints.up("md")]: {
      paddingBottom: typography.pxToRem(50),
    },
  },
  quickLinksContact: {
    "& li": {
      marginTop: "1rem",
    },
  },
  quickLinksMore: {
    "& li": {
      marginTop: "1rem",
    },
  },
  secondary: {
    [breakpoints.up("md")]: {
      paddingBottom: typography.pxToRem(
        (breakpoints.values.md * 80.5) / breakpoints.values.xl
      ),
      paddingTop: typography.pxToRem(
        (breakpoints.values.md * 86) / breakpoints.values.xl
      ),
    },
    [breakpoints.up("lg")]: {
      paddingBottom: typography.pxToRem(
        (breakpoints.values.lg * 80.5) / breakpoints.values.xl
      ),
      paddingTop: typography.pxToRem(
        (breakpoints.values.lg * 86) / breakpoints.values.xl
      ),
    },
    [breakpoints.up("xl")]: {
      paddingBottom: typography.pxToRem(80.5),
      paddingTop: typography.pxToRem(86),
    },
  },
  stayInTouchLinks: {
    marginTop: "2.215rem",
    "& img": {
      height: typography.caption.fontSize,
      width: typography.caption.fontSize,
    },
    [breakpoints.up("md")]: {
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
      social_media: socialMedia,
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
      about={about}
      contacts={{ title: "Stay in touch with us", socialMedia }}
      copyrightLogo={COPYRIGHT_LOGO}
      initiativeLogo={initiativeLogo}
      legalLinks={legalLinks}
      quickLinks={quickLinks}
      organizationLogo={organizationLogo}
      classes={{
        root: classes.root,
        section: classes.section,
        initiative: classes.initiative,
        copyright: classes.copyright,
        legalLinks: classes.legalLinks,
        legalLinksLink: classNames(classes.typography, classes.legalLinksLink),
        organizationLogo: classes.organizationLogo,
        primary: classes.primary,
        quickLinksContact: classes.quickLinksContact,
        quickLinksMore: classes.quickLinksMore,
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
