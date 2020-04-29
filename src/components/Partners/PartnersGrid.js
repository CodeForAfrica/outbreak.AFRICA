import React from "react";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import africaarxiv from "assets/partnerLogos/africaarxiv/africaarxiv.png";
import africapractice from "assets/partnerLogos/africapractice/africapractice.png";
import aosh from "assets/partnerLogos/aosh/aosh.png";
import asi from "assets/partnerLogos/asi/asi.png";
import asln from "assets/partnerLogos/asln/asln.png";
import pesacheck from "assets/partnerLogos/pesacheck/pesacheck.png";
import takwimu from "assets/partnerLogos/takwimu/takwimu.png";
import wanadata from "assets/partnerLogos/wanadata/wanadata.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fcfc74",
    width: "100%",
    paddingLeft: '20px',
    [theme.breakpoints.up("md")]: {
      paddingLeft: '20%',
      paddingTop: '8%',
      paddingRight: '10%',
      paddingBottom: "5%",
    },
  },
  imageGrid: {
    marginTop: "2rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "4rem",
    },
  },
  typo: {
    color: "white",
    padding: "1rem 0rem",
  },
  img: {
    maxWidth: "100%",
    [theme.breakpoints.up("md")]: {
      height: "3rem",
      width: "auto",
    },
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    [theme.breakpoints.up("md")]: {
      marginTop: "-3rem",
    },
  },
  descGrid: {
    marginTop: '-0.25rem',
  },
  divGrid: {
    marginTop: "2rem",
  },
}));

const partners = [
  {
    name: "Africa Ar Xiv",
    image: `${africaarxiv}`,
    description:
      "Lorem ipsum is simply dummy text of the printing and typeseting industry",
  },
  {
    name: "Takwimu",
    image: `${takwimu}`,
    description:
      "Lorem ipsum is simply dummy text of the printing and typeseting industry",
  },
  {
    name: "Africa Practice",
    image: `${africapractice}`,
    description:
      "Lorem ipsum is simply dummy text of the printing and typeseting industry",
  },
  {
    name: "PesaCheck",
    image: `${pesacheck}`,
    description:
      "Lorem ipsum is simply dummy text of the printing and typeseting industry",
  },
  {
    name: "African Science Initiative",
    image: `${asi}`,
    description:
      "Lorem ipsum is simply dummy text of the printing and typeseting industry",
  },
  {
    name: "Africa Open Science Hardware",
    image: `${aosh}`,
    description:
      "Lorem ipsum is simply dummy text of the printing and typeseting industry",
  },
  {
    name: "African Science Literacy Network",
    image: `${asln}`,
    description:
      "Lorem ipsum is simply dummy text of the printing and typeseting industry",
  },
  {
    name: "Wanadata",
    image: `${wanadata}`,
    description:
      "Lorem ipsum is simply dummy text of the printing and typeseting industry",
  },
];

function PartnersGrid({ ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Typography variant="h1">
          Our Partners
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.imageGrid}
        justify="center"
        spacing={10}
      >
        {partners.map((partner) => (
          <Grid item xs={12} md={6}>
            <img
              src={partner.image}
              alt={partner.name}
              className={
                partner.image === `${africaarxiv}` ? classes.image : classes.img
              }
            />
            <div
              className={
                partner.image === `${africaarxiv}`
                  ? classes.descGrid
                  : classes.divGrid
              }
            >
              {useMediaQuery(theme.breakpoints.up("md")) ? (
                <Typography variant="body2">{partner.description}</Typography>
              ) : null}
            </div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default PartnersGrid;
