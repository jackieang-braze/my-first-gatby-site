import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPost = () => {
  return (
    <Layout pageTitle="Blog Posts">
      <p>My blog post contents will go here (eventually).</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Blog Posts" />

export default BlogPost