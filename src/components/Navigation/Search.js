import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    height: '2rem',
    borderRadius: 'none',
    backgroundColor: fade('#C0C0C0', 0.25),
    '&:hover': {
      backgroundColor: fade('#C0C0C0', 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    fontSize: '0.8rem'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: '0.8rem',
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, // vertical padding + font size from searchIcon
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: '100%',
      width: '15rem'
    }
  }
}));

function Search() {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon size="small" />
      </div>
      <InputBase
        placeholder="Search for issues,topics,etc..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}

export default Search;
