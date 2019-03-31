import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Folio from '../components/folio/Folio'
import Landing from '../components/landing'
import Contact from '../components/contact'


import Skills from '../components/skills'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <section className="info">
      <div className="info__item">  
        <h2>Frontend</h2>
        <p>
        I strive to build user-interfaces that are accessible,
        responsive, and fast! I primarily build single-page apps
         with React, particularly the static-site 
        generator GatsbyJS. 
        </p>
      </div>
      <div className="info__item">  
        <h2>Backend</h2>
        <p>
          {/* I use Flask to build the APIs that
          power my frontend apps.  */}
          Email authentication, Bcrypt password encryption,
          cookie-authentication, JSON Web Tokens &mdash; I'm not
          just writing these words for SEO purposes, I actually
          use these things!
        </p>
      </div>
      <div className="info__item">  
        <h2>Hosting</h2>
        <p>
          If your site doesn't 
          require a database, then web-hosting is free using
          Netlify or Gitpages. If your site does require a 
          database, then web-hosting is cheap using
          DigitalOcean droplets and Docker containers.
        </p>
      </div>
    </section>
    <Folio />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
