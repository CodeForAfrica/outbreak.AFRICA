import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

import {
  Grid,
  Input,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Section } from "@commons-ui/core";

import Button from "components/Link/Button";
import searchIcon from "assets/images/icon-search.svg";
import MapColorLegend from "./MapColorLegend";
import MapIt from "./MapIt";

import CountrySelector from "./CountrySelector";

const useStyles = makeStyles((theme) => ({
  root: {},
  section: {
    position: "relative",
  },
  container: {
    zIndex: 999,
    position: "initial",
    // height: "34rem",
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      pointerEvents: "none",
    },
  },
  profile: (props) => ({
    [theme.breakpoints.up("md")]: {
      height: props.comparable ? "30rem" : "25.5rem",
    },
  }),
  geo: {
    pointerEvents: "all",
  },
  geoInfo: () => ({
    backgroundColor: "rgba(255, 255, 255, 0.63)",
    lineHeight: "normal",
    width: "100%",
    padding: "1rem 0",
    [theme.breakpoints.up("md")]: {
      padding: "0.875rem 1.438rem 1.5625rem 1.438rem",
      width: theme.typography.pxToRem(375),
      border: "solid 0.063rem rgba(0, 0, 0, 0.19)",
      borderRadius: 0,
      pointerEvents: "all",
      zIndex: 1,
    },
  }),
  label: {},
  link: {
    marginTop: "2rem",
  },
  valueLabel: {
    fontWeight: 600,
  },
  searchBar: {
    position: "relative",
    width: "100%",
  },
  searchBarInput: {
    padding: "0.625rem",
    borderRadius: "0.25rem",
    border: "solid 0.063rem rgba(151, 151, 151, 0.3)",
  },
  searchBarIcon: {
    position: "absolute",
    right: "1rem",
    top: "1rem",
  },
  popperIndex: {
    zIndex: 2,
  },
}));

function ProfileDetail({
  profile: { comparable = false, geo = {} },
  country,
  geoId,
  geoIndeces,
  onClickGeoLayer,
  ...props
}) {
  const classes = useStyles({ ...props, comparable });
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up("md"));
  const searchBarRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = (e) => {
    const newSearchTerm = e && e.target ? e.target.value : searchTerm;
    setSearchTerm(newSearchTerm);
    if (newSearchTerm.length) {
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  };

  const { squareKms, totalPopulation, name } = geo;
  const population = totalPopulation.toFixed(0);
  const populationDensity = (population / squareKms).toFixed(1);

  return (
    <Grid container className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <div className={classes.container}>
          <Grid
            container
            direction="column"
            justify="space-between"
            className={classes.profile}
          >
            <Grid item container direction="column" justify="flex-start">
              <Grid item className={classes.geo}>
                <CountrySelector
                  country={country}
                  geoName={name}
                  context="topic"
                />
              </Grid>
              {isMobile && (
                <MapIt
                  geoId={geoId}
                  height="300px"
                  onClickGeoLayer={onClickGeoLayer}
                  geoIndeces={geoIndeces}
                  width="100%"
                />
              )}
              <Grid item container className={classes.geoInfo}>
                <Grid
                  item
                  container
                  direction="row"
                  wrap="nowrap"
                  xs={6}
                  md={12}
                >
                  <Grid
                    item
                    container
                    direction="column"
                    justify="space-between"
                  >
                    {population && (
                      <Grid item>
                        <Typography variant="body1" className={classes.label}>
                          Population
                        </Typography>
                        <Typography
                          variant="body1"
                          className={classNames([
                            classes.label,
                            classes.valueLabel,
                          ])}
                        >
                          {Number(population).toLocaleString()}
                        </Typography>
                      </Grid>
                    )}
                    {squareKms && (
                      <Grid item>
                        <Typography variant="body1" className={classes.label}>
                          Square kilometres
                        </Typography>
                        <Typography
                          variant="body1"
                          className={classNames([
                            classes.label,
                            classes.valueLabel,
                          ])}
                        >
                          {Number(squareKms).toLocaleString()}
                        </Typography>
                      </Grid>
                    )}
                    {populationDensity && (
                      <Grid item>
                        <Typography variant="body1" className={classes.label}>
                          People per km<sup>2</sup>
                        </Typography>
                        <Typography
                          variant="body1"
                          className={classNames([
                            classes.label,
                            classes.valueLabel,
                          ])}
                        >
                          {Number(populationDensity).toLocaleString()}
                        </Typography>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
                {isMobile && (
                  <Grid item xs={6}>
                    <MapColorLegend />
                  </Grid>
                )}
                {!isMobile && (
                  <Grid item>
                    <Button
                      href="#"
                      variant="outlined"
                      color="secondary"
                      className={classes.link}
                    >
                      LEARN MORE
                    </Button>
                  </Grid>
                )}
              </Grid>
              {comparable && (
                <Grid item>
                  <Grid container>
                    <div ref={searchBarRef} className={classes.searchBar}>
                      <Input
                        fullWidth
                        disableUnderline
                        className={classes.searchBarInput}
                        onFocus={handleSearch}
                        onBlur={() => setShowSearchResults(false)}
                        placeholder="Compare with"
                        onChange={handleSearch}
                      />
                      <img
                        alt=""
                        src={searchIcon}
                        className={classes.searchBarIcon}
                      />
                    </div>

                    <Popper
                      className={classes.popperIndex}
                      open={showSearchResults}
                      anchorEl={searchBarRef}
                      style={{
                        width: searchBarRef ? searchBarRef.clientWidth : null,
                      }}
                    >
                      <Paper>
                        <MenuList>
                          <MenuItem>Example</MenuItem>
                        </MenuList>
                      </Paper>
                    </Popper>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </div>
      </Section>
    </Grid>
  );
}

ProfileDetail.propTypes = {
  profile: PropTypes.shape({
    comparable: PropTypes.bool,
    demographics: PropTypes.shape({
      population_density: PropTypes.shape({
        values: PropTypes.shape({
          this: PropTypes.number,
        }),
      }),
      total_population: PropTypes.shape({
        values: PropTypes.shape({
          this: PropTypes.number,
        }),
      }),
    }),
    geo: PropTypes.shape({
      geoCode: PropTypes.string,
      geoLevel: PropTypes.string,
      parentCode: PropTypes.string,
      name: PropTypes.string,
      squareKms: PropTypes.number,
      totalPopulation: PropTypes.number,
    }),
  }).isRequired,
  country: PropTypes.shape({}).isRequired,
  geoId: PropTypes.string,
  geoIndeces: PropTypes.arrayOf(PropTypes.shape({})),
  onClickGeoLayer: PropTypes.func,
};

ProfileDetail.defaultProps = {
  geoId: undefined,
  geoIndeces: undefined,
  onClickGeoLayer: null,
};

export default ProfileDetail;
