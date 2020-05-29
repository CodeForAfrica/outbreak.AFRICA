import React from 'react';
import { Section } from "@commons-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RichTypography } from "@commons-ui/core";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    flexGrow: 1,
    padding: '1.5rem 0rem'
  },
  section: {},
  contentGrid: {
    padding: "1rem 0rem",
    marginLeft: '5rem'
  }
}));


function Content({ title, subtitle, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <RichTypography variant="h2">{title}</RichTypography>
        <RichTypography variant="body1">
          {subtitle}
        </RichTypography>
      </Section>
    </div>
  )
}

export default Content
