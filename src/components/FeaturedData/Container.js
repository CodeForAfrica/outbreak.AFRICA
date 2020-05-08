import React from "react";
import dynamic from 'next/dynamic';

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ChartFactory } from "@hurumap-ui/charts";
import { useProfileLoader } from "@hurumap-ui/core";

import logo from 'assets/images/logo/logo-outbreak.svg';
const ChartContainer = dynamic(
  () => import('@hurumap-ui/core/ChartContainer'),
  {
    ssr: false
  }
);

import { RichTypography } from "@commons-ui/core";

import shareIcon from "assets/icon-share.svg";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  chart: {
    boxShadow: "0px 4px 4px #00000029",
    border: "1px solid #D6D6D6",
    marginBottom: "1.3125rem",
    marginTop: "2.5rem",
    padding: "42px 38px 33px 38px",
    position: "relative",
    width: "100%",
    "& img": {
      height: "auto",
      width: "100%",
    },
  },
  icon: {
    position: "absolute",
    right: 38,
    top: 42,
    "& img": {
      height: "auto",
      width: "2rem",
    },
  },
}));

function Container({ action, children, description, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <div className={classes.chart}>
        <div className={classes.icon}>
          <img src={shareIcon} alt="share" />
        </div>
        {children}
      </div>
      <div className={classes.description}>
        <RichTypography variant="body2">{description}</RichTypography>
      </div>
      <div className={classes.description}>
        <Button variant="contained" size="large">
          {action}
        </Button>
      </div>
    </div>
  );
}

export default withApollo(Container);
