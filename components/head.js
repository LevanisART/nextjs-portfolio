import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'
import { siteMeta } from '../portfolio.config'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';

const defaultDescription = siteMeta.description;
const defaultOGURL = siteMeta.siteUrl;
const defaultOGImage = siteMeta.image;
const defaultKeywords = siteMeta.keywords;

const Head = props => (
  <NextHead>
    <meta charSet='UTF-8' />
    <title>
      {props.title ? `${props.title} - ${siteMeta.name}` : siteMeta.name}
    </title>
    <meta
      name='description'
      content={props.description || defaultDescription}
    />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel="manifest" href="/manifest.json" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

    <link
      rel='alternate'
      title='RSS Feed'
      type='application/json'
      href={`${siteMeta.siteUrl}/feed.json`}
    />

    <meta property='og:url' content={props.url || defaultOGURL} />
    <meta property='og:title' content={props.title || ''} />
    <meta
      property='og:description'
      content={props.description || defaultDescription}
    />
    <meta name="keywords" content={props.keywords || defaultKeywords} />
    <meta
      name='twitter:image'
      content={`${siteMeta.siteUrl}${props.ogImage || defaultOGImage}`}
    />
    <meta
      property='og:image'
      content={`${siteMeta.siteUrl}${props.ogImage || defaultOGImage}`}
    />
    <meta property='og:image:width' content='1600' />
    <meta property='og:image:height' content='1200' />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string
}

export default Head
