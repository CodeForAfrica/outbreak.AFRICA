import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import { Avatar, Button, Grid, Tooltip } from "@material-ui/core";
import { BarChart, Check } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import Truncate from "react-truncate";

import { RichTypography } from "@commons-ui/core";

import config from "config";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    boxShadow: "0px 4px 4px #00000029",
    border: "1px solid #D6D6D6",
    padding: 54,
  },
  avatar: {
    display: "inline-flex",
    height: spacing(3),
    marginRight: spacing(1),
    width: spacing(3),
  },
  toggleLines: {
    textTransform: "unset",
  },
  notes: {
    // ckan seem to use line-breaks & we're only concerned w/ displaying
    // these line breaks
    // see: https://stackoverflow.com/a/32351302
    whiteSpace: "pre-line",
  },
}));

function textifyUpdateFrequency(dataUpdateFrequency) {
  const updateDays = Number.parseInt(dataUpdateFrequency, 10);
  switch (updateDays) {
    case -2: {
      return "As Needed";
    }
    case 0: {
      return "Live";
    }
    case 1: {
      return "Every day";
    }
    case 7: {
      return "Every week";
    }
    case 30: {
      return "Every month";
    }
    case 60: {
      return "Every 2 months";
    }
    case 90: {
      return "Every 3 months";
    }
    default: {
      return `Every ${dataUpdateFrequency} days`;
    }
  }
}

function textifyUpdated(lastModified, dataUpdateFrequency) {
  if (dataUpdateFrequency && dataUpdateFrequency === "0") {
    return textifyUpdateFrequency(dataUpdateFrequency);
  }
  if (!lastModified) {
    return "";
  }
  return new Date(lastModified).toLocaleDateString(
    undefined,
    config.DATE_OPTIONS
  );
}

function DatasetStatus({ overdueDate, ...props }) {
  const classes = useStyles(props);
  const isUpToDate = overdueDate && new Date(overdueDate) > new Date();
  if (!isUpToDate) {
    return null;
  }
  return (
    <Tooltip title="This Dataset is up to date" placement="top">
      <Avatar variant="square" className={classes.avatar}>
        <Check size="small" />
      </Avatar>
    </Tooltip>
  );
}

function Dataset({ dataset, lines, ...props }) {
  const classes = useStyles(props);
  const notesRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [truncated, setTruncated] = useState(false);
  const handleTruncate = (truncate) => {
    if (truncated !== truncate) {
      setTruncated(truncate);
    }
  };
  const toggleLines = (e) => {
    e.preventDefault();

    setExpanded((prevExpanded) => !prevExpanded);
  };
  const {
    data_update_frequency: dataUpdateFrequency,
    has_quickcharts: hasQuickCharts,
    last_modified: lastModified,
    notes,
    organization,
    overdue_date: overdueDate,
    resources,
    subnational,
    tags,
    title,
    total_res_downloads: totalDownloads,
  } = dataset;
  const downloads = Math.ceil((totalDownloads || 0) / 100.0) * 100;
  const formats = {};
  if (resources && resources.length) {
    resources.forEach((resource) => {
      formats[resource.format.toUpperCase()] = true;
    });
  }
  const hasHxlTags =
    tags && tags.find((tag) => tag.name.toLowerCase() === "hxl");
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} md={6}>
        <RichTypography variant="subtitle2" className={classes.title}>
          {title}
        </RichTypography>
        {organization && (
          <RichTypography variant="body2" className={classes.title}>
            {organization.title}
          </RichTypography>
        )}
        <Grid item xs={12} container alignItems="baseline" spacing={1}>
          {hasHxlTags && (
            <Tooltip title="Dataset has HXL tags" placement="top">
              <Avatar variant="square" className={classes.avatar}>
                H
              </Avatar>
            </Tooltip>
          )}
          {hasQuickCharts && (
            <Tooltip title="Dataset contains quick chart" placement="top">
              <Avatar variant="square" className={classes.avatar}>
                <BarChart size="small" />
              </Avatar>
            </Tooltip>
          )}
          <RichTypography variant="caption" className={classes.title}>
            {downloads}+ Downloads
          </RichTypography>
        </Grid>
        <Grid item xs={12}>
          <RichTypography variant="overline" className={classes.title}>
            Updated: {textifyUpdated(lastModified, dataUpdateFrequency)}
          </RichTypography>
        </Grid>
        <Grid item xs={12} container alignItems="center">
          <RichTypography variant="overline" className={classes.title}>
            This dataset updates: {textifyUpdateFrequency(dataUpdateFrequency)}
          </RichTypography>
          <DatasetStatus overdueDate={overdueDate} />
        </Grid>
      </Grid>
      {notes && (
        <Grid item xs={12} md={6} ref={notesRef} container>
          <RichTypography variant="caption" className={classes.notes}>
            <Truncate
              lines={!expanded && lines}
              ellipsis={
                <span>
                  ...{" "}
                  <Button
                    component="a"
                    size="small"
                    onClick={toggleLines}
                    className={classes.toggleLines}
                  >
                    More
                  </Button>
                </span>
              }
              onTruncate={handleTruncate}
              width={(notesRef.current && notesRef.current.offsetWidth) || 0}
            >
              {notes}
            </Truncate>
            {!truncated && expanded && (
              <div>
                <Button
                  component="a"
                  onClick={toggleLines}
                  className={classes.toggleLines}
                >
                  Less
                </Button>
              </div>
            )}
          </RichTypography>
          <Grid item xs={12} container alignItems="baseline">
            {Object.keys(formats).map((format) => (
              <RichTypography variant="caption">{format}</RichTypography>
            ))}
            {subnational === "1" && (
              <Tooltip title="Sub-National Data" placement="top">
                <RichTypography variant="caption">SN</RichTypography>
              </Tooltip>
            )}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

Dataset.propTypes = {
  dataset: PropTypes.shape({
    data_update_frequency: PropTypes.string.isRequired,
    dataset_date: PropTypes.string,
    has_quickcharts: PropTypes.bool,
    last_modified: PropTypes.string,
    notes: PropTypes.string,
    organization: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    overdue_date: PropTypes.string.isRequired,
    resources: PropTypes.arrayOf(PropTypes.shape({})),
    subnational: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    total_res_downloads: PropTypes.number,
  }),
  lines: PropTypes.number,
};

Dataset.defaultProps = {
  dataset: undefined,
  lines: 4,
};
export default Dataset;
