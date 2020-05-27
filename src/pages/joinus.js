import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import config from "config";
import { getSitePage } from "cms";

import Page from "components/Page";
import Join from "components/Join";


const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {},
  section: {
    margin: "0 1.25rem 0 1.375rem",
    width: "auto",
    /** Since our design if of XL, we're going to optimize for space in
     * MD & LG i.e. minimize margins
     */
    [breakpoints.up("md")]: {
      margin: "0 auto",
      width: widths.values.md,
    },
    [breakpoints.up("lg")]: {
      width: widths.values.lg,
    },
    [breakpoints.up("xl")]: {
      margin: "0 auto",
      width: widths.values.xl,
    },
  },
  featuredData: {
    marginTop: typography.pxToRem(46),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(78.74),
    },
  },
  featuredResearch: {
    marginTop: typography.pxToRem(71),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(104),
    },
  },
  featuredResearchers: {
    marginTop: typography.pxToRem(56),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(133),
    },
  },
  featuredStories: {
    marginTop: typography.pxToRem(58),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(133),
    },
  },
  mythBusting: {
    marginTop: typography.pxToRem(56.5),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(142.5),
    },
  },
  partners: {
    marginTop: typography.pxToRem(79.5),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(155.5),
    },
  },
  ticker: {
    marginTop: typography.pxToRem(53.5),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(61),
    },
  },
}));

function JoinUs({ outbreak, featuredExperts, ...props }) {
  const classes = useStyles(props);

  const {
    page: { },
  } = outbreak;

  return (
    <Page outbreak={outbreak} classes={{ section: classes.section }}>
      <Join />
    </Page>
  );
}

JoinUs.propTypes = {
  outbreak: PropTypes.shape({
    language: PropTypes.string,
    page: PropTypes.shape({
      rendered: PropTypes.string,
    }),
  }).isRequired,
};

JoinUs.getInitialProps = async (props) => {
  const {
    query: { lang: pageLanguage },
  } = props;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const {
    page: { featured_experts: featuredExperts },
  } = await getSitePage("research-experts", lang);
  const outbreak = await getSitePage("index", lang);

  return {
    outbreak,
    featuredExperts,
  };
};

export default JoinUs;
