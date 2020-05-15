import createTheme from "@hurumap-ui/charts/styles/createTheme";
import { deepmerge } from "@material-ui/utils";

import createChart from "./createChart";

const FONT_FAMILY_HEADING = '"Changa", serif';
const FONT_FAMILY_TEXT = '"Open Sans", sans-serif';

const COLOR_BREWER_DIVERGING = [
  "#0050FF",
  "#170F49",
  "#00000029",
  "#D6D6D6",
  "#F9FF71",
];

// ## DEFAULT
const chart = createChart(
  { colorScale: COLOR_BREWER_DIVERGING },
  {
    labelStyle: {
      fontFamily: FONT_FAMILY_TEXT,
      fill: "#170F49",
    },
  }
);
const theme = createTheme({
  chart,
  palette: {
    primary: { main: "#0050FF" },
    secondary: { main: "#170F49" },
    highlight: { main: "#F9FF71" },
    text: { primary: "#170F49", secondary: "#fff" },
    background: {
      default: "#fff",
      light: "#f6f6f6", // light gray
    },
    info: {
      main: "#f6fbfa", // ice-blue
      other: "#9b9b9b",
    },
    data: {
      main: "#4a4a4a",
      light: "#F5F5F5", // #4a4a4a opacity 0.05
    },
  },
  typography: {
    fontFamily: FONT_FAMILY_TEXT,
    h1: {
      fontFamily: FONT_FAMILY_HEADING,
      fontStretch: "normal",
      fontStyle: "normal",
      fontWeight: 700,
      letterSpacing: 0,
    },
    h2: {
      fontFamily: FONT_FAMILY_HEADING,
      fontStretch: "normal",
      fontStyle: "normal",
      fontWeight: 700,
      letterSpacing: 0,
    },
    h3: {
      fontFamily: FONT_FAMILY_HEADING,
      fontStretch: "normal",
      fontStyle: "normal",
      fontWeight: 700,
      letterSpacing: 0,
      textTransform: "uppercase",
    },
    subtitle1: {
      fontFamily: FONT_FAMILY_TEXT,
      fontStretch: "normal",
      fontStyle: "normal",
      fontWeight: 400,
      letterSpacing: 0,
    },
    subtitle2: {
      fontFamily: FONT_FAMILY_TEXT,
      fontStretch: "normal",
      fontStyle: "normal",
      fontWeight: 700,
      letterSpacing: 0,
    },
    body1: {
      fontFamily: FONT_FAMILY_TEXT,
      fontStretch: "normal",
      fontStyle: "normal",
      letterSpacing: 0,
      fontWeight: 400,
    },
    body2: {
      fontFamily: FONT_FAMILY_TEXT,
      fontStretch: "normal",
      fontStyle: "normal",
      fontWeight: 400,
      letterSpacing: 0,
    },
    button: {
      fontFamily: FONT_FAMILY_HEADING,
      fontStretch: "normal",
      fontStyle: "normal",
      fontWeight: 700,
      letterSpacing: 0,
    },
    caption: {
      fontFamily: FONT_FAMILY_TEXT,
      fontStretch: "normal",
      fontStyle: "normal",
      letterSpacing: 0,
    },
    overline: {
      fontFamily: FONT_FAMILY_TEXT,
      fontStretch: "normal",
      fontStyle: "normal",
      letterSpacing: 0,
      textTransform: "none",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        '.flourish-embed': {
          width: '100%'
        },
        ".wp-block-columns": {
          display: "flex",
          width: "calc(100% + 16px)",
          margin: "-8px",
        },
        ".wp-block-column": {
          padding: "8px",
        },
      },
    },
  },
  widths: {
    values: {
      md: 936, // 0, 12, 0, 12 margins
      lg: 1224, // 0, 28, 0, 28 margins
      xl: 1640, // 0, 140, 0, 140 margins DESIGNS
    },
  },
});

// ## RESPONSIVE FONTS
const { breakpoints, palette, typography } = theme;
const { pxToRem } = typography;
deepmerge(
  typography,
  {
    h1: {
      fontSize: pxToRem(40),
      lineHeight: 40 / 40,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(50),
        lineHeight: 80 / 50,
      },
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(80),
        lineHeight: 100 / 80,
      },
    },
    h2: {
      fontSize: pxToRem(40),
      lineHeight: 40 / 40,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(50),
        lineHeight: 80 / 50,
      },
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(80),
        lineHeight: 100 / 80,
      },
    },
    h3: {
      fontSize: pxToRem(20),
      lineHeight: 29 / 20,
      letterSpacing: pxToRem(2),
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(30),
        lineHeight: 38 / 30,
        letterSpacing: pxToRem(3),
      },
    },
    subtitle1: {
      fontSize: pxToRem(20),
      lineHeight: 30 / 20,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(20),
        lineHeight: 30 / 20,
      },
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(30),
        lineHeight: 40 / 30,
      },
    },
    subtitle2: {
      fontSize: pxToRem(16),
      lineHeight: 23 / 16,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(14),
        lineHeight: 20 / 14,
      },
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(24),
        lineHeight: 30 / 24,
      },
    },
    body1: {
      fontSize: pxToRem(20),
      lineHeight: 30 / 20,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(20),
        lineHeight: 30 / 20,
      },
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(30),
        lineHeight: 40 / 30,
      },
    },
    body2: {
      fontSize: pxToRem(18),
      lineHeight: 24 / 18,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(14),
        lineHeight: 20 / 14,
      },
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(24),
        lineHeight: 30 / 24,
      },
    },
    button: {
      fontSize: pxToRem(16),
      lineHeight: 27 / 16,
      letterSpacing: pxToRem(1.6),
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(24),
        lineHeight: 40 / 24,
        letterSpacing: pxToRem(3),
      },
    },
    caption: {
      fontSize: pxToRem(16),
      lineHeight: 24 / 16,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(14),
        lineHeight: 20 / 14,
      },
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(20),
        lineHeight: 30 / 20,
      },
    },
    overline: {
      fontSize: pxToRem(16),
      lineHeight: 24 / 16,
      [breakpoints.up("lg")]: {
        fontSize: pxToRem(14),
        lineHeight: 20 / 14,
      },
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(20),
        lineHeight: 30 / 20,
      },
    },
  },
  { clone: false }
);

// ## OVERRIDES
deepmerge(
  theme.overrides,
  {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      contained: {
        color: palette.secondary.main,
        border: "none",
        borderRadius: 0,
        boxShadow: "none",
        paddingLeft: 0,
        paddingRight: 0,
        background: "linear-gradient(180deg, #FFFFFF 40%, #F9FF71 30% )",
        "&:hover": {
          border: "inherit",
          boxShadow: "inherit",
        },
      },
      containedPrimary: {
        color: palette.secondary.main,
        border: "none",
        boxShadow: "none",
        paddingLeft: 0,
        paddingRight: 0,
        background: "linear-gradient(180deg, FFFFFF 50%, #F9FF71 30% )",
      },
      containedSizeSmall: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      containedSizeLarge: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      outlined: {
        borderRadius: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        border: "none",
        borderBottom: `4px solid ${palette.highlight.main}`,
        color: palette.highlight.main,
        "&:hover": {
          border: "none",
          borderBottom: `4px solid ${palette.highlight.main}`,
        },
      },
      outlinedPrimary: {
        border: "none",
        borderBottom: `4px solid ${palette.highlight.main}`,
        color: palette.highlight.main,
        "&:hover": {
          border: "none",
          borderBottom: `4px solid ${palette.highlight.main}`,
        },
      },
      outlinedSecondary: {
        border: "none",
        color: palette.secondary.main,
        borderBottom: `4px solid ${palette.secondary.main}`,
        "&:hover": {
          border: "none",
          borderBottom: `4px solid ${palette.primary.main}`,
          color: palette.primary.main,
        },
      },
      outlinedSizeSmall: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      outlinedSizeLarge: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      sizeLarge: {
        // Some CSS
        fontSize: pxToRem(22),
        lineHeight: 28 / 22,
        letterSpacing: pxToRem(2.2),
        [breakpoints.up("xl")]: {
          fontSize: pxToRem(30),
          lineHeight: 38 / 30,
          letterSpacing: pxToRem(3),
        },
      },
      sizeSmall: {
        fontSize: pxToRem(16),
        lineHeight: 30 / 16,
        letterSpacing: 0,
        [breakpoints.up("xl")]: {
          letterSpacing: pxToRem(2.4),
        },
      },
      text: {
        "&:hover": {
          color: palette.primary.main,
        },
      },
    },
  },
  { clone: false }
);

export default theme;
