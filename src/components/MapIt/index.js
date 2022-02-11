import { useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React from "react";

import config from "@/outbreakafrica/config";

const CommonsMapIt = dynamic({
  ssr: false,
  loader: () => {
    return typeof window !== "undefined" && import("@hurumap-ui/core/MapIt");
  },
});

const useStyles = makeStyles(() => ({
  root: ({ height, width }) => ({
    height,
    overflow: "hidden",
    width,
  }),
}));

function MapIt({
  classes: classesProps,
  geoId,
  geoIndeces,
  height,
  width,
  ...props
}) {
  const classes = useStyles({ classes: classesProps, height, width });
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <CommonsMapIt
        url={config.MAPIT_URL}
        drawProfile
        drawChildren
        codeType="AFR"
        geoCode={geoId.split("-")[1]}
        geoLayerBlurStyle={{
          color: "#D6D6D6",
          fillColor: theme.palette.primary.main,
          weight: 1.0,
          opacity: 1.0,
          fillOpacity: 0.3,
        }}
        geoLayerHoverStyle={{
          fillColor: theme.palette.primary.main,
          fillOpacity: 0.4,
        }}
        geoLevel={geoId.split("-")[0]}
        geoIndexMapping={geoIndeces}
        indexColor={config.vulnerabilityIndexColor}
        zoomControlPosition="topright"
        {...props}
      />
    </div>
  );
}

MapIt.propTypes = {
  classes: PropTypes.shape({}),
  geoId: PropTypes.string.isRequired,
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.number),
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.number),
  geoIndeces: PropTypes.arrayOf(PropTypes.shape({})),
};

MapIt.defaultProps = {
  classes: undefined,
  geoIndeces: undefined,
  height: "500px",
  width: "100%",
};

export default MapIt;
