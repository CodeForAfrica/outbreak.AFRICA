import React from 'react';
import { PropTypes } from 'prop-types';

import classnames from 'classnames';

import { ButtonBase, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import downArrow from '../../assets/images/down-arrow.svg';
import downArrowGreen from '../../assets/images/down-arrow-green.svg';
import upArrow from '../../assets/images/up-arrow.svg';

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
    backgroundColor: 'white',
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
  icon,
  iconActive,
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
    >
      <span
        className={classnames({ [classes.bubble]: isHighlighted || isActive })}
      >
        <Grid
          container
          component="span"
          justify="space-around"
          alignItems="center"
          spacing={1}
        >
          <Grid item component="span">
            <img
              alt=""
              src={isHighlighted || isActive ? iconActive : icon}
              height={22}
            />
          </Grid>
          <Grid item component="span" className={classes.item}>
            <Typography
              variant="body1"
              color={
                isActive || isHighlighted ? 'textPrimary' : 'textSecondary'
              }
              style={{ fontSize: '1.125rem' }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item component="span" className={classes.item}>
            <img
              className={classes.img}
              alt=""
              src={
                // eslint-disable-next-line no-nested-ternary
                isActive ? upArrow : isHighlighted ? downArrowGreen : downArrow
              }
            />
          </Grid>
        </Grid>
      </span>
      <span className={classnames({ [classes.bubbleArrow]: isActive })} />
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
