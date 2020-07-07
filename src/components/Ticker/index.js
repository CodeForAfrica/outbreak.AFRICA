import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { A, Section } from "@commons-ui/core";

import Status from "./Status";

const useStyles = makeStyles((theme) => ({
  root: {},
  section: {},
  ticker: {
    border: "1px solid #D6D6D6",
    boxShadow: "0px 4px 4px #00000029",
    padding: "1.125rem",
    [theme.breakpoints.up("md")]: {
      padding: "2.25rem 2.625rem 1.95375rem",
    },
  },
  shareImg: {
    height: "auto",
    width: "2rem",
  },
  source: {
    color: "#9D9C9C",
    fontSize: "1rem",
  },
  status: {},
  statusBorderRight: {
    borderRight: "1px solid #D6D6D6",
  },
  statusBorderTop: {
    borderTop: "1px solid #D6D6D6",
    paddingTop: "1rem",
  },
  statusHighlight: {
    color: theme.palette.secondary.main,
  },
  statuses: {
    marginTop: "1.125rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "2.625rem",
    },
  },
  title: {},
}));

function Ticker({ lang, source, statuses, title, values, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up("md"));

  if (!values) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.ticker}
        >
          <Grid item xs={12} container justify="space-between">
            <Grid item>
              <Typography
                variant="subtitle2"
                component="h2"
                className={classes.title}
              >
                {title}
              </Typography>
            </Grid>
            {/* TODO(kilemensi): Hide share for MVP */}
            {/*
            <Grid item>
              <img src={shareIcon} alt="share" className={classes.shareImg} />
            </Grid>
            */}
          </Grid>
          <Grid item xs={12} container className={classes.statuses}>
            {statuses.map((status, index) => (
              <Grid key={status.name} item xs={6} md={3}>
                <Status
                  {...status}
                  value={values[status.slug]}
                  lang={lang}
                  classes={{
                    root: classNames(
                      classes.status,
                      {
                        [classes.statusBorderRight]: isMobile
                          ? index % 2 === 0
                          : index < statuses.length - 1,
                      },
                      { [classes.statusBorderTop]: isMobile && index > 1 },
                      { [classes.statusHighlight]: status.highlight }
                    ),
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12}>
            <A
              href={source.url}
              variant="caption"
              size="small"
              underline="none"
              className={classes.source}
            >
              Source: {source.title || source.url}
            </A>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

Ticker.propTypes = {
  lang: PropTypes.string,
  statuses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  source: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  values: PropTypes.shape({}).isRequired,
};

Ticker.defaultProps = {
  lang: undefined,
};

export default Ticker;
