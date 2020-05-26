/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import React, { useRef } from "react";
import { PropTypes } from "prop-types";

import classNames from "classnames";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { A, ListItem, RichTypography, Section } from "@commons-ui/core";

import useStyles from "components/Research/ExpertList/useStyles";
import Filter from "components/Research/Filter";

import linkedIn from "assets/Icon awesome-linkedin-in.svg";
import twitter from "assets/Icon awesome-twitter.svg";
import website from "assets/icon web-white.svg";

function ExpertList({
  experts,
  profileClassCount,
  profileClassPrefix,
  title,
  ...props
}) {
  const classes = useStyles(props);
  const rootRef = useRef(null);
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isUpXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = isUpLg && !isUpXl;
  let cellHeight;
  if (isUpLg) {
    cellHeight = isLg ? 438 : 637;
  }

  const profiles =
    experts &&
    experts.map((profile, index) => {
      return {
        id: index,
        name: profile.name,
        title: profile.affiliation,
        description: profile.biography,
        image: {
          url: profile.image,
        },
        itemChildren: <Grid className={classes.profileItemChildren}>
          {profile.linkedin_profile_url && (
            <A
              href={profile.linkedin_profile_url}
              color="textSecondary"
              className={classes.link}
            >
              <img
                src={linkedIn}
                alt="LinkedIn Profile"
                className={classes.icon}
              />
            </A>
          )}
          {profile.twitter_profile_url && (
            <A
              href={profile.twitter_profile_url}
              color="textSecondary"
              className={classes.link}
            >
              <img
                src={twitter}
                alt="Twitter Profile"
                className={classes.icon}
              />
            </A>
          )}
          {profile.website_url && (
            <A
              href={profile.website_url}
              color="textSecondary"
              className={classes.link}
            >
              <img
                src={website}
                alt="Website"
                className={classes.icon}
              />
            </A>
          )}
        </Grid>
      };
    });

  const topics = experts
  .reduce((a, b) => a.concat(b.topic), []);

  const uniqueTopics = topics.reduce((acc, current) => {
    const x = acc.find(item => item.term_id === current.term_id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);  

  return (
    <div className={classes.root} ref={rootRef}>
      <Section classes={{ root: classes.section }}>
        <RichTypography variant="h2">{title}</RichTypography>

        <Filter 
          topics={uniqueTopics} />
        <Grid container direction="row" spacing={2}>
          {profiles.map((profile, index) => (
            <Grid item xs={12} md={3} key={profile.id} className={classes.profilesGridList}>
              <ListItem
                key={profile.title}
                classes={{
                  root: classNames(classes.profile, {
                    [`${profileClassPrefix}${
                      index % profileClassCount
                    }`]: profileClassCount,
                  }),
                  description: classes.profileDescription,
                  link: classes.profileLink,
                  name: classes.profileName,
                  nameSelected: classes.profileNameSelected,
                  picture: classes.profilePicture,
                  pictureSelected: classes.profilePictureSelected,
                  title: classes.profileTitle,
                }}
                height={cellHeight}
                description={profile.description}
                image={profile.image}
                itemChildren={profile.itemChildren}
                name={profile.name}
                title={profile.title}
              />
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  );
}

ExpertList.propTypes = {
  experts: PropTypes.arrayOf(
    PropTypes.shape({})
    ).isRequired,
  profileClassCount: PropTypes.number,
  profileClassPrefix: PropTypes.string,
  title: PropTypes.string,
};

ExpertList.defaultProps = {
  profileClassCount: 3,
  profileClassPrefix: "profile-",
  title: "Featured Experts",
};

export default ExpertList;
