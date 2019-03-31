import React from 'react'
import { graphql } from 'gatsby'
import Aside from '../components/aside'


export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (    
       
      <main className="grid--aside">
      <Aside />
      <article className="blog">
      <header className="blog__header">        
        <div className="container">
          <h1>{frontmatter.title}</h1>                    
          <h3>{frontmatter.date}</h3>          
        </div>        
      </header>
      <div className="blog__post">
        <div 
          className="blog__post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />        
      </div>      
    </article>
    </main>
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