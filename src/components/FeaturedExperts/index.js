import React from "react";
import PropTypes from "prop-types";

import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ProfileList, RichTypography, Section } from "@commons-ui/core";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    overflow: "visible",
  },
  section: {},
  sectionTitle: {
    margin: "unset",
    marginBottom: typography.pxToRem(16),
  },
  description: {
    "& .highlight": {
      background:
        "linear-gradient(180deg, rgba(255,255,255,0) 50%, #ccdcff 30% )",
    },
  },
  profileContentsRoot: {
    justifyContent: "center",
    "&:after": {
      bottom: 0,
      content: '""',
      left: 0,
      mixBlendMode: "multiply",
      opacity: 0.3,
      position: "absolute",
      right: 0,
      top: 0,
    },
    "&.profile-contents-root-0": {
      "&:after": {
        backgroundColor: `${palette.primary.main}`,
      },
    },
    "&.profile-contents-root-1": {
      "&:after": {
        backgroundColor: `${palette.secondary.main}`,
      },
    },
    "&.profile-contents-root-2": {
      "&:after": {
        backgroundColor: `${palette.highlight.main}`,
      },
    },
  },
  profileContents: {
      color: palette.text.secondary,
      padding: typography.pxToRem(16),
      "&:before": {
        background:"unset",
      },
  },
  profileList: {
    marginTop: "2.375rem",
    "& .simplebar-track": {
      backgroundColor: "#D6D6D6",
      width: "30%",
      [breakpoints.up("lg")]: {
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
  profileListProfile: {},
  profileListProfiles: {},
}));

function FeaturedExperts({
  brief: description,
  experts,
  icons: availableIcons,
  title,
  ...props
}) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isUpXl = useMediaQuery(theme.breakpoints.up("xl"));
  let icons;
  if (availableIcons) {
    icons = isDesktop ? availableIcons.desktop : availableIcons.mobile;
  }
  const isLg = isUpLg && !isUpXl;
  let cellHeight;
  if (isUpLg) {
    cellHeight = isLg ? 438 : 637;
  }

  if (!experts || experts.length < 1) {
    return null;
  }

  const profiles =
    experts &&
    experts.map((profile, index) => {
      return {
        id: index,
        image: {
          url: profile.image,
        },
        name: profile.name,
        title: profile.affiliation,
        description: profile.biography,
      };
    });
  return (
    <div className={classes.root}>
      <Section
        title={title || "Featured Experts"}
        classes={{ root: classes.section, title: classes.sectionTitle }}
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
              contactIcons={icons}
              height={cellHeight && cellHeight + 48}
              profiles={profiles}
              profileVariant="story"
              classes={{
                root: classes.profileList,
                profile: classes.profileListProfile,
                profileContentsRoot: classes.profileContentsRoot,
                profileContents: classes.profileContents,
                profiles: classes.profileListProfiles,
              }}
            />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

FeaturedExperts.propTypes = {
  brief: PropTypes.string,
  experts: PropTypes.arrayOf(PropTypes.shape({})),
  icons: PropTypes.shape({
    desktop: PropTypes.shape({}),
    mobile: PropTypes.shape({}),
  }),
  title: PropTypes.string,
};

FeaturedExperts.defaultProps = {
  brief: undefined,
  experts: undefined,
  icons: undefined,
  title: undefined,
};
export default FeaturedExperts;
