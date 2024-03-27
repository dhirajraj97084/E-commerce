import React from 'react'
import Hero from '../component/hero/Hero'
import Catogry from '../component/catogry/Catogry'
import Products from '../component/bestproducts/Products'
import Layout from '../component/layout/Layout'

function Home() {
  return (
    <Layout>
      <Hero/>
      <Catogry/>
      <Products/>
    </Layout>
  )
}

export default Home
