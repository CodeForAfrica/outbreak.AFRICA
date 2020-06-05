import React from 'react';
import {
  Grid,
  List,
  Typography,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Subscribe from 'components/Partners/Subscribe';
import FaqContent from 'components/Faq/FaqTopics/FaqContent';
import config from '../../config';
import Link from 'components/Link';

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    flexGrow: 1,
    padding: '1.5rem 0rem'
  },
  section: {},
  navGrid: {
    backgroundColor: '#EEEEEE',
    marginRight: 0,
    [breakpoints.up("md")]: {
      padding: '1.5rem',
      height: '362px'
    }
  },
  listGrid: {
    borderTop: '3px solid grey',
    borderBottom: '3px solid grey',
    [breakpoints.up("md")]: {
      borderTop: 0,
      borderBottom: 0,
    }
  },
  subscribeGrid: {
    backgroundColor: '#170F49',
    height: 'auto',
    padding: '4rem',
    width: '100%',
    marginRight: 0,
    [breakpoints.up("md")]: {
      padding: '1.5rem',
      marginRight: '10rem',
      height: '614px',
    }
  },
  contentGrid: {
    padding: "1rem 0rem",
    marginLeft: '5rem'
  },
  topic: {
    paddingTop: '10rem',
    '&:hover': {
      textDecoration: "none"
    }
  },
  link: {
    padding: '0.5rem',
    color: '#170F49',
    textDecoration: "none",
    '&:hover': {
      color: 'blue',
      textDecoration: "none"
    },
    '&:active': {
      color: 'blue',
      textDecoration: "none"
    }
  },
  list: {
    display: 'flex',
    padding: '1rem 0rem',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#eee',
    [breakpoints.up("md")]: {
      padding: '2rem',
      flexDirection: 'column',
    }
  },
  faqGrid: {
    height: 'auto',
    marginLeft: 0,
    paddingTop: '2rem',
    [breakpoints.up("md")]: {
      marginLeft: '5rem',
      paddingTop: 0
    }
  },
  listTitle: { fontWeight: 700 },
  captionTitle: {
    fontWeight: 700,
    fontSize: '1rem',
    textTransform: 'Uppercase',
    color: 'grey',
    [breakpoints.up("md")]: {
      textTransform: 'Capitalize',
      color: '#170F49'
    },
    '&:hover': {
      color: 'blue',
      textDecoration: "none"
    },
    '&:active': {
      color: 'blue',
      textDecoration: "none"
    }

  }
}));

function FaqSection() {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-start"
      >
        <Grid item xs={12} md={3} className={classes.listGrid}>
          <List
            component="nav"
            aria-label="Navigation list"
            className={classes.list}>
            {config.faqTopics.map(topic =>
              <Link href={`#${topic.slug}`} className={classes.link}>
                <Typography className={classes.captionTitle}>{topic.title}</Typography>
              </Link>
            )}
          </List>
          {isDesktop ?
            <Grid item className={classes.subscribeGrid}>
              <Subscribe />
            </Grid> : <div />}
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          className={classes.faqGrid}>
          <FaqContent />
        </Grid>
        {!isDesktop ?
          <Grid item className={classes.subscribeGrid}>
            <Subscribe />
          </Grid> : null}
      </Grid>
    </div>
  )
}

export default FaqSection
