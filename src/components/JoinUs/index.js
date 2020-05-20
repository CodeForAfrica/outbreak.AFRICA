import React from 'react'

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinkButton from "components/Link/Button";

import { Section } from "@commons-ui/core";

import img2 from 'assets/joinus-illo-1.svg';
import img1 from 'assets/joinus-illo-2.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: '3rem 0rem',
    padding: '1rem 0rem',
    backgroundColor: '#f9ff71'
  },
  section: {},
  container: {},
  contentContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: 'center',
    marginTop: '3rem',
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "flex-start"
    },
  },
  img1: {
    height: 'auto',
    width: '100%',
    maxHeight: '250px'
  },
  img2: {
    height: 'auto',
    width: '100%',
    maxHeight: '300px'
  },
  subtitle: {
    padding: '1rem 0rem'
  },
  divContainers: {
    padding: '3rem',
    [theme.breakpoints.up("md")]: {
      padding: 0,
    }
  },
  button: {
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: "0.5rem",
    width: "auto",
    borderBottom: "3px solid #170F49",
    [theme.breakpoints.up("lg")]: {
      marginRight: "2rem",
    },
    [theme.breakpoints.up("xl")]: {
      marginRight: "4rem",
    },
  },
}));

function JoinUs({ title, subtitle, ...props }) {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.container}>
          <Grid item xs={12} md={8} className={classes.contentContainer}>
            <div className={classes.divContainers}>
              <img src={img1} alt="img2" className={classes.img1} />
            </div>
            <div className={classes.divContainers}>
              <Typography variant="h2">{title}</Typography>
              <Typography variant="body1" className={classes.subtitle}>{subtitle}</Typography>
              <LinkButton
                href="/research"
                size="medium"
                className={classes.button}>
                Learn More
          </LinkButton>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.divContainers}>
              <img src={img2} alt="img1" className={classes.img2} />
            </div>
          </Grid>
        </Grid>
      </Section>
    </div>
  )
}

export default JoinUs
