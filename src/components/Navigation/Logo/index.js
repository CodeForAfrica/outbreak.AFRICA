import React from "react";

import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import IconButton from "components/Link/IconButton";
import Link from "components/Link";
import logo from "assets/logo-outbreak-1.svg";
import logoDesktop from "assets/logo-outbreak.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  logo: {
    padding: 0,
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginLeft: "-1rem",
    },
    "&:hover": {
      backgroundColor: "unset",
    },
  },
  title: {
    display: "inline-block",
    fontSize: "1rem",
    lineHeight: 1,
    verticalAlign: "middle",
    width: "4.4375rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.35rem",
      width: "auto",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.25rem",
    },
  },
  titleLink: {
    fontSize: "inherit",
    lineHeight: "inherit",
  },
  titleMain: {
    fontSize: "inherit",
    lineHeight: "inherit",
  },
  titleSub: {
    color: theme.palette.primary.main,
    fontSize: "inherit",
    lineHeight: "inherit",
  },
}));

function Logo(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const src = isDesktop ? logoDesktop : logo;

  return (
    <>
      <IconButton href="/" className={classes.logo}>
        <img src={src} alt="Outbreak Covid-19" />
      </IconButton>
      <Typography variant="h1" className={classes.title}>
        <Link
          href="/"
          color="inherit"
          underline="none"
          className={classes.titleLink}
        >
          <Typography
            variant="h1"
            component="span"
            className={classes.titleMain}
          >
            Outbreak
          </Typography>
          <br />
          <Typography
            variant="h1"
            component="span"
            className={classes.titleSub}
          >
            Covid-19
          </Typography>
        </Link>
      </Typography>
    </>
  );
}

export default Logo;
