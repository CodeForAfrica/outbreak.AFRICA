import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { useRouter } from "next/router";

import Datasets from "components/CkanDatasets";
import Hero from "components/Hero";
import Page from "components/Page";

import config from "config";
import { getSitePage } from "cms";

const DEFAULT_QUERY =
  "fq=vocab_Topics:covid-19&rows=10&sort=pageviews_last_14_days desc";

const useStyles = makeStyles((theme) => ({
  root: {},
  section: {
    margin: "0 1.25rem 0 1.375rem",
    width: "auto",
    [theme.breakpoints.up("lg")]: {
      margin: "0 auto",
      width: "78.5rem",
    },
    [theme.breakpoints.up("xl")]: {
      margin: "0 auto",
      width: "102.5rem",
    },
  },
}));

function FeaturedDatasets({ ckanQuery, count, outbreak, results, ...props }) {
  const classes = useStyles(props);
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

  const {
    page: {
      hero_carousel: heroCarousel,
      title: { rendered: pageTitle },
    },
  } = outbreak;
  useEffect(() => {
    const { asPath } = router;
    const pathname = asPath.split("?")[0];
    router.push(`${pathname}?${ckanQuery}`, undefined, { shallow: true });
  }, [ckanQuery]);

  return (
    <Page
      outbreak={outbreak}
      title={pageTitle || "Featured Datasets"}
      classes={{ section: classes.section }}
    >
      <Hero
        heroCarousel={heroCarousel}
        classes={{ section: classes.section }}
      />
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

/**
 * We are using getInitialProps and not the recommended getServerSideProps
 * because getServerSideProps does not support asPath as of yet.
 */
FeaturedDatasets.getInitialProps = async ({ query, asPath }) => {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const asPaths = asPath.split("?");
  const ckanQuery =
    asPaths.length === 2 && asPaths[1] ? asPaths[1] : DEFAULT_QUERY;
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
