import React from 'react';
import {
  Grid,
  Typography,
  IconButton,
  Divider,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import iconBox from 'assets/icon-infobox.svg';
import config from '../../../config';

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    paddingBottom: '3rem'
  },
  link: {
    '&:hover': {
      textDecoration: "none"
    }
  },
  expansionPanel: {
    backgroundColor: '#C1D5FF',
    boxShadow: 'none',
    '& .MuiExpansionPanel-root.Mui-expanded': {
      margin: 0
    }
  },
  expansionPanelSummary: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  title: {
    color: '#170F49',
    fontWeight: 600
  },
  subtitle: {
    fontWeight: 600
  },
  divider: {
    border: '0.8px solid #170F49'
  },
  dividerGrid: {
    marginLeft: '1rem'
  },
  expanded: {}
}));

export default function FaqContent() {
  const [expanded, setExpanded] = React.useState('panel1');
  const classes = useStyles();
  console.log(config.faqTopics.map(topic => topic.topics.map(content => content)))

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    event.stopPropagation();
  };

  return (
    <>
      {config.faqTopics.map(topic =>
        <div className={classes.root} id={topic.slug}>
          <a id={topic.slug} className={classes.link}>
            <Grid
              container
              item xs={12}
              direction="row"
              alignItems="baseline"
              className={classes.organization}
            >
              <Grid item >
                <IconButton>
                  <img src={iconBox} alt="example" />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography
                  variant="h3"
                  className={classes.title}>
                  {topic.title}
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                md={8}
                className={classes.dividerGrid}>
                <Divider
                  variant=" fullWidth"
                  className={classes.divider} />
              </Grid>
            </Grid>

            <div>
              {topic.topics.map(content =>
                <ExpansionPanel
                  square
                  expanded={expanded === content.panel}
                  onChange={handleChange(content.panel)}
                  className={classes.expansionPanel}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${content.panel}d-content`}
                    id={`${content.panel}d-header`}
                  >
                    <Typography
                      variant="h6"
                      className={classes.subtitle}>
                      {content.subtitle}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography variant="body2">
                      {content.content}
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )}
            </div>
          </a>
        </div>
      )}
    </>
  );
}
