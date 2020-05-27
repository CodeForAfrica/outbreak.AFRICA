/* eslint-disable react/no-danger, jsx-a11y/control-has-associated-label */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { PropTypes } from "prop-types";

import classNames from "classnames";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { ListItem, RichTypography, Section } from "@commons-ui/core";

import useStyles from "components/Research/ExpertList/useStyles";
import Filter from "components/Research/Filter";

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

  const [activeTopic, setActiveTopic] = useState("all");
  const [subTopics, setSubTopics] = useState([]);
  const [topicExperts, setTopicExperts] = useState(experts);

  const uniqueTopics = useMemo(() =>
    experts &&
    experts.reduce((a, b) => a.concat(b.topic), [])
    .reduce((acc, current) => {
      const x = acc.find((item) => item.term_id === current.term_id);
      if (!x) {
        return acc.concat([current]);
      }
      return acc;
    }, []), [experts]);


  const onButtonClick = (value) => {
    setActiveTopic(value);
  };

  const onSubTopicButtonClick = (value) => {
    setTopicExperts(
      experts.filter(({ topic: t }) => {
        const found = t.find(
          (x) =>
            x.slug === value
        );
        if (found) {
          return true;
        }
        return false;
      })
    );
  }

  const parentTopics = [
    { name: "All", slug: "all" },
    ...uniqueTopics.filter((topic) => topic.parent === 0),
  ];

  useEffect(() => {
    const foundActiveTopic = uniqueTopics.find((a) => a.slug === activeTopic);
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
      <Section title={title} classes={{ root: classes.section, title: classes.sectionTitle }}>
        <Filter
          activeTopic={activeTopic}
          onButtonClick={onButtonClick}
          onSubTopicButtonClick={onSubTopicButtonClick}
          parentTopics={parentTopics}
          subTopics={subTopics}
        />

        <Grid container direction="row" spacing={2}>
          {topicExperts.map((profile, index) => (
            <Grid
              item
              xs={12}
              md={3}
              key={profile.id}
              className={classes.profilesGridList}
            >
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
  experts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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
