import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import classNames from "classnames";

import {
  Slide,
  Grid,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  Link,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";

import IconButtonLink from "components/Link/IconButton";
import Logo from "components/Navigation/Logo";

import NavigationList from "./NavigationList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1.125rem 1.234375rem 0 1.6875rem",
  },
  button: {
    color: theme.palette.text.secondary,
  },
  grow: {
    flexGrow: 1,
  },
  titleGrid: {
    width: "50%",
  },
  listRoot: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  dialog: {
    marginLeft: `${(22 / 360) * 100}%`,
  },
  dialogActions: {
    padding: "8px 24px",
  },
  dialogPaper: {
    backgroundColor: theme.palette.secondary.main,
  },
  languageButton: {
    fontWeight: 700,
    lineHeight: 1.875,
    minWidth: "1.5rem",
    opacity: 0.5,
    "&.active": {
      opacity: 1.0,
    },
  },
  toolbar: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    color: "white",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function MobileMenu({ countries }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        <IconButtonLink
          aria-label="Open drawer"
          color="secondary"
          edge="start"
          href="/#"
          onClick={handleClickOpen}
        >
          <MenuIcon fontSize="large" />
        </IconButtonLink>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          classes={{ root: classes.dialog, paper: classes.dialogPaper }}
        >
          <DialogActions className={classes.dialogActions}>
            <IconButton
              aria-label="search"
              edge="start"
              href="/search"
              className={classes.button}
            >
              <SearchIcon fontSize="large" />
            </IconButton>
            <Grid container justify="flex-end" alignItems="center" spacing={1}>
              <Grid item>
                <Link
                  href="/#"
                  variant="overline"
                  underline="none"
                  className={classNames(
                    classes.button,
                    classes.languageButton,
                    "active"
                  )}
                >
                  En
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/#"
                  variant="overline"
                  underline="none"
                  className={classNames(classes.button, classes.languageButton)}
                >
                  Fr
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/#"
                  variant="overline"
                  underline="none"
                  className={classNames(classes.button, classes.languageButton)}
                >
                  عربى
                </Link>
              </Grid>
            </Grid>
            <IconButton
              aria-label="close drawer"
              edge="start"
              onClick={handleClose}
              className={classes.button}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </DialogActions>

          <DialogContent className={classes.dialogContent}>
            <NavigationList
              title="DATA"
              items={countries}
              toAs={({ isoCode }) => `/country-${isoCode}`}
              toHref={() => "/[geoIdOrSlug]"}
              toName={({ shortName }) => shortName}
            />
            <NavigationList
              title="Research"
              items={
                [
                  { name: "Experts", href: "/research/experts" },
                  { name: "Documents", href: "/research/documents" },
                  { name: "Datasets", href: "/research/datasets" },
                ]
              }
              toAs={() => undefined}
              toHref={({ href }) => href}
              toName={({ name }) => name}
            />
            <NavigationList
              title="INSIGHTS"
              items={
                [
                  { name: "Analysis", href: "/insights/analysis" },
                  { name: "Mythbusters", href: "/insights/myth-busting" },
                  { name: "Stories", href: "/insights/stories" },
                  { name: "Resources", href: "/insights/resources" },
                ]
              }
              toAs={() => undefined}
              toHref={(href) => href}
              toName={({ name }) => name}
            />
          </DialogContent>
        </Dialog>
      </Grid>
    </Grid>
  );
}

MobileMenu.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default MobileMenu;
