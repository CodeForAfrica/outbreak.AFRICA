import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { DocumentsAndDatasets, Section } from '@commons-ui/core';

import datasetsIcon from 'assets/icon-datasets.svg';
import docsIcon from 'assets/icon-docs.svg';
import imgHighlight from 'assets/illo-02.png';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  root: {
    backgroundColor: palette.primary.main,
  },
  section: {},
  datasetData: {
    backgroundColor: '#4933ff',
  },
  img: {
    width: '100%',
    background: `transparent url(${imgHighlight}) 50% 50% no-repeat`,
    backgroundSize: 'cover',
    height: '20rem',
    [breakpoints.up('md')]: {
      width: '27.7143rem',
      height: '28rem',
    },
    [breakpoints.up('lg')]: {
      width: '37.7143rem',
      height: '38rem',
    },
  },
}));

function FeaturedResearch(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <DocumentsAndDatasets
          title="Featured Research"
          highlightChildren={<div className={classes.img} />}
          description="Get access to the best original scientific and medical research by African experts who understand local context."
          documentContent={{
            contentType: 'Document',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            linkTitle: 'LEARN MORE',
            children: <img src={docsIcon} alt="Documents" />,
          }}
          datasetContent={{
            contentType: 'Dataset',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            linkTitle: 'LEARN MORE',
            children: <img src={datasetsIcon} alt="Datasets" />,
          }}
          classes={{
            datasetData: classes.datasetData,
          }}
        />
      </Section>
    </div>
  );
}

export default FeaturedResearch;
