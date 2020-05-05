import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ContentLoader from "@hurumap-ui/core/ContentLoader";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "3rem",
    width: "100%",
  },
  title: {
    margin: "1.5rem 3rem 1.5rem 0",
  },
  grow: {
    flexGrow: 1,
    height: 2,
    backgroundColor: theme.palette.secondary.main,
  },
}));

function ProfileSectionTitle({ loading, tab: { name }, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid item xs={12} container alignItems="center" className={classes.root}>
      {loading ? (
        <ContentLoader primaryOpacity={1} secondaryOpacity={0.5} height={48}>
          <rect x="0" y="0" height={48} width="100%" />
        </ContentLoader>
      ) : (
        <>
          <Typography variant="h3" className={classes.title}>
            {name}
          </Typography>
          <div className={classes.grow} />
        </>
      )}
    </Grid>
  );
}

ProfileSectionTitle.propTypes = {
  tab: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  loading: PropTypes.bool,
};

ProfileSectionTitle.defaultProps = {
  loading: false,
};

export default ProfileSectionTitle;
