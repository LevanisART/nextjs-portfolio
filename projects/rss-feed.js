const fs = require('fs')
const path = require('path')
const projects = require('./get-projects')
const { siteMeta } = require('../portfolio.config')

// https://jsonfeed.org/version/1
const feed = {
  version: 'https://jsonfeed.org/version/1',
  title: siteMeta.title,
  home_page_url: siteMeta.siteUrl,
  feed_url: `${siteMeta.siteUrl}/feed.json`,
  description: siteMeta.description,
  icon: `${siteMeta.siteUrl}/static/apple-touch-icon-152x152.png`,
  favicon: `${siteMeta.siteUrl}/favicon.ico`,
  author: {
    name: siteMeta.author,
    url: siteMeta.siteUrl,
    avatar: `${siteMeta.siteUrl}/static/_jolvera-avatar.jpg`
  },
  items: projects.map(project => ({
    id: `${siteMeta.siteUrl}${project.path}`,
    url: `${siteMeta.siteUrl}${project.path}`,
    title: project.title,
    content_text: `${project.description} - ${siteMeta.siteUrl}${project.path}`,
    description: project.description,
    category: project.category,
    dribbble: project.dribbble,
    website: project.website,
    image: `${siteMeta.siteUrl}${project.image}`,
    date_published: project.publishedAt
  }))
}

fs.writeFileSync(path.join('./.next/static', 'feed.json'), JSON.stringify(feed))
