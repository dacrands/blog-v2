import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query AsideQuery {
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
    `}
    render={data => (
      <aside className="aside">
        <nav className="aside__nav">
          <Link to="/" className="aside__nav-title">
            <h2>Blog</h2>
            <small>by David Crandall</small>
          </Link>
          {data.allMarkdownRemark.edges.map(post => {
            return (
              <Link
                className="aside__nav-link"
                to={post.node.frontmatter.path}
                activeStyle={{ color: '#a8b1ce' }}
              >
                <p>{post.node.frontmatter.title}</p>
                <small>{post.node.frontmatter.date}</small>
              </Link>
            )
          })}
        </nav>
      </aside>
    )}
  />
)
