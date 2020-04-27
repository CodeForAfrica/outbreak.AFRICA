import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ProfileList } from "@commons-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
  profiles: {},
}));

function FeatureResearchers({ description, profiles, title, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid className={classes.root}>
      <Grid
        item
        xs={12}
        container
        className={classes.heading}
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.title}>
            {title || "Featured Researchers"}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.description}>
            {description ||
              "Connect with African scientists and other experts who are at the forefront of efforts to understand coronavirus on the continent."}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ProfileList
          profiles={profiles}
          classes={{ root: classes.root, profiles: classes.profiles }}
        />
      </Grid>
    </Grid>
  );
}

FeatureResearchers.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FeatureResearchers;
