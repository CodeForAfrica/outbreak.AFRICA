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
  faqGrid: {
    height: 'auto',
    marginLeft: 0,
    paddingTop: '2rem',
    [breakpoints.up("md")]: {
      marginLeft: '3rem',
      paddingTop: 0
    }
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
        <Grid item xs={12} md={3}>
          <List
            component="nav"
            aria-label="secondary mailbox folders"
            className={classes.list}>
            {config.faqTopics.map(topic =>
              <ListItemLink href={`#${topic.slug}`}>
                <ListItemText
                  primary={<Typography type="body1" style={{ fontWeight: 700 }}>{topic.title}</Typography>}
                />
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
