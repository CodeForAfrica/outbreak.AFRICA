import {
  Slide,
  Grid,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import NavigationList from "./NavigationList";

import IconButtonLink from "@/outbreakafrica/components/Link/IconButton";
import Logo from "@/outbreakafrica/components/Navigation/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "1.125rem 1.234375rem 0 1.6875rem",
  },
  section: {},
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

function MobileNavigation({ country, countries, navigation, ...props }) {
  const classes = useStyles(props);
  const [open, setOpen] = React.useState(false);
  const [dataNavigation, ...otherNavigations] = navigation || [];
  const handleClickOpen = (e) => {
    if (e) {
      e.preventDefault();
    }
    setOpen(true);
  };
  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
    }
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
                  className={clsx(
                    classes.button,
                    classes.languageButton,
                    "active"
                  )}
                >
                  En
                </Link>
              </Grid>
              {/* TODO(kilemensi): Disable other languages for MVP */}
              {/*
              <Grid item>
                <Link
                  href="/#"
                  variant="overline"
                  underline="none"
                  className={clsx(classes.button, classes.languageButton)}
                >
                  Fr
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/#"
                  variant="overline"
                  underline="none"
                  className={clsx(classes.button, classes.languageButton)}
                >
                  عربى
                </Link>
              </Grid>
              */}
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
            {dataNavigation && (
              <NavigationList
                selected={({ isoCode }) =>
                  country && country.isoCode === isoCode
                }
                title={dataNavigation.title}
                items={countries}
                toAs={({ isoCode }) => `/data/country-${isoCode}`}
                toHref={() => "/data/[geoId]"}
                toName={({ shortName }) => shortName}
              />
            )}
            {otherNavigations &&
              otherNavigations.map((otherNavigation) => (
                <NavigationList
                  key={otherNavigation.title}
                  title={otherNavigation.title}
                  items={otherNavigation.subnav}
                  toAs={() => undefined}
                  toHref={({ url }) => url}
                  toName={({ title }) => title}
                />
              ))}
          </DialogContent>
        </Dialog>
      </Grid>
    </Grid>
  );
}

MobileNavigation.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  country: PropTypes.shape({
    isoCode: PropTypes.string,
  }),
  navigation: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

MobileNavigation.defaultProps = {
  country: undefined,
};
export default MobileNavigation;
