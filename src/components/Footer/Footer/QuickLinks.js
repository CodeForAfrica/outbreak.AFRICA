import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '0.5rem',
    },
  },
  text: {
    color: '#000',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    paddingTop: '1rem',
    '& > li': {
      marginTop: '2.3125rem',
    },
    [theme.breakpoints.up('md')]: {
      '& > li': {
        marginTop: '1.5rem',
      },
    },
  },
  link: {
    ...theme.typography.caption,
    textDecoration: 'none',
  },
  title: {
    lineHeight: 'inherit',
  },
}));

function QuickLinks({ linkComponent, title, links, ...props }) {
  const classes = useStyles(props);
  const LinkComponent = linkComponent || Link;

  return (
    <div className={classes.root}>
      <Typography variant="button" className={classes.title}>
        {title}
      </Typography>
      <Typography
        variant="caption"
        className={classNames([classes.text, classes.list])}
        component="ul"
      >
        {links.map(({ onClick, href, label, ...others }) => (
          <li key={label}>
            {onClick ? (
              <Link
                href={href}
                variant="caption"
                underline="none"
                className={classNames([classes.text, classes.link])}
                onClick={(e) => onClick(e)}
              >
                {label}
              </Link>
            ) : (
              <LinkComponent
                {...others}
                href={href}
                variant="caption"
                underline="none"
                className={classNames([classes.text, classes.link])}
              >
                {label}
              </LinkComponent>
            )}
          </li>
        ))}
      </Typography>
    </div>
  );
}

QuickLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  linkComponent: PropTypes.elementType,
  title: PropTypes.string.isRequired,
};
QuickLinks.defaultProps = {
  linkComponent: undefined,
};

export default QuickLinks;
