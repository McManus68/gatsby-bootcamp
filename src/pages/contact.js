import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Page</h1>
      <p>The best way to reach me is via email McManus@Mac.com</p>
      <p>
        Learn more about me..{' '}
        <a
          href="https://emmanuel-tarrou.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Mon CV
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
