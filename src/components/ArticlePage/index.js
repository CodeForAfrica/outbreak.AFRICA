import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { A, RichTypography, Section } from "@commons-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import logo from "assets/logo-C4A.svg";
import facebook from "assets/Icon awesome-facebook-f-b.svg";
import instagram from "assets/Icon awesome-instagram-b.svg";
import linkedIn from "assets/Icon awesome-linkedin-in-b.svg";
import twitter from "assets/Icon awesome-twitter-b.svg";

import { getPostById, getPostBySlug } from "cms";
import getChartElements from "utils/getChartElements";
import Aside from "components/Content/Aside";
import Author from "./Author";
import Link from "components/Link";
import HURUmapContainer from "components/FeaturedData/Container";
import FlourishContainer from "components/FeaturedData/FlourishContainer";
import Portal from "components/Portal";
import Subscribe from "components/Subscribe";
import useStyles from "./useStyles";

function ArticlePage({ link, pageTitle, slug, subscribe, ...props }) {
  const classes = useStyles(props);
  const [article, setArticle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [media, setMedia] = useState(null);
  const [chartElements, setChartElements] = useState({
    charts: []
  });


  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    async function fetchArticle() {
      const [post] = await getPostBySlug("posts", slug);
      setArticle(post);
      
      if(post) {
          const authorObject = await getPostById("users", post.author);
          setAuthor(authorObject);

          const { media_details: { sizes }} = await getPostById("media", post.featured_media);
          setMedia(sizes);
      }
    }
    fetchArticle();
  }, [slug]);

  useEffect(() => {
    setChartElements(getChartElements(document, 'charts'));
  }, [slug, article]);

  if (!article) {
    return null;
  }
  const date = new Date(article.date).toDateString().slice(4, 10);
  let imageUrl = "";
  if (media) {
      imageUrl = isDesktop? media["full"]["source_url"] : media["medium_large"]["source_url"];
  }
  return (
    <div className={classes.root}>
      {!isDesktop && (
        <Section classes={{ root: classes.section }}>
            <Link
              href={link}
              as={link}
              underline="none"
              color="secondary"
              variant="subtitle2"
              className={classes.topLink}
            >
              <ArrowBackIosIcon />
              {pageTitle}
            </Link>
          </Section>
      )}
      <img src={imageUrl} alt="" className={classes.heroImage} />
      <Section classes={{ root: classes.section }}>
      <Grid container>
        <Grid item container xs={12}>
          <Grid item md={3} />
          <Grid item container xs={12} md={6}>
            <Typography variant="h3" className={classes.title}>
              {article.title.rendered}
            </Typography>
            <Grid
              item
              container
              className={classes.attributes}
              direction={isDesktop ? "column" : "row"}
            >
              <Grid
                item
                container
                direction={isDesktop ? "row" : "row-reverse"}
                alignItems="flex-end"
                justify={!isDesktop && "space-between"}
              >
                <Grid item xs={6}>
                  <img
                    src={logo}
                    alt="Code for Africa"
                    className={classes.logo}
                  />
                </Grid>
                <Grid
                  item
                  container
                  xs={6}
                  className={classes.readAttr}
                  direction={isDesktop ? "column" : "column-reverse"}
                >
                  <Typography
                    variant="caption"
                    className={classes.organization}
                  >
                    Code for Africa
                  </Typography>
                  <Typography variant="caption" className={classes.date}>
                    {date}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item className={classes.socialIcons}>
                <A href="" color="textSecondary" className={classes.link}>
                  <img src={linkedIn} alt="LinkedIn" className={classes.icon} />
                </A>
                <A href="" color="textSecondary" className={classes.link}>
                  <img
                    src={instagram}
                    alt="Instagram"
                    className={classes.icon}
                  />
                </A>
                <A href="" color="textSecondary" className={classes.link}>
                  <img src={facebook} alt="Facebook" className={classes.icon} />
                </A>
                <A href="" color="textSecondary" className={classes.link}>
                  <img src={twitter} alt="Twitter" className={classes.icon} />
                </A>
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
          <Grid item md={6} >
            <RichTypography variant="subtitle1" className={classes.highlight}>
                {article.excerpt.rendered}
            </RichTypography>
            <RichTypography variant="body2" className={classes.content}>
              {article.content.rendered}
            </RichTypography>
            {chartElements.charts.map(
              (chart) => {
                // eslint-disable-next-line no-param-reassign
                chart.element.innerHTML = '';
                if (chart.type === 'hurumap') {
                  return (
                    <Portal key={chart.element.id} element={chart.element}>
                      <HURUmapContainer
                        featuredChart={chart}
                        classes={{ chartRoot: classes.chartShadow }}
                      />
                    </Portal>
                  );
                } else {
                  return(
                  <Portal key={chart.element.id} element={chart.element}>
                      <FlourishContainer
                        featuredChart={chart}
                        classes={{ chartRoot: classes.chartShadow }}
                      />
                    </Portal>
                  )
                }
              }
            )}
            <Author 
              author={author} 
              variant={isDesktop? "full" : "compact"}
              classes={ isDesktop && {
                contentDiv: classes.authorContentDiv,
                root: classes.authorRoot,
              }}
            />
            {article.acf.source_attribution && (
            <Grid item container className={classes.dataSource}>
              <Grid item md={6}>
                <Typography variant="subtitle2">
                  {article.acf.source_attribution.title}
                </Typography>
                <RichTypography variant="caption" className={classes.description}>
                  {article.acf.source_attribution.description}
                </RichTypography>
              </Grid>
              <Grid item md={6}>
                <img src={article.acf.source_attribution.background_image} alt={article.acf.title}/>
              </Grid>
            </Grid>
            )}
          </Grid>
          <Grid item md={3} />
        </Grid>
        </Grid>
      </Section>
      
    </div>
  );
}

ArticlePage.propTypes = {
  link: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  subscribe: PropTypes.shape({}).isRequired,
};

export default ArticlePage;
