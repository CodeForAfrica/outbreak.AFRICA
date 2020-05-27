import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import config from "config";
import { getSitePage } from "cms";

import Page from "components/Page";
import SubscribePage from "components/Join/SubscribePage";


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
  subscribe: {
    marginTop: "3.5rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "3.8125rem",
    },
  },
}));

function Subscibe({ outbreak, ...props }) {
  const classes = useStyles(props);

  const {
    page: { },
  } = outbreak;

  return (
    <Page outbreak={outbreak} classes={{ section: classes.section }}>
      <SubscribePage
        classes={{
          root: classes.subscribe,
          section: classes.section
        }}
      />
    </Page>
  );
}

Subscibe.propTypes = {
  outbreak: PropTypes.shape({
    language: PropTypes.string,
    page: PropTypes.shape({
      rendered: PropTypes.string,
    }),
  }).isRequired,
};

Subscibe.getInitialProps = async (props) => {
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

export default Subscibe;
