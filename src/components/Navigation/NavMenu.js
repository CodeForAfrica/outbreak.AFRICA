import React from 'react';

import { Grid, Typography } from '@material-ui/core'
import Search from './Search';

import { makeStyles } from '@material-ui/core/styles';
import DropDownMenu from './DropdownMenu';
import ThreeColumnContent from './DropDownContent/ThreeColumn';
import Insight from '@hurumap-ui/core/InsightContainer/Insight';

const useStyles = makeStyles({
  root: {
    margin: '0rem 6rem'
  }
});

{/*const menuList = [
  {
    title: Data,
    menulist: [
      {
        name: 'one',
        link: '#'
      },
      {
        name: 'two',
        link: '#'
      },
      {
        name: 'three',
        link: '#'
      }
    ]
  },
  {
    title: Insight,
    menuList: [
      {
        name: "One",
        link: '#'
      },
      {
        name: 'two',
        link: '#'
      },
      {
        name: 'three',
        link: '# '
      }
    ]
  },
  {
    title: Research,
    menuList: [
      {
        name: "One",
        link: '#'
      },
      {
        name: 'two',
        link: '#'
      },
      {
        name: 'three',
        link: '# '
      }
    ]
  },
]

const lang = [
  {
    name: 'EN'
  },
  {
    name: 'FR'
  },
  {
    name: `&#x0633`
  }
]*/}

function NavMenu() {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="space-between" alignItem="center" className={classes.root}>
      <DropDownMenu title="DATA" />
      <DropDownMenu title="INSIGHT" />
      <DropDownMenu title="RESEARCH" />

      <Search style={{ fontSize: 10 }} />

      <div><Typography variant="caption">EN</Typography></div>
      <div><Typography variant="caption">FR</Typography></div>
      <div><Typography variant="caption">&#x0633;</Typography></div>

    </Grid>
  )
}

export default NavMenu;
