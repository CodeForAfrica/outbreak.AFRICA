import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import A from '@commons-ui/core/A';

import gates from 'assets/images/gates.png';
import gates2 from 'assets/images/gates@2x.png';
import gates3 from 'assets/images/gates@3x.png';

import Title from './Title';

const useStyles = makeStyles({
  root: {
    marginTop: '3.125rem',
    width: '14.375rem'
  },
  img: {
    marginTop: '2.5625rem'
  }
});

function Support() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title>With support from</Title>
      <A href="//www.gatesfoundation.org">
        <img
          src={gates}
          srcSet={`${gates2} 2x, ${gates3} 3x`}
          alt="Bill & Melinda Gates"
          className={classes.img}
        />
      </A>
    </div>
  );
}

Support.propTypes = {};

export default Support;
