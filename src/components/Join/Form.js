import React from 'react';
import { Grid, TextField, Typography } from "@material-ui/core";
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  expansionPanel: {
    backgroundColor: '#C1D5FF'
  }
}));

function Form() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');;
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Grid container style={{ width: '812px' }}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.expansionPanel}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="body1">Application Form</Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="subtitle1">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old.
              </Typography>
            </Grid>
            <Grid item style={{ padding: '3rem 0rem' }}>
              <div>
                <InputLabel varian="standard" style={{ color: 'black' }}>Field descriptor</InputLabel>
                <TextField
                  id="standard-full-width"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
              </div>
              <div>
                <InputLabel varian="standard" style={{ color: 'black' }}>Field descriptor</InputLabel>
                <TextField
                  id="standard-full-width"
                  style={{ margin: 8 }}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
              </div>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  )
}

export default Form
