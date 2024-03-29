import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { getSitePage } from "@/outbreakafrica/cms";
import Datasets from "@/outbreakafrica/components/CkanDatasets";
import Hero from "@/outbreakafrica/components/Hero";
import Page from "@/outbreakafrica/components/Page";
import config from "@/outbreakafrica/config";

const GROUP_QUERY = "fq=groups:covid-19&rows=10&sort=score desc";

const useStyles = makeStyles(({ breakpoints, widths }) => ({
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
      margin: "0 auto",
      width: widths.values.xl,
    },
  },
  heroDescription: {
    [breakpoints.up("md")]: {
      maxWidth: (widths.values.md * 536) / widths.values.xl,
    },
    [breakpoints.up("lg")]: {
      maxWidth: (widths.values.lg * 536) / widths.values.xl,
    },
    [breakpoints.up("xl")]: {
      maxWidth: "33.5rem",
    },
  },
}));

function FeaturedDatasets({ ckanQuery, count, outbreak, results, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const {
    page: {
      hero_content: heroContent,
      title: { rendered: pageTitle },
    },
  } = outbreak;
  const router = useRouter();
  const { q, rows, sort } = router.query;

  const reload = (name, value) => {
    const { query, pathname } = router;
    query[name] = value;
    router.push({ pathname, query });
  };
  const handlePageSize = (newRows) => {
    reload("rows", newRows);
  };

  const handleSearch = (e) => {
    if (e) {
      reload("q", e.target.value);
    }
  };

  const handleSort = (e) => {
    if (e) {
      reload("sort", e.target.value);
    }
  };

  useEffect(() => {
    const { asPath } = router;
    const pathname = asPath.split("?")[0];
    router.push(`${pathname}?${ckanQuery}`, undefined, { shallow: true });
    // router shouldn't be part of useEffect dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ckanQuery]);

  return (
    <Page
      outbreak={outbreak}
      title={pageTitle || "Featured Datasets"}
      classes={{ section: classes.section }}
    >
      {isDesktop && (
        <Hero
          heroContent={heroContent}
          isResearch
          classes={{
            description: classes.heroDescription,
            section: classes.section,
          }}
        />
      )}
      <Datasets
        count={count}
        onPageSize={handlePageSize}
        onSearch={handleSearch}
        onSort={handleSort}
        rows={rows}
        sort={sort}
        q={q}
        results={results}
        classes={{ section: classes.section }}
      />
    </Page>
  );
}

FeaturedDatasets.propTypes = {
  ckanQuery: PropTypes.string,
  count: PropTypes.number,
  outbreak: PropTypes.shape({
    page: PropTypes.shape({
      featured_experts: PropTypes.shape({
        experts: PropTypes.arrayOf(PropTypes.shape({})),
      }),
      hero_content: PropTypes.shape({}),
      section_title: PropTypes.string,
      subscribe: PropTypes.shape({}),
      title: PropTypes.shape({
        rendered: PropTypes.string,
      }),
    }),
  }),
  results: PropTypes.arrayOf(PropTypes.shape({})),
};

FeaturedDatasets.defaultProps = {
  ckanQuery: undefined,
  count: undefined,
  outbreak: undefined,
  results: undefined,
};

/**
 * We are using getInitialProps and not the recommended getServerSideProps
 * because getServerSideProps does not support asPath as of yet.
 */
FeaturedDatasets.getInitialProps = async ({ query, asPath }) => {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const asPaths = asPath.split("?");
  const ckanQuery =
    asPaths.length === 2 && asPaths[1] ? asPaths[1] : GROUP_QUERY;
  const response = await fetch(
    `${config.CKAN_BACKEND_URL}/api/3/action/package_search?${ckanQuery}`
  );
  const result = response.ok ? await response.json() : {};
  const count = (result.success && result.result.count) || null;
  const results = (result.success && result.result.results) || null;
  const outbreak = await getSitePage("research-datasets", lang);

  return {
    ckanQuery,
    count,
    outbreak,
    results,
  };
};

export default FeaturedDatasets;
