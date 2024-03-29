import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import { getSitePage } from "@/outbreakafrica/cms";
import Hero from "@/outbreakafrica/components/Hero";
import Page from "@/outbreakafrica/components/Page";
import config from "@/outbreakafrica/config";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {},
  section: {
    margin: "0 1.25rem 0 1.375rem",
    width: "auto",
    [breakpoints.up("lg")]: {
      margin: "0 auto",
      width: "78.5rem",
    },
    [breakpoints.up("xl")]: {
      margin: "0 auto",
      width: "102.5rem",
    },
  },
}));

function Resources({ outbreak, ...props }) {
  const classes = useStyles(props);
  const {
    page: {
      hero_content: heroContent,
      title: { rendered: pageTitle },
    },
  } = outbreak;

  return (
    <Page
      outbreak={outbreak}
      title={pageTitle || "Resources"}
      classes={{ section: classes.section }}
    >
      <Hero heroContent={heroContent} classes={{ section: classes.section }} />
    </Page>
  );
}

Resources.propTypes = {
  errorCode: PropTypes.number,
  outbreak: PropTypes.shape({
    page: PropTypes.shape({
      hero_content: PropTypes.shape({}),
      title: PropTypes.shape({
        rendered: PropTypes.string,
      }),
    }),
  }),
};

Resources.defaultProps = {
  errorCode: undefined,
  outbreak: undefined,
};

export async function getServerSideProps({ query }) {
  const { lang: pageLanguage } = query;
  const lang = pageLanguage || config.DEFAULT_LANG;
  const outbreak = await getSitePage("resources", lang);

  return {
    props: {
      outbreak,
    },
  };
}

export default Resources;
