import { Section } from "@commons-ui/core";
import { Grid, List, ListItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import MapKey from "@/outbreakafrica/assets/map-key.svg";
import Image from "@/outbreakafrica/components/Image";
import config from "@/outbreakafrica/config";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {},
  section: {
    position: "relative",
  },
  container: {
    zIndex: 999,
    display: "flex",
    [breakpoints.up("md")]: {
      position: "absolute",
      pointerEvents: "none",
      right: "7rem",
      marginTop: "10rem",
    },
  },
  itemText: {
    textTransform: "capitalize",
    [breakpoints.up("lg")]: {
      lineHeight: 40 / 20,
    },
    [breakpoints.up("xl")]: {
      lineHeight: 30 / 20,
    },
  },
}));

function MapColorLegend(props) {
  const classes = useStyles(props);

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
            <Grid
              item
              container
              direction="column"
              justify="flex-start"
              spacing={2}
            >
              <Grid item alignItems="center">
                <Typography variant="subtitle2">
                  Covid-19 <br />
                  Vulnerability Index
                </Typography>
              </Grid>
              <Grid item container>
                <Image src={MapKey} alt="Map Index" />
                <List dense>
                  {Object.keys(config.vulnerabilityIndexColor).map((item) => (
                    <ListItem>
                      <Typography
                        variant="caption"
                        className={classes.itemText}
                      >
                        {" "}
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Section>
    </Grid>
  );
}

export default MapColorLegend;
