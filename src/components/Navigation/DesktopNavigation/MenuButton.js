import React from "react";
import PropTypes from "prop-types";

import { Button, IconButton, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ExpandLess, ExpandMore } from "@material-ui/icons";

import { RichTypography } from "@commons-ui/core";

import NavigationButton from "./NavigationButton";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {},
  paper: {},
  popper: {
    marginTop: "0.5rem",
    width: "auto",
    [breakpoints.up("xl")]: {
      marginTop: "0.5rem",
    },
  },
  subtitle: {
    marginBottom: "0.5rem",
  },
  title: {},
}));

function MenuButton({ children, open: openProp, size, title, ...props }) {
  const classes = useStyles(props);
  const buttonRef = React.useRef();
  const [open, setOpen] = React.useState(openProp);
  const handleToggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (e) => {
    if (buttonRef.current && buttonRef.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };
  const Icon = open ? ExpandLess : ExpandMore;
  const button = title ? (
    <Button
      onClick={handleToggleOpen}
      endIcon={<Icon fontSize={size} />}
      size={size}
      {...props}
      variant={open ? "outlined" : undefined}
      ref={buttonRef}
    >
      {title}
    </Button>
  ) : (
    <IconButton onClick={handleToggleOpen} {...props} ref={buttonRef}>
      <Icon fontSize={size} />
    </IconButton>
  );

  return (
    <NavigationButton
      anchorEl={buttonRef.current}
      button={button}
      onClose={handleClose}
      open={open}
      title={title}
      {...props}
      classes={{
        root: classes.root,
        paper: classes.paper,
        popper: classes.popper,
        title: classes.title,
      }}
    >
      <RichTypography variant="subtitle2" className={classes.subtitle}>
        Select country
      </RichTypography>
      <Paper>{children}</Paper>
    </NavigationButton>
  );
}

MenuButton.propTypes = {
  popperProps: PropTypes.shape({}),
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

MenuButton.defaultProps = {
  subtitle: undefined,
  title: undefined,
  popperProps: undefined,
};
export default MenuButton;
