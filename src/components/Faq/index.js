import React from 'react';
import {
  Grid,
  List,
  Typography
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
    padding: '2rem',
    flexDirection: 'column',
    backgroundColor: '#eee'
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
  listTitle: { fontWeight: 700 }
}));

function FaqSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-start"
      >
        <Grid item xs={12} md={3}>
          <List
            component="nav"
            aria-label="Navigation list"
            className={classes.list}>
            {config.faqTopics.map(topic =>
              <Link href={`#${topic.slug}`} className={classes.link}>
                <Typography variant="caption" style={{ fontWeight: 700 }}>{topic.title}</Typography>
              </Link>
            )}
          </List>
          <Grid item className={classes.subscribeGrid}>
            <Subscribe />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          className={classes.faqGrid}>
          <FaqContent />
        </Grid>
      </Grid>
    </div>
  )
}

export default FaqSection
