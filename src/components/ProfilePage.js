import React, { useEffect, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import { useRouter } from "next/router";

import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ChartFactory from "@hurumap-ui/charts/ChartFactory";
import ChartContainer from "@hurumap-ui/core/ChartContainer";
import useGeoIndexLoader from "@hurumap-ui/core/useGeoIndexLoader";
import useProfileLoader from "@hurumap-ui/core/useProfileLoader";

import { Section } from "@commons-ui/core";

import config from "config";
import logo from "assets/logo-outbreak-small.png";
import FacebookIcon from "assets/Icon awesome-facebook-f-b.svg";
import InstagramIcon from "assets/Icon awesome-instagram-b.svg";
import LinkedInIcon from "assets/Icon awesome-linkedin-in-b.svg";
import TwitterIcon from "assets/Icon awesome-twitter-b.svg";
import LinkIcon from "assets/icon web.svg";
import DownloadIcon from "assets/icon download.svg";
import EmbedIcon from "assets/icon embed.svg";

import MapColorLegend from "./MapColorLegend";
import MapIt from "./MapIt";
import Page from "./Page";
import ProfileDetail from "./ProfileDetail";
import ProfileSection, { ProfileSectionTitle } from "./ProfileSection";

const useStyles = makeStyles(
  ({ breakpoints, palette, typography, widths }) => ({
    root: {},
    section: {
      margin: "0 1.25rem 0 1.375rem",
      width: "auto",
      [breakpoints.up("md")]: {
        margin: "0 auto",
        width: widths.values.md,
      },
      [breakpoints.up("lg")]: {
        width: widths.values.lg,
      },
      [breakpoints.up("xl")]: {
        margin: "0 auto",
        width: widths.values.xl,
      },
    },
    attribution: {
      backgroundColor: palette.background.default,
      borderBottom: `4px solid ${palette.primary.main}`,
    },
    attributionSource: {
      "& div": {
        color: "#9D9C9C",
      },
      "& .site": {
        color: palette.secondary.main,
        display: "block",
      },
    },
    chartShadow: {
      boxShadow: "0px 4px 4px #00000029",
      border: "1px solid #D6D6D6",
      height: "100%",
    },
    container: {
      marginBottom: "1.675rem",
      marginTop: "2.5rem",
      position: "relative",
      paddingRight: typography.pxToRem(16),
      "&:last-of-type": {
        paddingRight: 0,
      },
    },
    containerRoot: ({ loading }) => ({
      width: "100%",
      minHeight: loading && "300px",
      margin: 0,
    }),
    chartRoot: {
      padding: "42px 38px 33px 38px",
      position: "relative",
      width: "100%",
    },
    chart: {
      margin: "0rem !important",
    },
    content: {
      paddingBottom: 0,
    },
    actionIcon: {
      height: typography.pxToRem(24),
      width: typography.pxToRem(24),
      [breakpoints.up("md")]: {
        height: typography.pxToRem((widths.values.md * 30) / widths.values.xl),
        width: typography.pxToRem((widths.values.md * 30) / widths.values.xl),
      },
      [breakpoints.up("lg")]: {
        height: typography.pxToRem((widths.values.lg * 30) / widths.values.xl),
        width: typography.pxToRem((widths.values.lg * 30) / widths.values.xl),
      },
      [breakpoints.up("xl")]: {
        height: typography.pxToRem(30),
        width: typography.pxToRem(30),
      },
    },
    title: {
      fontSize: typography.subtitle2.fontSize,
      fontWeight: typography.subtitle2.fontWeight,
    },
    sourceDiv: {
      position: "absolute",
      bottom: 0,
      paddingLeft: "38px", // similar to chartRoot
    },
    source: {
      color: "#9D9C9C",
      marginLeft: "0 !important",
      textDecoration: "none",
    },
    embedRoot: {
      zIndex: 1000,
    },
    embedSubtitle: {
      color: palette.text.primary,
      fontSize: typography.subtitle2.fontSize,
    },
  })
);

function Chart({ chartData, definition, profiles, classes }) {
  const reference = chartData.profileVisualsData[
    `${definition.queryAlias}Reference`
  ] || { nodes: [] };
  const parts = {};
  if (reference.nodes.length && profiles.profile && profiles.parent) {
    const dataLegend = {
      data: [{ name: profiles.profile.name }, { name: profiles.parent.name }],
    };
    Object.assign(parts, { legend: dataLegend });
  }
  return chartData.isLoading ? (
    <div />
  ) : (
    <ChartFactory
      definition={{
        ...definition,
        typeProps: { ...definition.typeProps, parts },
      }}
      data={chartData.profileVisualsData[definition.queryAlias].nodes}
      referenceData={reference.nodes}
      profiles={profiles}
      disableShowMore
      classes={classes}
    />
  );
}

Chart.propTypes = {
  chartData: PropTypes.shape({
    isLoading: PropTypes.bool,
    profileVisualsData: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
  definition: PropTypes.shape({
    queryAlias: PropTypes.string,
  }).isRequired,
  profiles: PropTypes.shape({}).isRequired,
};

const overrideTypePropsFor = (chartType) => {
  switch (chartType) {
    case "column": // Fall through
    case "grouped_column":
      return {
        parts: {
          axis: {
            dependent: {
              style: {
                grid: {
                  display: "none",
                },
                tickLabels: {
                  display: "none",
                },
              },
            },
          },
        },
      };
    default:
      return {};
  }
};

function ProfilePage({
  indicatorId,
  geoId,
  language,
  outbreak,
  country,
  sectionedCharts,
}) {
  const router = useRouter();
  const { countries } = outbreak;
  const [activeTab, setActiveTab] = useState(
    process.browser && window.location.hash.slice(1)
      ? window.location.hash.slice(1)
      : "all"
  );

  const filterByGeography = useCallback(
    ({ type, inGeographies }) =>
      // Support only HURUmap Charts & check in Geography
      type === "hurumap" &&
      inGeographies &&
      inGeographies.find(
        ({ geoLevel, geoCode }) => `${geoLevel}-${geoCode}` === geoId
      ),
    [geoId]
  );

  const visuals = useMemo(
    () =>
      sectionedCharts
        .reduce((a, b) => a.concat(b.charts), [])
        .filter(filterByGeography)
        .map(({ visual }) => {
          if (visual.type === "line") {
            return {
              ...visual,
              reference: {},
            };
          }
          return visual;
        }),
    [filterByGeography, sectionedCharts]
  );

  const { profiles, chartData } = useProfileLoader({
    geoId,
    populationTables: config.populationTables,
    visuals,
  });

  const geoIndeces = useGeoIndexLoader({
    countryCode: country.isoCode,
    indexField: config.colorIndexField,
    indexTable: config.colorIndexTable[activeTab],
    scoreField: config.colorScoreField,
  });

  const filterByChartData = useCallback(
    ({ visual: { queryAlias } }) =>
      // Data is loading or available
      chartData.isLoading ||
      (chartData.profileVisualsData &&
        // HURUmap data is not missing
        chartData.profileVisualsData[queryAlias].nodes.length !== 0),
    [chartData.isLoading, chartData.profileVisualsData]
  );

  const classes = useStyles({ loading: chartData.isLoading });

  const onClickGeoLayer = useCallback(
    (area) => {
      router.push("/data/[geoId]", `/data/${area.codes.AFR}`);
    },
    [router]
  );

  // get all available profile tabs
  const [profileTabs, setProfileTabs] = useState(
    sectionedCharts
      // Filter empty sections
      .reduce((a, { charts, ...rest }) => {
        const filteredCharts = charts.filter(filterByGeography);
        if (filteredCharts.length) {
          a.push({
            ...rest,
            charts: filteredCharts,
          });
        }
        return a;
      }, [])
  );

  const debounceSetProfileTabs = setProfileTabs; // _debounce(setProfileTabs, 2000);

  useEffect(
    () =>
      debounceSetProfileTabs([
        {
          name: "All",
          slug: "all",
        },
        ...sectionedCharts
          // Filter empty sections
          .reduce((a, { charts, ...rest }) => {
            const filteredCharts = charts
              .filter(filterByGeography)
              .filter(filterByChartData);
            if (filteredCharts.length) {
              a.push({
                ...rest,
                charts: filteredCharts,
              });
            }
            return a;
          }, []),
      ]),
    [
      debounceSetProfileTabs,
      filterByChartData,
      filterByGeography,
      sectionedCharts,
    ]
  );

  const charts = useMemo(
    () =>
      profileTabs.slice(1).map(
        (tab) =>
          (activeTab === "all" || activeTab === tab.slug) && (
            <Grid
              item
              container
              id={tab.slug}
              key={tab.slug}
              justify="flex-start"
              alignItems="stretch"
            >
              {(activeTab === "all" || activeTab === tab.slug) && (
                <ProfileSectionTitle loading={chartData.isLoading} tab={tab} />
              )}
              {tab.charts.map((chart) => {
                const embedPath =
                  chart.type === "hurumap"
                    ? `hurumap/${geoId}/${chart.id}`
                    : `flourish/${chart.id}`;
                const sourceResult = chartData.profileVisualsData
                  ? chartData.profileVisualsData[
                      `${chart.visual.queryAlias}Source`
                    ]
                  : null;
                const source =
                  sourceResult &&
                  sourceResult.nodes &&
                  sourceResult.nodes.length
                    ? sourceResult.nodes[0]
                    : null;

                const id = `indicator-${chart.type}-${chart.id}`;

                return (
                  <Grid
                    item
                    id={id}
                    xs={12}
                    key={chart.id}
                    md={
                      chart.layout
                        ? parseFloat(
                            chart.layout.split("/").reduce((a, b) => a / b)
                          ) * 12
                        : 12
                    }
                    className={classes.container}
                  >
                    <div className={classes.chartShadow}>
                      <ChartContainer
                        key={chart.id}
                        attribution={`Source: ${
                          (source && source.href) || ""
                        }<span class="site">${config.name}</span>`}
                        variant="data"
                        classes={{
                          attribution: classes.attribution,
                          attributionSource: classes.attributionSource,
                          chart: classes.chart,
                          content: classes.content,
                          title: classes.title,
                          root: classes.chartRoot,
                          containerRoot: classes.containerRoot,
                          source: classes.sourceDiv,
                          sourceLink: classes.source,
                          groupActionsButton: classes.actionIcon,
                          embedSubtitle: classes.embedSubtitle,
                          embedRoot: classes.embedRoot,
                        }}
                        embed={{
                          title: "Embed code for this chart",
                          subtitle:
                            "Copy the code below, then paste into your own CMS or HTML. Embedded charts are responsive to your page width, and have been tested in Firefox, Safari, Chrome, and Edge.",
                          code: `<iframe
                        id="${chart.id}"
                        src="${config.url}/embed/${embedPath}"
                        title="${chart.title}"
                        allowFullScreen
                      />`,
                        }}
                        loading={chartData.isLoading}
                        logo={logo}
                        sourceLink={source && source.href}
                        sourceTitle={source && source.title}
                        title={chart.title}
                        groupActions
                        groupIcons={{
                          facebook: {
                            icon: <img className={classes.actionIcon} src={FacebookIcon} alt="Facebook" />,
                          },
                          twitter: {
                            icon: <img className={classes.actionIcon} src={TwitterIcon} alt="Twitter" />,
                          },
                          linkedin: {
                            icon: <img className={classes.actionIcon} src={LinkedInIcon} alt="LinkedIn" />,
                          },
                          instagram: {
                            icon: <img className={classes.actionIcon} src={InstagramIcon} alt="Instagram" />,
                          },
                          embed: {
                            icon: <img className={classes.actionIcon} src={EmbedIcon} alt="Embed" />,
                          },
                          link: {
                            icon: <img className={classes.actionIcon} src={LinkIcon} alt="Link" />,
                          },
                          download: {
                            icon: <img className={classes.actionIcon} src={DownloadIcon} alt="Download" />,
                          },
                        }}
                      >
                        {chart.type === "hurumap" ? (
                          <Chart
                            key={chart.id}
                            chartData={chartData}
                            definition={{
                              ...chart.visual,
                              typeProps: {
                                ...chart.visual.typeProps,
                                ...overrideTypePropsFor(chart.visual.type),
                              },
                            }}
                            profiles={profiles}
                            classes={classes}
                          />
                        ) : (
                          <iframe
                            key={chart.id}
                            width="100%"
                            scrolling="no"
                            frameBorder="0"
                            title={chart.title}
                            src={`${config.WP_HURUMAP_DATA_API}/flourish/${chart.id}`}
                          />
                        )}
                      </ChartContainer>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          )
      ),
    [activeTab, chartData, classes, country.slug, geoId, profileTabs, profiles]
  );

  useEffect(() => {
    if (indicatorId) {
      const el = document.getElementById(indicatorId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            inline: "center",
            block: "center",
          });
        }, 1000);
      }
    }
  }, [indicatorId]);

  let title;
  if (!profiles.loading && country) {
    const { name, geoLevel } = profiles.profile || {};
    if (name) {
      if (geoLevel !== "country") {
        title = `${name} | ${country.shortName}`;
      } else {
        title = name;
      }
    }
  }
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Page
      outbreak={{ ...outbreak, country, language }}
      indicatorId={indicatorId}
      title={title}
      classes={{ section: classes.section }}
    >
      {!profiles.isLoading && (
        <ProfileDetail
          profile={{
            geo: profiles.profile,
          }}
          countries={countries}
          country={country}
          classes={{ section: classes.section }}
          geoId={geoId}
          geoIndexMapping={!geoIndeces.isLoading && geoIndeces.indeces}
          onClickGeoLayer={onClickGeoLayer}
          colorScoreLabel={config.colorScoreLabel[activeTab]}
        />
      )}
      {isDesktop && (
        <>
          {!geoIndeces.isLoading && geoIndeces.indeces.length > 0 && (
            <MapColorLegend />
          )}
          <MapIt
            geoId={geoId}
            height="500px"
            onClickGeoLayer={onClickGeoLayer}
            geoIndexMapping={!geoIndeces.isLoading && geoIndeces.indeces}
            scoreLabel={config.colorScoreLabel[activeTab]}
            width="100%"
          />
        </>
      )}
      {!profiles.isLoading && (
        <ProfileSection
          profile={{ geo: profiles.profile }}
          tabs={profileTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          classes={{ section: classes.section }}
        />
      )}
      <Section classes={{ root: classes.section }}>{charts}</Section>
    </Page>
  );
}

ProfilePage.propTypes = {
  indicatorId: PropTypes.string,
  language: PropTypes.string.isRequired,
  outbreak: PropTypes.shape({
    countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
  sectionedCharts: PropTypes.arrayOf(
    PropTypes.shape({
      charts: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
        })
      ).isRequired,
    })
  ).isRequired,
};

ProfilePage.defaultProps = {
  indicatorId: undefined,
};

export default ProfilePage;
