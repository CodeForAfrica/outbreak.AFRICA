import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { A } from "@commons-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  imageGrid: {
    marginTop: "2rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "4rem",
    },
  },
  img: {
    maxWidth: "100%",
    maxHeight: theme.typography.pxToRem(127),
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    [theme.breakpoints.up("md")]: {
      marginTop: "-3rem",
    },
  },
  descGrid: {
    marginTop: "-0.25rem",
  },
  divGrid: {
    marginTop: "2rem",
  },
}));

function PartnersGrid({ partners, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Typography variant="h2">Our Partners</Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.imageGrid}
        justify="center"
        spacing={isDesktop ? 10 : 2}
      >
        {partners.map((partner) => (
          <Grid item xs={12} md={6} key={partner.name}>
            <A href={partner.url}>
            <img
              src={partner.image}
              alt={partner.name}
              className={
                partner.name === "Africa Ar Xiv" ? classes.image : classes.img
              }
            />
            </A>
            <div
              className={
                partner.name === "Africa Ar Xiv"
                  ? classes.descGrid
                  : classes.divGrid
              }
            >
              {isDesktop && (
                <Typography variant="body2">{partner.description}</Typography>
              )}
            </div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

PartnersGrid.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PartnersGrid;
