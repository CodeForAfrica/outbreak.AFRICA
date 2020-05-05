/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import React, { useCallback, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";

import clsx from "clsx";

import { Section } from "@commons-ui/core";

import { Grid } from "@material-ui/core";
import Profile from "../ListItem";
import useStyles from "./useStyles";
import Filter from '../Filter';

function ProfileList({
  cellHeight,
  height,
  onSelectedIndexChanged,
  linkComponent,
  lg,
  md,
  profileClassCount,
  profileClassPrefix,
  profiles,
  selectedIndex: selectedIndexProp,
  sm,
  xs,
  ...props
}) {
  const classes = useStyles(props);
  const rootRef = useRef(null);

  return (
    <div className={classes.root} ref={rootRef}>
      <Section classes={{ root: classes.section }}>
        <Filter />
        <Grid container direction="row" justify="center" spacing={2}>
          {profiles.map((profile, index) => (
            <Grid item xs={12} md={3} key={profile.id}>
              <Profile
                key={profile.title}
                classes={{
                  root: clsx(classes.profile, {
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
                link={profile.link}
                linkComponent={linkComponent}
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

ProfileList.propTypes = {
  cellHeight: PropTypes.number,
  height: PropTypes.number,
  linkComponent: PropTypes.elementType,
  lg: PropTypes.number,
  md: PropTypes.number,
  onSelectedIndexChanged: PropTypes.func,
  profileClassCount: PropTypes.number,
  profileClassPrefix: PropTypes.string,
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      image: PropTypes.shape({
        description: PropTypes.string,
        url: PropTypes.string.isRequired,
      }),
      link: PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string.isRequired,
      }),
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
  selectedIndex: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number,
};

ProfileList.defaultProps = {
  cellHeight: 320,
  height: 370, // 23.125rem
  linkComponent: undefined,
  lg: undefined,
  md: 4.3,
  onSelectedIndexChanged: undefined,
  profileClassCount: 3,
  profileClassPrefix: "profile-",
  selectedIndex: 0,
  sm: undefined,
  xs: 1,
};

export default ProfileList;
