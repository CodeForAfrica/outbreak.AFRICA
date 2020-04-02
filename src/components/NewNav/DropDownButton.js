import React from 'react';
import { PropTypes } from 'prop-types';

import classnames from 'classnames';

import { ButtonBase, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'unset',
    color: theme.palette.text.primary,
    outline: 'none !important',
    margin: '1.25rem 1.75rem',
    [theme.breakpoints.up('md')]: {
      margin: '0.625rem'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '1.563rem'
    }
  },
  rootCenter: {
    borderRadius: '1.125rem',
    justifyContent: 'center'
  },
  img: {
    height: 'fit-content'
  },
  bubble: {
    margin: '-5px -20px',
    padding: '5px 20px',
    borderRadius: '1.5rem'
  },
  bubbleArrow: {
    position: 'absolute',
    bottom: '-1.438rem',
    borderStyle: 'solid',
    borderWidth: '1.438rem 1.438rem 0',
    borderColor: '#FFFFFF transparent',
    display: 'block',
    width: 0,
    zIndex: 1
  }
}));

function DropDownButton({
  title,
  handleClick,
  isHighlighted,
  isActive
}) {
  const classes = useStyles();
  return (
    <ButtonBase
      disableRipple
      disableTouchRipple
      className={classnames(classes.root, {
        [classes.rootCenter]: isHighlighted || isActive
      })}
      onClick={handleClick}
    //onMouseOver={handleClick}
    >
      <Typography variant="body1" style={{ fontSize: '1.125rem' }}>
        {title}
      </Typography>
    </ButtonBase>
  );
}

DropDownButton.propTypes = {
  icon: PropTypes.string.isRequired,
  iconActive: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default DropDownButton;
