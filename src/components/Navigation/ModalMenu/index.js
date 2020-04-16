import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  toolbar: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function ModalMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton edge="start" color="primary" aria-label="menu" onClick={handleClickOpen}>
        <MenuIcon />
      </IconButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar postion='static' style={{ backgroundColor: 'blue' }}>
          <Toolbar className={classes.toolbar}>
            <SearchIcon />

            <Grid container direction="row" justify="flex-end" spacing={4}>
              <Grid item>
                <Typography variant="caption">EN</Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption">FR</Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption">&#x0633;</Typography>
              </Grid>

              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>


        this is an example

      </Dialog>
    </div>
  );
}
