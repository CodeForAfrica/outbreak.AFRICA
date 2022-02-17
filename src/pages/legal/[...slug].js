import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { getSitePageWithChildren } from "@/outbreakafrica/cms";
import Content from "@/outbreakafrica/components/Content";
import Hero from "@/outbreakafrica/components/Hero";
import JoinUs from "@/outbreakafrica/components/JoinUs";
import Page from "@/outbreakafrica/components/Page";
import config from "@/outbreakafrica/config";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {},
  section: {
    margin: "0 1.25rem 0 1.375rem",
    width: "auto",
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
  content: {},
  joinUs: {
    marginTop: 0,
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(50),
    },
  },
  subscribe: {},
  heroDescription: {
    [breakpoints.up("md")]: {
      maxWidth: (widths.values.md * 812) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      maxWidth: (widths.values.lg * 812) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      maxWidth: "50.75rem",
    },
  },
}));

function Legal({ errorCode, outbreak, slug, ...props }) {
  const classes = useStyles(props);
  const {
    page: {
      hero_content: heroContent,
      join_us: joinUs,
      subscribe,
      title: { rendered: pageTitle },
      children: childPages,
    },
  } = outbreak;
  const contents =
    childPages?.map((page) => ({
      ...page,
      as: `/legal/${page.slug}`,
      href: "/legal/[...slug]",
      name: page.title.rendered,
    })) || [];
  useEffect(() => {
    const timer = setTimeout(() => {
      if (slug) {
        const sub = document.getElementById(slug);
        if (sub) {
          sub.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [slug]);

  return (
    <Page
      errorCode={errorCode}
      outbreak={outbreak}
      title={pageTitle || "Legal"}
      classes={{ section: classes.section }}
    >
      <Hero heroContent={heroContent} classes={{ section: classes.section }} />
      <Content
        contents={contents}
        current={slug}
        subscribe={subscribe}
        classes={{
          root: classes.content,
          section: classes.section,
        }}
      />
      <JoinUs
        classes={{
          root: classes.joinUs,
          section: classes.section,
        }}
        joinUs={joinUs}
      />
    </Page>
  );
}

Legal.propTypes = {
  errorCode: PropTypes.number,
  outbreak: PropTypes.shape({
    page: PropTypes.shape({
      children: PropTypes.node,
      join_us: PropTypes.shape({}),
      hero_content: PropTypes.shape({}),
      subscribe: PropTypes.shape({}),
      title: PropTypes.shape({
        rendered: PropTypes.string,
      }),
    }),
  }),
  slug: PropTypes.string,
};

Legal.defaultProps = {
  errorCode: undefined,
  outbreak: undefined,
  slug: undefined,
};

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage, slug: pageSlug } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePageWithChildren("legal", lang);
  const [firstSlug] = pageSlug || [];
  const slug = (firstSlug && firstSlug.toLowerCase()) || null;
  let errorCode = null;
  if (slug) {
    const index = outbreak.page.children
      ? outbreak.page.children.findIndex((child) => child.slug === slug)
      : -1;
    if (index === -1) {
      errorCode = 404;
    }
  }

  return {
    props: { errorCode, outbreak, slug },
  };
}

export default Legal;
