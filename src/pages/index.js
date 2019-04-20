import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`David Crandall`, `web developer`, `react`]} />
    {/* <Navbar />     */}
    <div className="flex-center">
      <header className="header header--flex">
        <div>
          <h1>David Crandall</h1>
          <h3>Full Stack Web Developer</h3>
          <p className="content">
            I am {` `}
            <a
              href="https://crandall.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              David Crandall
            </a>{' '}
            {` `}
            and this is where I write about programming. You may find the code
            for most of my projects on {` `}{' '}
            <a href="https://github.com/dacrands">my github.</a>
          </p>
        </div>
      </header>
      <nav className="pages">
        {data.allMarkdownRemark.edges.map(post => {
          return (
            <Link className="pages__link" to={post.node.frontmatter.path}>
              <div className="pages__link-title">
                <h4>{post.node.frontmatter.title}</h4>
                <small>{post.node.frontmatter.date}</small>
              </div>
              <div className="pages__link-desc">
                <p>{post.node.frontmatter.info}</p>
              </div>
            </Link>
          )
        })}
      </nav>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
