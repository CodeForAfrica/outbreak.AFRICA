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
import Link from 'components/Link'

import iconBox from 'assets/icon-infobox.svg'

const useStyles = makeStyles(({ theme }) => ({
  root: {
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
  expansionPanelSummary: {//ExpansionPanelSummary
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
  expanded: {}
}));

export default function About() {
  const [expanded, setExpanded] = React.useState('panel1');
  const classes = useStyles();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <a id="topic-1" className={classes.root}>
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
          <Typography variant="h3" style={{ color: '#170F49' }}>Topic 1</Typography>
        </Grid>
        <Grid item xs={8} style={{ marginLeft: '1rem' }}>
          <Divider variant=" fullWidth" style={{ border: '0.8px solid #170F49' }} />
        </Grid>
      </Grid>

      <div >
        <ExpansionPanel
          square
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography
              variant="h6">
              Question
              </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body2">
              Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure
              Latin words, consectetur, from a Lorem Ipsum passage,
              and going through the cites of the word in classical
              literature, discovered the undoubtable source.
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.expansionPanel}>
          <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="h6">
              Question
              </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body2">
              Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure
              Latin words, consectetur, from a Lorem Ipsum passage,
              and going through the cites of the word in classical
              literature, discovered the undoubtable source.
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.expansionPanel}>
          <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="h6">
              Question
              </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body2">
              Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure
              Latin words, consectetur, from a Lorem Ipsum passage,
              and going through the cites of the word in classical
              literature, discovered the undoubtable source.
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.expansionPanel}>
          <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="h6">
              Question
              </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant="body2">
              Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure
              Latin words, consectetur, from a Lorem Ipsum passage,
              and going through the cites of the word in classical
              literature, discovered the undoubtable source.
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </a>
  );
}
