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
  expansionPanel: {
    backgroundColor: "#C1D5FF",
    boxShadow: "none",
    marginBottom: "0.125rem",
  },
  panelExpanded: {
    marginBottom: "0.125rem !important",
  },
  panelSummary: {
    paddingTop: "0.9375rem",
    paddingLeft: "1.625rem",
    paddingBottom: "1rem",
    [breakpoints.up("xl")]: {
      paddingTop: "1.8125rem",
      paddingLeft: "2.25rem",
      paddingBottom: "2.375rem",
    },
  },
  panelContent: {
    margin: 0,
  },
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
            classes={{ expanded: classes.panelExpanded }}
            className={classes.expansionPanel}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${slug}-panel${index}-d-content`}
              id={`${slug}-panel${index}d-header`}
              classes={{ root: classes.panelSummary, content: classes.panelContent }}
            >
              <Typography variant="subtitle2">
                {question}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <RichTypography variant="caption">
                {answer}
              </RichTypography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
    </>
  );
}
