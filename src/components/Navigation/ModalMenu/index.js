import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';


import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import MenuIcon from '@material-ui/icons/Menu';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#2C2559',
    boxShadow: 'none'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  dialogContent: {
    paddingTop: '3rem',
    color: 'white',
    backgroundColor: '#2C2559',
  },
  toolbar: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}));


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
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
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} className={classes.dialog}>
        <DialogTitle>
          <AppBar postion='static' className={classes.appBar}>
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
        </DialogTitle>

        <DialogContent className={classes.dialogContent}>

          <Grid container direction="row" justify="space-between" style={{ padding: '1rem  5rem' }}>
            <Grid item>
              <Typography>Data</Typography>
            </Grid>
            <Grid item style={{ display: 'flex', flexDirection: 'row' }}>
              <Divider orientation="vertical" flexItem style={{ border: "0.5px solid grey" }} />
              <List component="nav">
                <ListItem button>
                  <ListItemText primary="Kenya" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="South Africa" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Nigeria" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Morocco" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Ghana" />
                </ListItem>
              </List>
            </Grid>
          </Grid>


          <Grid container direction="row" justify="space-between" style={{ padding: '1rem  5rem' }}>
            <Grid item>
              <Typography>Data</Typography>
            </Grid>
            <Grid item style={{ display: 'flex', flexDirection: 'row' }}>
              <Divider orientation="vertical" flexItem style={{ border: "0.5px solid grey" }} />
              <List component="nav">
                <ListItem button>
                  <ListItemText primary="Kenya" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="South Africa" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Nigeria" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Morocco" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Ghana" />
                </ListItem>
              </List>
            </Grid>
          </Grid>


          <Grid container direction="row" justify="space-between" style={{ padding: '1rem  5rem' }}>
            <Grid item>
              <Typography>Data</Typography>
            </Grid>
            <Grid item style={{ display: 'flex', flexDirection: 'row' }}>
              <Divider orientation="vertical" flexItem style={{ border: "0.5px solid grey" }} />
              <List component="nav">
                <ListItem button>
                  <ListItemText primary="Kenya" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="South Africa" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Nigeria" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Morocco" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Ghana" />
                </ListItem>
              </List>
            </Grid>
          </Grid>

        </DialogContent>
      </Dialog>
    </div>
  );
}
