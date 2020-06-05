import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

import dynamic from "next/dynamic";

import { RichTypography } from "@commons-ui/core";

import ChartFactory from "@hurumap-ui/charts/ChartFactory";
import useProfileLoader from "@hurumap-ui/core/useProfileLoader";

import config from "config";

import FacebookIcon from "assets/Icon awesome-facebook-f-b.svg";
import InstagramIcon from "assets/Icon awesome-instagram-b.svg";
import LinkedInIcon from "assets/Icon awesome-linkedin-in-b.svg";
import TwitterIcon from "assets/Icon awesome-twitter-b.svg";
import logo from "assets/logo-outbreak-small.png";

import useStyles from "./useStyles";

const ChartContainer = dynamic(
  () => import("@hurumap-ui/core/ChartContainer"),
  {
    ssr: false,
  }
);

function Chart({ data, definition, isLoading, profiles }) {
  return isLoading ? (
    <div />
  ) : (
    <ChartFactory
      definition={definition}
      data={data}
      profiles={profiles}
      disableShowMore
    />
  );
}

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  definition: PropTypes.shape({
    queryAlias: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  profiles: PropTypes.shape({}).isRequired,
};

function Container({ action, children, featuredChart, ...props }) {
  const classes = useStyles(props);
  const { type, id, geoId } = featuredChart;

  const [chart, setChart] = useState();
  useEffect(() => {
    const url = `${config.WP_HURUMAP_DATA_API}/charts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setChart(
          data && {
            ...data,
            visual: {
              ...data.visual,
              queryAlias: data.visual.queryAlias || `viz${id}`,
            },
            stat: {
              ...data.stat,
              queryAlias: data.visual.queryAlias || `viz${id}`,
            },
          }
        )
      );
  }, [id]);

  const visuals = useMemo(() => (chart ? [chart.visual] : []), [chart]);
  const { profiles, chartData } = useProfileLoader({ geoId, visuals });

  const source = useMemo(() => {
    const { isLoading, profileVisualsData } = chartData;

    if (!chart || isLoading) {
      return null;
    }

    const {
      visual: { queryAlias },
    } = chart;

    const sourceResult = profileVisualsData[`${queryAlias}Source`];
    return sourceResult && sourceResult.nodes && sourceResult.nodes.length
      ? sourceResult.nodes[0]
      : null;
  }, [chart, chartData]);

  if (
    !chart ||
    (!chartData.isLoading &&
      chartData.profileVisualsData[chart.visual.queryAlias] &&
      chartData.profileVisualsData[chart.visual.queryAlias].nodes &&
      chartData.profileVisualsData[chart.visual.queryAlias].nodes.length === 0)
  ) {
    return null;
  }

  const rawData = !chartData.isLoading
    ? chartData.profileVisualsData[chart.visual.queryAlias].nodes
    : [];

  return (
    <div>
      <ChartContainer
        attribution={`Source: ${
          (source && source.href) || ""
        }<span class="site">${config.name}</span>`}
        logo={logo}
        key={`indicator-${type}-${id}`}
        title={chart.title}
        sourceLink={source && source.href}
        sourceTitle={source && source.title}
        content={{}}
        loading={chartData.isLoading && type === "hurumap"}
        groupActions
        variant="data"
        classes={{
          attribution: classes.attribution,
          attributionSource: classes.attributionSource,
          chart: classes.chart,
          content: classes.content,
          title: classes.title,
          root: classes.chartRoot,
          sourceLink: classes.source,
          groupActionsButton: classes.actionIcon,
        }}
        groupIcons={{
          facebook: {
            icon: <img src={FacebookIcon} alt="Facebook" />,
          },
          twitter: {
            icon: <img src={TwitterIcon} alt="Twitter" />,
          },
          linkedin: {
            icon: <img src={LinkedInIcon} alt="LinkedIn" />,
          },
          instagram: {
            icon: <img src={InstagramIcon} alt="Instagram" />,
          },
          embed: {},
          link: {},
          download: {},
        }}
      >
        <Chart
          key={id}
          isLoading={chartData.isLoading}
          data={rawData}
          definition={chart.visual}
          profiles={profiles}
        />
      </ChartContainer>
      <div className={classes.description}>
        <RichTypography variant="body2">{chart.description}</RichTypography>
      </div>
    </div>
  );
}

export default Container;
