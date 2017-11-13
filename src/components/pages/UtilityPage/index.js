import utilityBanner from '/public/banners/utilityBanner.png'
import gameOfLife from '/public/projectimages/gameOfLife.png'
import markdown from '/public/projectimages/markdown.png'
import simon from '/public/projectimages/simon.png'
import { HorizontalRule } from 'components/atoms'
import { Banner } from 'components/molecules'
import { AppList, Footer, Navbar } from 'components/organisms'
import { PageTemplate } from 'components/templates'
import React from 'react'

const UtilityPage = () => (
  <PageTemplate header={<Navbar />} footer={<Footer />}>
    <Banner image={utilityBanner} size="300px" />
    <HorizontalRule />
    <AppList
      apps={[
        { src: gameOfLife, route: 'gameOfLife' },
        { src: markdown, route: 'markdown' },
        { src: simon, route: 'simon' },
      ]}
    />
  </PageTemplate>
)

export default UtilityPage
