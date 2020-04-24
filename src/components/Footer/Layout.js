/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

// import clsx from 'clsx';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const Layout = React.forwardRef(function Layout(
  { children, classes: classesProp, className, ...props },
  ref
) {
  const classes = useStyles({ classes: classesProp });
  return (
    <div className={classNames(classes.root, className)} {...props} ref={ref}>
      {children}
    </div>
  );
});

Layout.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.shape({}),
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
