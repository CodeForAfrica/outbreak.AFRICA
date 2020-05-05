import React from "react";
import PropTypes from "prop-types";

import {
  Box,
  Button,
  ClickAwayListener,
  Collapse,
  IconButton,
  Paper,
  Popper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ExpandLess, ExpandMore } from "@material-ui/icons";

import { RichTypography } from "@commons-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  popper: {
    marginTop: "0.5rem",
    zIndex: 9999,
  },
  subtitle: {
    marginBottom: theme.spacing(1),
  },
  title: {
    fontWeight: 700,
  },
}));

function MenuButton({
  children,
  open: openProp,
  popperProps,
  size,
  title,
  ...props
}) {
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
      ref={buttonRef}
    >
      {title}
    </Button>
  ) : (
    <IconButton onClick={handleToggleOpen} {...props} ref={buttonRef}>
      <Icon />
    </IconButton>
  );

  return (
    <>
      {button}
      <Popper
        open={open}
        anchorEl={buttonRef.current}
        role={undefined}
        transition
        disablePortal
        {...popperProps}
        className={classes.popper}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Collapse {...TransitionProps}>
              {/* We need component that can forwardRef here */}
              <Box>
                <RichTypography
                  variant="subtitle2"
                  className={classes.subtitle}
                >
                  Select country
                </RichTypography>
                <Paper>{children}</Paper>
              </Box>
            </Collapse>
          </ClickAwayListener>
        )}
      </Popper>
    </>
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
