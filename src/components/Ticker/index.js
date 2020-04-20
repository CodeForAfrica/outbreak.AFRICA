import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { Grid, useMediaQuery, useTheme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { A } from '@commons-ui/core';

import Status from './Status';

const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid #D6D6D6',
    boxShadow: '0px 4px 4px #00000029',
    padding: '1.125rem',
    [theme.breakpoints.up('md')]: {
      padding: '2.25rem 2.625rem 1.95375rem'
    }
  },
  source: {
    ...theme.typography.caption,
    color: '#9D9C9C'
  },
  status: {},
  statusBorderRight: {
    borderRight: '1px solid #D6D6D6'
  },
  statusBorderTop: {
    borderTop: '1px solid #D6D6D6'
  },
  statusHighlight: {
    color: theme.palette.secondary.main
  },
  statuses: {
    marginTop: '1.125rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '2.625rem'
    }
  },
  title: {
    fontWeight: 'bold'
  }
}));

function Ticker({ lang, source, statuses, title, ...props }) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={classes.root}>
      <Typography variant="body2" component="h2" className={classes.title}>
        {title}
      </Typography>
      <Grid container className={classes.statuses}>
        {statuses.map((status, index) => (
          <Grid key={status.name} item xs={6} md={3}>
            <Status
              {...status}
              lang={lang}
              classes={{
                root: classNames(
                  classes.status,
                  {
                    [classes.statusBorderRight]: isMobile
                      ? index % 2 === 0
                      : index < statuses.length - 1
                  },
                  { [classes.statusBorderTop]: isMobile && index > 1 },
                  { [classes.statusHighlight]: status.highlight }
                )
              }}
            />
          </Grid>
        ))}
      </Grid>
      <A
        href={source.url}
        variant="caption"
        underline="never"
        className={classes.source}
      >
        {source.title || source.url}
      </A>
    </div>
  );
}

Ticker.propTypes = {
  lang: PropTypes.string,
  statuses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  source: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired
};

Ticker.defaultProps = {
  lang: undefined
};

export default Ticker;