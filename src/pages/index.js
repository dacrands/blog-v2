import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'



const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <header className="header header--green"> 
      <div className="container">
        <h1 className="text-focus-in">Blog</h1>
        <hr/>
        <p>This is where I write about programming.</p>
      </div>    
    </header> 
    <div className="pages">
      <div className="pages__container">
        {
          data.allMarkdownRemark.edges.map(post => {
            return <Link className="pages__item"
              to={post.node.frontmatter.path}
            >
              <div className="pages__item-title">
                <h3>{post.node.frontmatter.title}</h3>
                <h4>{post.node.frontmatter.date}</h4>
              </div>                
              <div className="pages__item-content">
                <p>{post.node.frontmatter.info}</p>
              </div>              
              </Link>
          })
        }    
      </div>      
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
