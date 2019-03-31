import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const CardFour = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "wave-port.JPG" }) {
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
          <h4>Portfolio</h4>
          <ul className="card__stack">
            {
              [
                'Gatsby',
                'Netlify',
                'Sass',
              ].map(skill => (
                  <li>{skill}</li>
                ))
            }
          </ul>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur earum dolorum possimus nulla consequatur?</p>
          <div className="card__text-links">
            <a href="">Site</a>

            <a href="">Github</a>
          </div>
        </div>
      </div>
    }
  />
)



export default CardFour