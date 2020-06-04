import React from "react";
import PropTypes from "prop-types";

import {
  Divider,
  Grid,
  List,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Link from "components/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1.25rem",
  },
  divider: {
    backgroundColor: theme.palette.text.secondary,
    opacity: 0.5,
    width: 1,
  },
  items: {
    width: "49%",
  },
  list: {
    paddingLeft: "0.625rem",
  },
  listItemLink: {},
  listItemText: {
    position: "relative", // https://stackoverflow.com/questions/4089379/align-block-elements-on-top-when-using-line-height
    top: "-1rem",
    color: theme.palette.text.secondary,
    fontWeight: 700,
    lineHeight: 2.5,
    marginTop: 0,
  },
  main: {
    position: "relative", // https://stackoverflow.com/questions/4089379/align-block-elements-on-top-when-using-line-height
    top: "-1rem",
    color: theme.palette.text.secondary,
    lineHeight: 2.375,
    opacity: 0.3,
  },
  title: {
    width: "49%",
  },
}));

function ListItemLink(props) {
  const classes = useStyles();
  return (
    <Link {...props} variant="subtitle1" className={classes.listItemLink} />
  );
}

function NavigationList({ items, title, toAs, toHref, toName, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      className={classes.root}
    >
      <Grid item className={classes.title}>
        <Typography variant="h4" className={classes.main}>
          {title}
        </Typography>
      </Grid>
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <Grid item className={classes.items}>
        <List component="nav" className={classes.list}>
          {items.map((item) => (
            <ListItemLink
              key={toName(item)}
              underline="none"
              href={toHref(item)}
              as={toAs(item)}
            >
              <ListItemText disableTypography className={classes.listItemText}>
                {toName(item)}
              </ListItemText>
            </ListItemLink>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

NavigationList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  title: PropTypes.string.isRequired,
  toHref: PropTypes.func.isRequired,
  toAs: PropTypes.func.isRequired,
  toName: PropTypes.func.isRequired,
};

export default NavigationList;
