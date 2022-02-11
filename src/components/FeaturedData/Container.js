import { RichTypography } from "@commons-ui/core";
import ChartFactory from "@hurumap-ui/charts/ChartFactory";
import useProfileLoader from "@hurumap-ui/core/useProfileLoader";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import React, { useEffect, useMemo, useState } from "react";

import useStyles from "./useStyles";

import FacebookIcon from "@/outbreakafrica/assets/Icon awesome-facebook-f-b.svg";
import InstagramIcon from "@/outbreakafrica/assets/Icon awesome-instagram-b.svg";
import LinkedInIcon from "@/outbreakafrica/assets/Icon awesome-linkedin-in-b.svg";
import TwitterIcon from "@/outbreakafrica/assets/Icon awesome-twitter-b.svg";
import DownloadIcon from "@/outbreakafrica/assets/icon download.svg";
import EmbedIcon from "@/outbreakafrica/assets/icon embed.svg";
import LinkIcon from "@/outbreakafrica/assets/icon web.svg";
import logo from "@/outbreakafrica/assets/logo-outbreak-small.png";
import config from "@/outbreakafrica/config";

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

function Container({ featuredChart, ...props }) {
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
    <>
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
            icon: (
              <img
                className={classes.actionIcon}
                src={FacebookIcon}
                alt="Facebook"
              />
            ),
          },
          twitter: {
            icon: (
              <img
                className={classes.actionIcon}
                src={TwitterIcon}
                alt="Twitter"
              />
            ),
          },
          linkedin: {
            icon: (
              <img
                className={classes.actionIcon}
                src={LinkedInIcon}
                alt="LinkedIn"
              />
            ),
          },
          instagram: {
            icon: (
              <img
                className={classes.actionIcon}
                src={InstagramIcon}
                alt="Instagram"
              />
            ),
          },
          embed: {
            icon: (
              <img className={classes.actionIcon} src={EmbedIcon} alt="Embed" />
            ),
          },
          link: {
            icon: (
              <img className={classes.actionIcon} src={LinkIcon} alt="Link" />
            ),
          },
          download: {
            icon: (
              <img
                className={classes.actionIcon}
                src={DownloadIcon}
                alt="Download"
              />
            ),
          },
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
    </>
  );
}

Container.propTypes = {
  featuredChart: PropTypes.shape({
    geoId: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

Container.defaultProps = {};

export default Container;
