import { Fragment } from 'react'
import Layout from 'components/layouts/Layout'
import CssBaseline from '@material-ui/core/CssBaseline'

import ProductHero from 'components/views/home/blocks/ProductHero'
import ProductValues from 'components/views/home/blocks/ProductValues'
import ProductCategories from 'components/views/home/blocks/ProductCategories'
import ProductSmokingHero from 'components/views/home/blocks/ProductSmokingHero'

export default function Album() {
  return (
    <Fragment>
      <CssBaseline />
      <Layout>
        <main>
          <ProductHero />
          <ProductCategories />
          <ProductValues />
          <ProductSmokingHero />
        </main>
      </Layout>
    </Fragment>
  )
}
