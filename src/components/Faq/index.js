import React from 'react';
import {
  Grid,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Subscribe from 'components/Partners/Subscribe';
import FaqContent from 'components/Faq/FaqTopics/FaqContent';

import config from '../../config';

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
  list: {
    padding: '3rem 2rem',
    height: '334px',
    backgroundColor: '#eee'
  },
  listItemText: {
    color: '#170F49'
  },
  faqGrid: {
    height: 'auto',
    marginLeft: '5rem',
    padding: 0
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function FaqSection() {
  const classes = useStyles();
  console.log(config.faqTopics)
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-start">
        <Grid item xs={12} md={3}>
          <List
            component="nav"
            aria-label="secondary mailbox folders"
            className={classes.list}>
            {config.faqTopics.map(topic =>
              <ListItemLink href={`#${topic.slug}`}>
                <ListItemText
                  primary={topic.title}
                  className={classes.listItemText} />
              </ListItemLink>
            )}
          </List>
          <Grid item className={classes.subscribeGrid}>
            <Subscribe />
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} className={classes.faqGrid}>
          <FaqContent />
        </Grid>
      </Grid>
    </div>
  )
}

export default FaqSection
