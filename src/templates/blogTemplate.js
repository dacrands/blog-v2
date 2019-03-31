import React from 'react'
import { graphql } from 'gatsby'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog">
      <Navbar/>
      <header className="header">
        
        <div className="container">
          <h1>{frontmatter.title}</h1>          
          <hr/>
          <h3>{frontmatter.date}</h3>          
        </div>        
      </header>
      <div className="blog__post">
        <div 
          className="blog__post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />        
      </div>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        info
      }
    }
  }
`