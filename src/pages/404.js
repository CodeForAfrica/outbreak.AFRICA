import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import { getSitePage } from "@/outbreakafrica/cms";
import Error from "@/outbreakafrica/components/Error";
import Footer from "@/outbreakafrica/components/Footer";
import Navigation from "@/outbreakafrica/components/Navigation";
import config from "@/outbreakafrica/config";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {
    // Seems like you need height defined for AppBar position="sticky" to work
    // see: https://github.com/mui-org/material-ui/issues/16186
    height: "100vh",
    // font-boosting: https://stackoverflow.com/questions/13430897/how-to-override-font-boosting-in-mobile-chrome#comment61478376_16432702
    maxHeight: 999999,
    overflowX: "hidden",
  },
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
      width: widths.values.xl,
    },
  },

  footer: {
    marginTop: typography.pxToRem(91.82),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(81.39),
    },
  },
}));

function Page({ outbreak, posts, classes: classesProp }) {
  const classes = useStyles({ classes: classesProp });

  return (
    <div className={classes.root}>
      <Navigation outbreak={outbreak} classes={{ section: classes.section }} />
      <Error
        articles={posts}
        variant="stories"
        title="Page Not Found"
        tagline="Ooops The Page you are looking for cannot be found. Try Browsing the menu bar or read one of our Articles Below"
        classes={{ section: classes.section }}
      />
      <Footer
        outbreak={outbreak}
        classes={{ root: classes.footer, section: classes.section }}
      />
    </div>
  );
}

Page.propTypes = {
  classes: PropTypes.shape({}),
  outbreak: PropTypes.shape({}),
  posts: PropTypes.arrayOf({}),
};

Page.defaultProps = {
  classes: undefined,
  outbreak: undefined,
  posts: undefined,
};

export async function getStaticProps(query) {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const {
    page: { posts },
  } = await getSitePage("insights-stories", lang);
  const outbreak = await getSitePage("index", lang);

  return {
    props: {
      outbreak,
      posts,
    },
    revalidate: 2 * 24 * 60 * 60, // 2 days,
  };
}

export default Page;
