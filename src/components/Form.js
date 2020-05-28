import React from 'react';
import {
  Button,
  Typography,
  IconButton,
  FilledInput,
  InputLabel,
  FormControl,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from 'components/Link';

import iconBox from 'assets/icon-infobox.svg'

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    width: "100%"
  },
  expansionPanel: {
    backgroundColor: '#C1D5FF',
    padding: '1.5rem'
  },
  title: {
    fontWeight: 700
  },
  formGrid: {
    padding: '3rem 0rem',
  },
  inputGrid: {
    padding: '1rem 0rem'
  },
  inputLabel: {
    color: 'black',
    padding: '1.5rem 0rem'
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
  focussed: {},
  button: {
    color: '#170F49',
    borderBottomColor: '#170F49'
  }
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
    <div className={classes.root}>
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
            variant="h5"
            className={classes.title}>

            <IconButton aria-label="delete">
              <img src={iconBox} alt="icon box" />
            </IconButton>
            Application Form
            </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails fullWidth>
          <div>
            <div item>
              <Typography variant="subtitle1">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old.
              </Typography>
            </div>

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
                    style={{ height: '180px' }}
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

              <Link href="#">
                <Button
                  variant="outlined"
                  size="large"
                  className={classes.button}
                >
                  Submit
                  </Button>
              </Link>
            </form>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div >
  )
}

export default Form
