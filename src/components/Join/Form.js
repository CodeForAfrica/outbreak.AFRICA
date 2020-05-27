import React from 'react';
import {
  Grid,
  Typography,
  FilledInput,
  InputLabel,
  FormControl,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "812px"
  },
  expansionPanel: {
    backgroundColor: '#C1D5FF',
    padding: '1.5rem'
  },
  title: {
    fontWeight: 500
  },
  formGrid: {
    padding: '3rem 0rem',
  },
  inputGrid: {
    padding: '2rem 0rem'
  },
  inputLabel: {
    color: 'black'
  },
  formControl: {
    backgroundColor: '#FFFFFF;',
    border: '1px solid #9D9C9C',
    borderRadius: 10,
    '&:focus': {
      backgroundColor: '#fff'
    }
  },
  filledInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    '&:focus': {
      backgroundColor: '#fff'
    }
  },
  focussed: {}
}));

function Form() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');
  const [name, setName] = React.useState();

  const formHandleChange = (event) => {
    setName(event.target.value);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Grid container classNamw={classes.root}>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className={classes.expansionPanel}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            variant="h6"
            className={classes.title}>
            Application Form
            </Typography>
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
            <form item className={classes.formGrid}>
              <div className={classes.inputGrid}>
                <InputLabel
                  variant="standard"
                  className={classes.inputLabel}
                >
                  Field descriptor
                  </InputLabel>
                <FormControl
                  variant="filled"
                  fullWidth
                  className={classes.formControl}
                >
                  <FilledInput
                    disableUnderline={true}
                    value={name}
                    onChange={formHandleChange}
                    className={classes.filledInput} />
                </FormControl>
              </div>

              <div className={classes.inputGrid}>
                <InputLabel
                  variant="standard"
                  className={classes.inputLabel}
                >
                  Field descriptor
                  </InputLabel>
                <FormControl
                  variant="filled"
                  fullWidth
                  className={classes.formControl}
                >
                  <FilledInput
                    disableUnderline={true}
                    value={name}
                    onChange={formHandleChange}
                    className={classes.filledInput} />
                </FormControl>
              </div>

              <div className={classes.inputGrid}>
                <InputLabel
                  variant="standard"
                  className={classes.inputLabel}
                >
                  Field descriptor
                  </InputLabel>
                <FormControl
                  variant="filled"
                  fullWidth
                  className={classes.formControl}
                >
                  <FilledInput
                    disableUnderline={true}
                    value={name}
                    onChange={formHandleChange}
                    className={classes.filledInput} />
                </FormControl>
              </div>

              <div className={classes.inputGrid}>
                <InputLabel
                  variant="standard"
                  className={classes.inputLabel}
                >
                  Field descriptor
                  </InputLabel>
                <FormControl
                  variant="filled"
                  fullWidth
                  className={classes.formControl}
                >
                  <FilledInput
                    disableUnderline={true}
                    value={name}
                    onChange={formHandleChange}
                    className={classes.filledInput} />
                </FormControl>
              </div>

              <div className={classes.inputGrid}>
                <InputLabel
                  variant="standard"
                  className={classes.inputLabel}
                >
                  Field descriptor
                  </InputLabel>
                <FormControl
                  variant="filled"
                  fullWidth
                  className={classes.formControl}
                >
                  <FilledInput
                    disableUnderline={true}
                    value={name}
                    style={{ height: '500px' }}
                    onChange={formHandleChange}
                    className={classes.filledInput} />
                </FormControl>
              </div>

              <div className={classes.inputGrid}>
                <InputLabel
                  variant="standard"
                  className={classes.inputLabel}
                >
                  Field descriptor
                  </InputLabel>
                <FormControl
                  variant="filled"
                  fullWidth
                  className={classes.formControl}
                >
                  <FilledInput
                    disableUnderline={true}
                    value={name}
                    onChange={formHandleChange}
                    className={classes.filledInput} />
                </FormControl>
              </div>

              <div className={classes.inputGrid}>
                <InputLabel
                  variant="standard"
                  className={classes.inputLabel}
                >
                  Field descriptor
                  </InputLabel>
                <FormControl
                  variant="filled"
                  fullWidth
                  className={classes.formControl}
                >
                  <FilledInput
                    disableUnderline={true}
                    value={name}
                    onChange={formHandleChange}
                    className={classes.filledInput} />
                </FormControl>
              </div>
            </form>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid >
  )
}

export default Form
