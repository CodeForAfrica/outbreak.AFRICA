import React, { useState } from "react";

import {
  Button,
  Typography,
  IconButton,
  FilledInput,
  InputLabel,
  FormControl,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import iconBox from "assets/icon-infobox.svg";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    width: "100%",
  },
  expansionPanel: {
    backgroundColor: "#C1D5FF",
    padding: "1rem",
    [breakpoints.up("md")]: {
      padding: "1.5rem",
    },
  },
  expansionPanelSummary: {},
  title: {
    fontWeight: 700,
  },
  formGrid: {
    padding: "3rem 0rem",
  },
  icon: {
    "& img": {
      height: 40,
      width: 40,
      [breakpoints.up("xl")]: {
        height: 48,
        width: 48,
      },
    },
  },
  inputGrid: {
    padding: "1rem 0rem",
  },
  inputLabel: {
    paddingBottom: typography.pxToRem(12),
    paddingTop: typography.pxToRem(30),
    [breakpoints.up("md")]: {
      paddingBottom: typography.pxToRem(10),
      paddingTop: typography.pxToRem(50),
    },
  },
  formControl: {
    border: "1px solid #9D9C9C",
    borderRadius: 10,
  },
  filledInput: {
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&.Mui-focused": {
      backgroundColor: "#fff",
    },
  },
  focussed: {},
  button: {
    color: "#170F49",
    borderBottomColor: "#170F49",
  },
}));

function Form(props) {
  const classes = useStyles(props);
  const [expanded, setExpanded] = useState(true);
  const handleChange = (e, newExpanded) => setExpanded(newExpanded);

  return (
    <div className={classes.root}>
      <ExpansionPanel
        elevation={0}
        square
        expanded={expanded}
        onChange={handleChange}
        className={classes.expansionPanel}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.expansionPanelSummary}
        >
          <Typography variant="subtitle2" className={classes.title}>
            <IconButton aria-label="delete" className={classes.icon}>
              <img src={iconBox} alt="icon box" />
            </IconButton>
            Application Form
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails fullWidth>
          <div>
            <div item>
              <Typography variant="caption">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </Typography>
            </div>

            <form item className={classes.formGrid}>
              <div className={classes.inputGrid}>
                <InputLabel
                  color="primary"
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
                    disableUnderline
                    className={classes.filledInput}
                  />
                </FormControl>
              </div>

              <div className={classes.inputGrid}>
                <InputLabel variant="standard" className={classes.inputLabel}>
                  Field descriptor
                </InputLabel>
                <FormControl
                  variant="filled"
                  fullWidth
                  className={classes.formControl}
                >
                  <FilledInput
                    disableUnderline
                    className={classes.filledInput}
                  />
                </FormControl>
              </div>

              <div className={classes.inputGrid}>
                <InputLabel variant="standard" className={classes.inputLabel}>
                  Field descriptor
                </InputLabel>
                <FormControl
                  variant="filled"
                  fullWidth
                  className={classes.formControl}
                >
                  <FilledInput
                    disableUnderline
                    className={classes.filledInput}
                  />
                </FormControl>
              </div>

              <div className={classes.inputGrid}>
                <InputLabel variant="standard" className={classes.inputLabel}>
                  Field descriptor
                </InputLabel>
                <FormControl
                  variant="filled"
                  fullWidth
                  className={classes.formControl}
                >
                  <FilledInput
                    disableUnderline
                    className={classes.filledInput}
                  />
                </FormControl>
              </div>

              <div className={classes.inputGrid}>
                <InputLabel variant="standard" className={classes.inputLabel}>
                  Field descriptor
                </InputLabel>
                <FormControl
                  variant="filled"
                  fullWidth
                  className={classes.formControl}
                >
                  <FilledInput
                    disableUnderline
                    multiline
                    rows={4}
                    className={classes.filledInput}
                  />
                </FormControl>
              </div>

              <div className={classes.inputGrid}>
                <InputLabel variant="standard" className={classes.inputLabel}>
                  Field descriptor
                </InputLabel>
                <FormControl
                  variant="filled"
                  fullWidth
                  className={classes.formControl}
                >
                  <FilledInput
                    disableUnderline
                    className={classes.filledInput}
                  />
                </FormControl>
              </div>

              <div className={classes.inputGrid}>
                <InputLabel variant="standard" className={classes.inputLabel}>
                  Field descriptor
                </InputLabel>
                <FormControl
                  variant="filled"
                  fullWidth
                  className={classes.formControl}
                >
                  <FilledInput
                    disableUnderline
                    className={classes.filledInput}
                  />
                </FormControl>
              </div>

              <Button variant="outlined" className={classes.button}>
                Submit
              </Button>
            </form>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Form;
