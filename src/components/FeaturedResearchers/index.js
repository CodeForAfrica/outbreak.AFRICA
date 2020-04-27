import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ProfileList, RichTypography, Section } from "@commons-ui/core";

import "simplebar/dist/simplebar.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "visible",
  },
  section: {},
  profileListProfile: {
    "&.profile-0:after": {
      backgroundColor: theme.palette.primary.main,
    },
    "&.profile-1:after": {
      backgroundColor: `#000000`,
    },
    "&.profile-2:after": {
      backgroundColor: theme.palette.highlight.main,
    },
  },
  profileListProfiles: {},
}));

function FeatureResearchers({ description, profiles, title, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid
          container
          className={classes.heading}
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={12}>
            <RichTypography variant="h2" className={classes.title}>
              {title || "Featured Researchers"}
            </RichTypography>
          </Grid>
          <Grid item>
            <RichTypography variant="subtitle1" className={classes.description}>
              {description ||
                "Connect with African scientists and other experts who are at the forefront of efforts to understand coronavirus on the continent."}
            </RichTypography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ProfileList
            profiles={profiles}
            classes={{
              root: classes.profileList,
              profile: classes.profileListProfile,
              profiles: classes.profileListProfiles,
            }}
          />
        </Grid>
      </Section>
    </div>
  );
}

FeatureResearchers.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FeatureResearchers;
