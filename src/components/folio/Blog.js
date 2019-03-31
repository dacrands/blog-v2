import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Blog = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "blog-landing.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => 
    <div className="card">
      <div className="card__info">        
        <Img className="card__img" fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>      
      <div className="card__text">
        <h4>Blog</h4>
        <ul className="card__stack">
            {
              [
              'Gatsby', 
              'Styled-Components', 
              'Sass', 
              'YAML Front Matter'].map(skill => (
                <li>{skill}</li>
              ))
            }
          </ul>
          <p>Personal blog where I chronicle my 
            programming journey, write tutorials, and
            discuss web development.
          </p>
        <p>
        GatsbyJS build hosted on gitpages. Features a markdown blog that supports YAML front matter.
        </p>
        <div className="card__text-links">
          <a href="https://dacrands.github.io/">Site</a>        
          <a href="https://github.com/dacrands/gatsby-blog">Github</a>
        </div> 
      </div>
      
    </div>    
    }
  />
)



export default Blog