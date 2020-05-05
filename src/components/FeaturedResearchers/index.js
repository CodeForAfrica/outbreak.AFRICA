import React from "react";
import PropTypes from "prop-types";

import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ProfileList, RichTypography, Section } from "@commons-ui/core";

import "simplebar/dist/simplebar.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "visible",
  },
  section: {},
  description: {
    "& .highlight": {
      background:
        "linear-gradient(180deg, rgba(255,255,255,0) 50%, #ccdcff 30% )",
    },
  },
  profileList: {
    color: "white",
    marginTop: "2.375rem",
    "& .simplebar-track": {
      backgroundColor: "#D6D6D6",
      width: "30%",
      [theme.breakpoints.up("lg")]: {
        width: "20%",
      },
    },
    "& .simplebar-track.simplebar-horizontal": {
      marginLeft: "35%",
    },
    "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
      backgroundColor: "#9D9C9C",
    },
    "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar:before": {
      backgroundColor: "#9D9C9C",
    },
  },
  profileListProfile: {
    "&:after": {
      mixBlendMode: "overlay",
    },
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
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isUpXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = isUpLg && !isUpXl;
  let cellHeight;
  if (isUpLg) {
    cellHeight = isLg ? 438 : 637;
  }

  return (
    <div className={classes.root}>
      <Section
        title={title || "Featured Researchers"}
        classes={{ root: classes.section }}
      >
        <Grid
          container
          className={classes.heading}
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={12}>
            <RichTypography variant="subtitle1" className={classes.description}>
              {description ||
                'Connect with <span class="highlight">African scientists</span> and other experts who are at the forefront of efforts to understand coronavirus on the continent.'}
            </RichTypography>
          </Grid>
          <Grid item xs={12}>
            <ProfileList
              cellHeight={cellHeight}
              height={cellHeight && cellHeight + 48}
              profiles={profiles}
              classes={{
                root: classes.profileList,
                profile: classes.profileListProfile,
                profiles: classes.profileListProfiles,
              }}
            />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

FeatureResearchers.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FeatureResearchers;
