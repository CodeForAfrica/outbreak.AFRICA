import React from "react";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { RichTypography } from "@commons-ui/core";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    padding: "2rem 0rem",
    // When scrolled, leave the height of AppBar from the top
    scrollMargin: typography.pxToRem(50),
    [breakpoints.up("md")]: {
      scrollMargin: typography.pxToRem(100),
    },
    [breakpoints.up("xl")]: {
      scrollMargin: typography.pxToRem(140),
    },
  },
  expansionPanel: {
    backgroundColor: "#C1D5FF",
    boxShadow: "none",
    "& .MuiExpansionPanel-root.Mui-expanded": {
      margin: 0,
    },
  },
  expansionPanelSummary: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  title: {
    color: "#170F49",
    fontWeight: 600,
  },
  subtitle: {
    fontWeight: 600,
  },
  divider: {
    border: "0.8px solid #170F49",
  },
  dividerGrid: {
    marginLeft: "1rem",
  },
  expanded: {},
}));

export default function FaqContent({ questionsAnswers, slug, ...props }) {
  const [expanded, setExpanded] = React.useState("");
  const classes = useStyles(props);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    event.stopPropagation();
  };

  return (
    <>
      {questionsAnswers &&
        questionsAnswers.map(({ question, answer }, index) => (
          <ExpansionPanel
            square
            expanded={expanded === `${slug}-panel${index}`}
            onChange={handleChange(`${slug}-panel${index}`)}
            className={classes.expansionPanel}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${slug}-panel${index}-d-content`}
              id={`${slug}-panel${index}d-header`}
            >
              <Typography variant="h6" className={classes.subtitle}>
                {question}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RichTypography variant="body2">
                {answer}
              </RichTypography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
    </>
  );
}
