/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Layout from './Layout';
import RichTypography from './RichTypography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
  },
  title: {
    margin: '1.375rem 0',
    [theme.breakpoints.up('md')]: {
      width: '51.125rem',
    },
  },
}));

const Section = React.forwardRef(function Section(
  { children, title, titleProps, ...props },
  ref
) {
  const classes = useStyles(props);

  return (
    <Layout classes={{ root: classes.root }} {...props} ref={ref}>
      <RichTypography variant="h2" {...titleProps} className={classes.title}>
        {title}
      </RichTypography>
      {children}
    </Layout>
  );
});

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
  titleProps: PropTypes.shape({}),
};

Section.defaultProps = {
  title: undefined,
  titleProps: undefined,
};

export default Section;
