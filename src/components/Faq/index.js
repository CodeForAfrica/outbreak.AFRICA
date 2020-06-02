import React from 'react';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Subscribe from 'components/Partners/Subscribe';
import Services from 'components/Faq/FaqTopics/Services';
import About from 'components/Faq/FaqTopics/About';
import NewTopic from 'components/Faq/FaqTopics/NewTopic';
import Topic from 'components/Faq/FaqTopics/Topic';

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
    order: 2,
    [breakpoints.up("md")]: {
      padding: '1.5rem',
      marginRight: '10rem',
      height: '614px',
      order: 1,
    }
  },
  contentGrid: {
    padding: "1rem 0rem",
    marginLeft: '5rem'
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function FaqSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-start">
        <Grid item xs={3}>
          <List component="nav" aria-label="secondary mailbox folders" style={{ padding: '3rem 0rem', height: '334px', backgroundColor: '#eee' }}>
            <ListItem button>
              <ListItemText primary="Topic 1" style={{ color: '#170F49' }} />
            </ListItem>
            <ListItemLink href="#simple-list">
              <ListItemText primary="Topic 2" style={{ color: '#170F49' }} />
            </ListItemLink>
            <ListItemLink href="#simple-list">
              <ListItemText primary="Topic 3" style={{ color: '#170F49' }} />
            </ListItemLink>
            <ListItemLink href="#simple-list">
              <ListItemText primary="Topic 4" style={{ color: '#170F49' }} />
            </ListItemLink>
          </List>
          <Grid item style={{ backgroundColor: '#170F49' }}>
            <Subscribe />
          </Grid>
        </Grid>

        <Grid item xs={6} style={{ height: 'auto', marginLeft: '5rem', padding: 0 }}>
          <About />
          <Services />
          <NewTopic />
          <Topic />
        </Grid>
      </Grid>
    </div>
  )
}

export default FaqSection
