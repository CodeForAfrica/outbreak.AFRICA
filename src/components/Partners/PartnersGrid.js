// NOTE(kilemensi) This component depends on natural size of images. Since
//                 each image has a different size, we can't do anything
//                 at the moment until we implement a WP loader for next/image
/* eslint-disable @next/next/no-img-element */
import { A } from "@commons-ui/core";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import ConditionalWrapper from "@/outbreakafrica/components/ConditionalWrapper";

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
  description: {
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
        spacing={isDesktop ? 4 : 2}
      >
        {partners.map((partner) => (
          <Grid item xs={12} md={6} key={partner.name}>
            <ConditionalWrapper
              condition={partner?.url}
              wrapper={A}
              href={partner?.url}
            >
              <img
                src={partner.image}
                alt={partner.name}
                objectFit="contain"
                className={classes.img}
              />
            </ConditionalWrapper>

            {isDesktop && (
              <Typography variant="body2" className={classes.description}>
                {partner.description}
              </Typography>
            )}
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
