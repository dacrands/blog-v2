import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ToViewIt = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "to-view-it-2.JPG" }) {
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
          <h4>To View It</h4>
          <ul className="card__stack">
            {
              [
                'Flask',
                'MySQL',
                'Docker',
                'DigitalOcean'].map(skill => (
                  <li>{skill}</li>
                ))
            }
          </ul>
          <p>
            A to-do list application that features a scrolling-stocker ticker, weather information,
            and a custom background Youtube video.
        </p>
          <p>
            Features SendGrid email authentication and the YouTube IFrame API.
        </p>
          <div className="card__text-links">
            <a href="https://www.toviewit.xyz/">Site</a>

            <a href="https://github.com/dacrands/flask-smart-monitor">Github</a>
          </div>
        </div>
      </div>
    }
  />
)

export default ToViewIt