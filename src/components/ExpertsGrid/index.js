/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { ListItem as Profile, Section } from "@commons-ui/core";
import { Contacts as ProfileContacts } from "@commons-ui/core/ProfileList";

import Filter from "components/Filter";

import useStyles from "./useStyles";

function ExpertsGrid({
  experts,
  icons: availableIcons,
  profileClassCount,
  profileClassPrefix,
  title,
  ...props
}) {
  const classes = useStyles(props);
  const rootRef = useRef(null);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isUpXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = isUpLg && !isUpXl;
  let icons;
  if (availableIcons) {
    icons = isDesktop ? availableIcons.desktop : availableIcons.mobile;
  }
  let cellHeight = 213;
  if (isDesktop) {
    cellHeight = 304;
    if (isLg) {
      cellHeight = isUpXl ? 546 : 400;
    }
  }
  const [activeTopic, setActiveTopic] = useState("all");
  const [subTopics, setSubTopics] = useState([]);
  const [topicExperts, setTopicExperts] = useState(experts);

  const uniqueTopics = useMemo(
    () =>
      experts
        ? experts
            .reduce((a, b) => a.concat(b.topic), [])
            .reduce((acc, current) => {
              const x = acc.find((item) => item.term_id === current.term_id);
              if (!x) {
                return acc.concat([current]);
              }
              return acc;
            }, [])
        : [],
    [experts]
  );

  const onButtonClick = (value) => {
    setActiveTopic(value);
  };

  const onSubTopicButtonClick = (value) => {
    setTopicExperts(
      experts.filter(({ topic: t }) => {
        const found = t.find((x) => x.slug === value);
        if (found) {
          return true;
        }
        return false;
      })
    );
  };

  const parentTopics = [
    { name: "All", slug: "all" },
    ...(uniqueTopics && uniqueTopics.filter((topic) => topic.parent === 0)),
  ];

  useEffect(() => {
    const foundActiveTopic =
      uniqueTopics && uniqueTopics.find((a) => a.slug === activeTopic);
    if (foundActiveTopic) {
      setSubTopics(
        uniqueTopics.filter((top) => top.parent === foundActiveTopic.term_id)
      );
      setTopicExperts(
        experts.filter(({ topic: t }) => {
          const found = t.find(
            (x) =>
              x.term_id === foundActiveTopic.term_id ||
              x.parent === foundActiveTopic.term_id
          );
          if (found) {
            return true;
          }
          return false;
        })
      );
    } else {
      setSubTopics([]);
      setTopicExperts(experts);
    }
  }, [activeTopic, experts, uniqueTopics]);

  return (
    <div className={classes.root} ref={rootRef}>
      <Section
        title={title}
        classes={{ root: classes.section, title: classes.sectionTitle }}
      >
        <Filter
          activeTopic={activeTopic}
          onButtonClick={onButtonClick}
          onSubTopicButtonClick={onSubTopicButtonClick}
          parentTopics={parentTopics}
          subTopics={subTopics}
        />

        <Grid container>
          {topicExperts.map((profile, index) => (
            <Grid
              item
              xs={12}
              md={3}
              key={profile.id}
              className={classes.profiles}
            >
              <Profile
                classes={{
                  root: classes.profile,
                  contentsRoot: classNames(
                    classes.profileContentsRoot,
                    classes[`profileContentsRoot${index % 3}`]
                  ),
                  contents: classes.profileContents,
                  name: classes.profileName,
                }}
                height={cellHeight}
                image={profile.image}
                name={profile.name}
                description={profile.description}
                variant="profile"
              >
                <ProfileContacts icons={icons} profile={profile} />
              </Profile>
              {isDesktop && (profile.title || profile.description) && (
                <div>
                  {profile.title && (
                    <Typography
                      variant="subtitle2"
                      className={classes.profileTitle}
                    >
                      {profile.title}
                    </Typography>
                  )}
                  {profile.description && (
                    <Typography
                      component="div"
                      variant="caption"
                      className={classes.profileDescription}
                    >
                      {profile.description}
                    </Typography>
                  )}
                </div>
              )}
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  );
}

ExpertsGrid.propTypes = {
  experts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  icons: PropTypes.shape({
    desktop: PropTypes.shape({}),
    mobile: PropTypes.shape({}),
  }),
  profileClassCount: PropTypes.number,
  profileClassPrefix: PropTypes.string,
  title: PropTypes.string,
};

ExpertsGrid.defaultProps = {
  icons: undefined,
  profileClassCount: 3,
  profileClassPrefix: "profile-",
  title: "Featured Experts",
};

export default ExpertsGrid;
