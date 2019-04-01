import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Navbar from '../components/navbar'



const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`David Crandall`, `web developer`, `react`]} />
    <Navbar />    
    <header className="header"> 
      <div className="container">
        <h1>David's Blog</h1>        
        <p className="">I am <a href="https://crandall.dev" target="_blank" rel="noopener noreferrer">David Crandall</a> and 
        this is where I write about programming.</p>      
      </div>    
    </header> 
      <div className="pages">
        {
          data.allMarkdownRemark.edges.map(post => {
            return <Link className="pages__link"
              to={post.node.frontmatter.path}
            >
              <div className="pages__link-title">
                <h3>{post.node.frontmatter.title}</h3>
                <small>{post.node.frontmatter.date}</small>
              </div>                
              <div className="pages__link-desc">
                <p>{post.node.frontmatter.info}</p>
              </div>              
              </Link>
          })
        }    
      </div>             
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort:{ order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
            info
          }
        }
      }
    }
  }
`

export default IndexPage
