import React, { useEffect, useState, useMemo, useCallback } from "react";

// import _debounce from "lodash/debounce";

import PropTypes from "prop-types";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import ChartFactory from "@hurumap-ui/charts/ChartFactory";
import InsightContainer from "@hurumap-ui/core/InsightContainer";
import { shareIndicator } from "@hurumap-ui/core/utils";
import useProfileLoader from "@hurumap-ui/core/useProfileLoader";

import { Section } from "@commons-ui/core";

import config from "config";
import logo from "assets/images/logo-white-all.png";

import Page from "./Page";
import ProfileDetail from "./ProfileDetail";
import ProfileSection, { ProfileSectionTitle } from "./ProfileSection";

const MapIt = dynamic({
  ssr: false,
  loader: () => {
    return typeof window !== "undefined" && import("@hurumap-ui/core/MapIt");
  },
});

const useStyles = makeStyles(({ palette, breakpoints, typography }) => ({
  root: {},
  section: {
    margin: "0 1.25rem 0 1.375rem",
    width: "auto",
    [breakpoints.up("lg")]: {
      margin: "0 auto",
      width: "78.5rem",
    },
    [breakpoints.up("xl")]: {
      margin: "0 auto",
      width: "102.5rem",
    },
  },
  actionsShareButton: {
    minWidth: "4rem",
  },
  actionsRoot: {
    border: "solid 1px #eaeaea",
  },
  container: {
    marginBottom: "0.625rem",
  },
  containerRoot: ({ loading }) => ({
    width: "100%",
    minHeight: loading && "300px",
    backgroundColor: "#f6f6f6",
    margin: 0,
  }),
  containerInsightAnalysisLink: {
    padding: 0,
  },
  containerInsightDataLink: {
    backgroundColor: "white",
    borderRadius: "12px",
    border: `solid 2px ${palette.primary.main}`,
    padding: 0,
  },
  containerSourceGrid: {
    [breakpoints.up("md")]: {
      whiteSpace: "nowrap",
    },
  },
  containerSourceLink: {
    fontSize: typography.caption.fontSize,
    color: palette.text.primary,
  },
  insight: {
    paddingTop: "1.275rem",
  },
  insightGrid: {
    [breakpoints.up("lg")]: {
      maxWidth: "23.6875rem",
    },
  },
  numberTitle: {
    fontWeight: "bold",
  },
  hideHighlightGrid: {
    display: "none",
  },
  statDescription: {
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: 1.71,
    wordBreak: "break-word",
  },
  statStatistic: {
    fontWeight: "bold",
    fontSize: "2.5rem",
    lineHeight: 1.03,
    marginBottom: "0.6875rem",
    marginTop: "1.125rem",
  },
  statSubtitle: {
    fontWeight: "bold",
    fontSize: "1.25rem",
    marginTop: "1rem",
    paddingRight: "1.25rem", // On the same line as chart title hence better to have spacing between them
  },
  title: {
    fontFamily: typography.fontText,
    lineHeight: 2.05,
    marginTop: "1rem",
  },
}));

function Chart({ chartData, definition, profiles, classes }) {
  return chartData.isLoading ? (
    <div />
  ) : (
    <ChartFactory
      definition={definition}
      data={chartData.profileVisualsData[definition.queryAlias].nodes}
      profiles={profiles}
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

function ProfilePage({ indicatorId, sectionedCharts, language, geoId }) {
  const router = useRouter();
  const theme = useTheme();

  const [activeTab, setActiveTab] = useState(
    process.browser && window.location.hash.slice(1)
      ? window.location.hash.slice(1)
      : "demographics" // 'all'
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
        .map(({ visual }) => visual),
    [filterByGeography, sectionedCharts]
  );

  const { profiles, chartData } = useProfileLoader({
    geoId,
    visuals,
    populationTables: config.populationTables,
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

  const country = useMemo(() => {
    if (!profiles.profile || !profiles.profile.geoLevel) {
      return {};
    }
    if (profiles.profile.geoLevel === "country") {
      return config.countries.find(
        (c) => c.isoCode === profiles.profile.geoCode
      );
    }
    return config.countries.find((c) => c.isoCode === profiles.parent.geoCode);
  }, [profiles]);

  const onClickGeoLayer = useCallback(
    (area) => {
      router.push(`/${area.codes.AFR}`);
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
      profileTabs.map(
        (tab) =>
          (activeTab === "all" || activeTab === tab.slug) && (
            <Grid item container id={tab.slug} key={tab.slug}>
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
                    className={classes.container}
                  >
                    <InsightContainer
                      key={chart.id}
                      actions={{
                        handleShare: shareIndicator.bind(
                          null,
                          id,
                          null,
                          "/api/share"
                        ),
                        handleShowData: null,
                        handleCompare: null,
                      }}
                      classes={{
                        insight: classes.insight,
                        actionsCompareButton: classes.actionsCompareButton,
                        actionsShareButton: classes.actionsShareButton,
                        actionsShowDataButton: classes.actionsShowDataButton,
                        actionsRoot: classes.actionsRoot,
                        root: classes.containerRoot,
                        sourceGrid: classes.containerSourceGrid,
                        sourceLink: classes.containerSourceLink,
                        insightAnalysisLink:
                          classes.containerInsightAnalysisLink,
                        insightDataLink: classes.containerInsightDataLink,
                        insightGrid: classes.insightGrid,
                        highlightGrid:
                          chart.type === "flourish" &&
                          classes.hideHighlightGrid,
                        title: classes.title,
                      }}
                      embedCode={`<iframe
                  id="${chart.id}"
                  src="${config.url}/embed/${embedPath}"
                  title="${chart.title}"
                  allowFullScreen
                />`}
                      insight={
                        {
                          // dataLink: {
                          //   href: `/profiles/${country.slug}`,
                          //   title: 'Read the country analysis'
                          // }
                        }
                      }
                      loading={chartData.isLoading}
                      logo={logo}
                      source={source}
                      title={chart.title}
                      dataTable={{
                        tableTitle: chart.visual.table.slice(3),
                        dataValueTitle: chart.visual.y,
                        dataLabelTitle: chart.visual.x,
                        groupByTitle: chart.visual.groupBy,
                        rawData:
                          !chartData.isLoading &&
                          chartData.profileVisualsData[chart.visual.queryAlias]
                            .nodes,
                      }}
                    >
                      {chart.type === "hurumap"
                        ? [
                            <Chart
                              key={chart.id}
                              chartData={chartData}
                              definition={{
                                ...chart.stat,
                                typeProps: {
                                  ...chart.stat.typeProps,
                                  classes: {
                                    description: classes.statDescription,
                                    statistic: classes.statStatistic,
                                    subtitle: classes.statSubtitle,
                                  },
                                },
                              }}
                              profiles={profiles}
                              classes={classes}
                            />,
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
                            />,
                          ]
                        : [
                            <div key={chart.id} />,
                            <iframe
                              key={chart.id}
                              width="100%"
                              scrolling="no"
                              frameBorder="0"
                              title={chart.title}
                              src={`${config.WP_HURUMAP_DATA_API}/flourish/${chart.id}`}
                            />,
                          ]}
                    </InsightContainer>
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
  if (country) {
    title = country.shortName;
  }
  return (
    <Page
      takwimu={{ ...config, language }}
      indicatorId={indicatorId}
      title={title}
      classes={{ section: classes.section }}
    >
      {!profiles.isLoading && (
        <ProfileDetail
          profile={{
            geo: profiles.profile,
          }}
          classes={{ section: classes.section }}
        />
      )}
      <div style={{ width: "100%", height: "500px", overflow: "hidden" }}>
        <MapIt
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
            fillOpacity: 0.2,
          }}
          geoLayerFocusStyle={{
            color: "#D6D6D6",
            fillColor: theme.palette.primary.main,
            weight: 2.0,
            opacity: 1.0,
            fillOpacity: 0.5,
          }}
          geoLayerHoverStyle={{
            fillColor: theme.palette.primary.main,
            fillOpacity: 0.4,
          }}
          geoLevel={geoId.split("-")[0]}
          onClickGeoLayer={onClickGeoLayer}
        />
      </div>
      {!profiles.isLoading && (
        <ProfileSection
          profile={{ geo: profiles.profile }}
          tabs={profileTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          // classes={{ section: classes.section }}
        />
      )}
      {console.log("BOOM", {
        geoId,
        country,
        charts,
        chartData,
        profiles,
        visuals,
      }) || <Section>{charts}</Section>}
    </Page>
  );
}

ProfilePage.propTypes = {
  indicatorId: PropTypes.string,
  language: PropTypes.string.isRequired,
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
