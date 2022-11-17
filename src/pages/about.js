// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! My name's Jackie :D</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About the Author"/>


// Step 3: Export your component
export default AboutPage