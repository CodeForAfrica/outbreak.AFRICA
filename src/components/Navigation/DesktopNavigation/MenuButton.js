import { RichTypography } from "@commons-ui/core";
import { Button, IconButton, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";

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

function MenuButton({
  children,
  open: openProp,
  size,
  title,
  popperProps,
  ...props
}) {
  const classes = useStyles(props);
  const buttonRef = useRef();
  const [open, setOpen] = useState(openProp);
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
      popperProps={popperProps}
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
  children: PropTypes.node,
  open: PropTypes.bool,
  popperProps: PropTypes.shape({}),
  size: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

MenuButton.defaultProps = {
  children: undefined,
  open: undefined,
  popperProps: undefined,
  size: undefined,
  subtitle: undefined,
  title: undefined,
};
export default MenuButton;
