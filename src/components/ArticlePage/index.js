import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { RichTypography, Section } from "@commons-ui/core";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import Aside from "@/outbreakafrica/components/Content/Aside";
import FlourishContainer from "@/outbreakafrica/components/FeaturedData/FlourishContainer";
import HURUmapContainer from "@/outbreakafrica/components/FeaturedData/Container";
import Link from "@/outbreakafrica/components/Link";
import Portal from "@/outbreakafrica/components/Portal";
import Subscribe from "@/outbreakafrica/components/Subscribe";
import getChartElements from "utils/getChartElements";

import facebook from "@/outbreakafrica/assets/Icon awesome-facebook-f-b.svg";
import linkedIn from "@/outbreakafrica/assets/Icon awesome-linkedin-in-b.svg";
import twitter from "@/outbreakafrica/assets/Icon awesome-twitter-b.svg";

import config from "@/outbreakafrica/config";
import Author from "./Author";
import useStyles from "./useStyles";

function ArticlePage({
  post,
  author,
  link,
  media,
  pageTitle,
  subscribe,
  ...props
}) {
  const classes = useStyles(props);
  const [chartElements, setChartElements] = useState({
    charts: [],
  });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    setChartElements(getChartElements(document, "charts"));
  }, [post]);

  if (!post) {
    return null;
  }

  let date = new Date(post.date).toDateString().slice(4, 10);
  if (post.acf.attributes && post.acf.attributes.date) {
    date = post.acf.attributes.date.slice(0, -6);
  }

  let imageUrl = "";
  if (media) {
    if (isDesktop) {
      imageUrl = media.full.source_url;
    } else {
      imageUrl = media.medium_large
        ? media.medium_large.source_url
        : media.medium.source_url;
    }
  }
  const articleUrl = `${config.url}${link.href}/${post.slug}`;

  return (
    <div className={classes.root}>
      {!isDesktop && (
        <Section classes={{ root: classes.section }}>
          <Link
            href={link.href}
            as={link.as}
            underline="none"
            color="secondary"
            variant="subtitle2"
            className={classes.topLink}
          >
            <ArrowBackIosIcon />
            {link.title}
          </Link>
        </Section>
      )}
      <img src={imageUrl} alt="" className={classes.heroImage} />
      <Section classes={{ root: classes.section }}>
        <Grid container>
          <Grid item container xs={12}>
            <Grid item md={3} />
            <Grid item container xs={12} md={6}>
              <RichTypography variant="h3" className={classes.title}>
                {post.title.rendered}
              </RichTypography>
              <Grid
                item
                container
                className={classes.attributes}
                justify="flex-start"
              >
                <Grid item xs={12} className={classes.readAttr}>
                  <RichTypography variant="caption" className={classes.date}>
                    {date}
                  </RichTypography>
                </Grid>
                <Grid item xs={12} className={classes.socialIcons}>
                  <LinkedinShareButton
                    title={post.title.rendered}
                    url={articleUrl}
                    additionalProps={{
                      "ga-on": "click",
                      "ga-event-category": "linkedin",
                      "ga-event-action": "share",
                      "ga-event-label": articleUrl,
                    }}
                    className={classes.link}
                  >
                    <img
                      src={linkedIn}
                      alt="LinkedIn"
                      className={classes.icon}
                    />
                  </LinkedinShareButton>
                  <FacebookShareButton
                    title={post.title.rendered}
                    hashtag="COVID-19"
                    url={articleUrl}
                    additionalProps={{
                      "ga-on": "click",
                      "ga-event-category": "facebook",
                      "ga-event-action": "send",
                      "ga-event-label": articleUrl,
                    }}
                    className={classes.link}
                  >
                    <img
                      src={facebook}
                      alt="Facebook"
                      className={classes.icon}
                    />
                  </FacebookShareButton>
                  <TwitterShareButton
                    title={post.title.rendered}
                    hashtags={["COVID-19"]}
                    additionalProps={{
                      "ga-on": "click",
                      "ga-event-category": "twitter",
                      "ga-event-action": "tweet",
                      "ga-event-label": articleUrl,
                    }}
                    url={articleUrl}
                    className={classes.link}
                  >
                    <img src={twitter} alt="Twitter" className={classes.icon} />
                  </TwitterShareButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={3} />
          </Grid>
          <Grid item container xs={12} className={classes.articleContent}>
            <Grid item md={3} className={classes.authorDiv}>
              <Author author={author} variant="compact" />
              <Aside classes={{ root: classes.aside }}>
                <Subscribe subscribe={subscribe} variant="compact" />
              </Aside>
            </Grid>
            <Grid item md={6}>
              <RichTypography variant="subtitle1" className={classes.highlight}>
                {post.excerpt.rendered}
              </RichTypography>
              <RichTypography variant="body2" className={classes.content}>
                {post.content.rendered}
              </RichTypography>
              {chartElements.charts.map((chart) => {
                // eslint-disable-next-line no-param-reassign
                chart.element.innerHTML = "";
                if (chart.type === "hurumap") {
                  return (
                    <Portal key={chart.element.id} element={chart.element}>
                      <HURUmapContainer
                        featuredChart={chart}
                        classes={{ chartRoot: classes.chartShadow }}
                      />
                    </Portal>
                  );
                }
                return (
                  <Portal key={chart.element.id} element={chart.element}>
                    <FlourishContainer
                      featuredChart={chart}
                      classes={{ chartRoot: classes.chartShadow }}
                    />
                  </Portal>
                );
              })}
              <Author
                author={author}
                variant={isDesktop ? "full" : "compact"}
                classes={
                  isDesktop && {
                    contentDiv: classes.authorContentDiv,
                    root: classes.authorRoot,
                  }
                }
              />
              {post.acf.source_attribution &&
                post.acf.source_attribution.description !== "" && (
                  <Grid item container className={classes.dataSource}>
                    <Grid item md={6}>
                      <RichTypography variant="subtitle2">
                        {post.acf.source_attribution.title}
                      </RichTypography>
                      <RichTypography
                        variant="caption"
                        className={classes.description}
                      >
                        {post.acf.source_attribution.description}
                      </RichTypography>
                    </Grid>
                    <Grid item md={6}>
                      <img
                        src={post.acf.source_attribution.background_image}
                        alt={post.acf.title}
                      />
                    </Grid>
                  </Grid>
                )}
            </Grid>
            <Grid item md={3} />
          </Grid>
        </Grid>
      </Section>
      {!isDesktop && (
        <Subscribe
          subscribe={subscribe}
          classes={{ section: classes.section }}
        />
      )}
    </div>
  );
}

ArticlePage.propTypes = {
  author: PropTypes.shape({}).isRequired,
  link: PropTypes.shape({
    as: PropTypes.string,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  media: PropTypes.shape({}).isRequired,
  post: PropTypes.shape({}).isRequired,
  subscribe: PropTypes.shape({}).isRequired,
};

export default ArticlePage;
