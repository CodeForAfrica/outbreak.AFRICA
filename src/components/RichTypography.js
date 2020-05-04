/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PropTypes } from 'prop-types';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& a': {
      color: theme.palette.primary.main,
    },
    '& .highlight': {
        display: "inline-block",
        background: "linear-gradient(180deg,rgba(255,255,255,0) 50%, #F9FF71 30% )",
    },
  }
}));

function RichTypography({ children, variant, ...props }) {
  const classes = useStyles(props);

  if (!children) {
    return null;
  }

  return (
    <Typography
      variant={variant}
      component="div"
      className={classes.root}
      dangerouslySetInnerHTML={{
        __html: children
      }}
      {...props}
    />
  );
}

RichTypography.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string
};

RichTypography.defaultProps = {
  children: null,
  variant: 'body1'
};

export default RichTypography;