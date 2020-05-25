import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import ReactMultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import useBreakpoint from "lib/useBreakpoint";

import ButtonGroup from "./CarouselButtonGroup";
import CarouselCard from "./CarouselCard";
import usePartialVisibilityGutter from "./usePartialVisibilityGutter";

const useStyles = makeStyles(({ breakpoints, typography, widths }) => ({
  root: {
    position: "relative",
  },
  buttonGroup: {
    display: "none",
    [breakpoints.up("md")]: {
      display: "initial",
      position: "absolute",
      left: (props) =>
        typography.pxToRem(
          (widths.values.md * props.width) / widths.values.xl -
            (48 * 2 + 16) -
            29
        ),
      top: typography.pxToRem(29),
    },
    [breakpoints.up("lg")]: {
      left: (props) =>
        typography.pxToRem(
          (widths.values.lg * props.width) / widths.values.xl -
            (48 * 2 + 16) -
            29
        ),
    },
    [breakpoints.up("xl")]: {
      left: (props) => typography.pxToRem(props.width - (70 * 2 + 16) - 29),
    },
  },
  buttonGroupButton: {
    [breakpoints.up("xl")]: {
      height: typography.pxToRem(70),
      width: typography.pxToRem(70),
    },
  },
  carousel: {
    [breakpoints.up("md")]: {
      width: (props) =>
        (widths.values.md * props.width) / widths.values.xl +
        props.partialVisibilityGutter,
    },
    [breakpoints.up("lg")]: {
      width: (props) =>
        (widths.values.lg * props.width) / widths.values.xl +
        props.partialVisibilityGutter,
    },
    [breakpoints.up("xl")]: {
      width: (props) => props.width + props.partialVisibilityGutter,
    },
  },
}));

function Carousel({ deviceType, carouselItems, carouselLinkTitle, ...props }) {
  const partialVisibilityGutter = usePartialVisibilityGutter();
  const classes = useStyles({ ...props, partialVisibilityGutter });
  const [centerMode, setCenterMode] = useState(true);
  const [partialVisible, setPartialVisible] = useState(false);
  const [responsive, setResponsive] = useState({
    xl: {
      breakpoint: { max: 3000, min: 1920 },
      items: 1,
    },
    lg: {
      breakpoint: { max: 1919, min: 1280 },
      items: 1,
    },
    md: {
      breakpoint: { max: 1279, min: 960 },
      items: 1,
    },
    sm: {
      breakpoint: { max: 959, min: 600 },
      items: 1,
    },
    xs: {
      breakpoint: { max: 599, min: 0 },
      items: 1,
    },
  });
  const breakpoint = useBreakpoint();
  useEffect(() => {
    if (partialVisibilityGutter) {
      setResponsive((prevResponsive) => ({
        ...prevResponsive,
        [breakpoint]: {
          ...prevResponsive[breakpoint],
          partialVisibilityGutter,
        },
      }));
      setCenterMode(false);
      setPartialVisible(true);
    } else {
      setCenterMode(true);
      setPartialVisible(false);
    }
  }, [breakpoint, partialVisibilityGutter]);

  if (!carouselItems || carouselItems.length === 0) {
    return null;
  }
  const { height, width } = props;
  return (
    <div className={classes.root}>
      <ReactMultiCarousel
        centerMode={centerMode}
        swipeable
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr // means to render carousel on server-side.
        infinite
        autoPlay={false}
        keyBoardControl
        renderButtonGroupOutside
        customButtonGroup={
          <ButtonGroup
            classes={{
              root: classes.buttonGroup,
              button: classes.buttonGroupButton,
            }}
          />
        }
        autoPlaySpeed={5000}
        deviceType={deviceType || breakpoint}
        partialVisible={partialVisible}
        removeArrowOnDeviceType={["xl", "lg", "md", "sm", "xs"]}
        itemClass="carousel-item"
        className={classes.carousel}
      >
        {carouselItems.map((item) => (
          <CarouselCard
            key={item.title}
            height={height}
            item={item}
            linkTitle={carouselLinkTitle}
            width={width}
          />
        ))}
      </ReactMultiCarousel>
    </div>
  );
}

Carousel.propTypes = {
  carouselItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  carouselLinkTitle: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

Carousel.defaultProps = {
  carouselItems: undefined,
  carouselLinkTitle: undefined,
  height: 637,
  width: 536,
};

export default Carousel;
