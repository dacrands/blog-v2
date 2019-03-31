import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const TimesApp = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "nyt-app.PNG" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
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
          <h4>New York Times App</h4>
          <ul className="card__stack">
            {
              [
                'React',
                'Redux',
                'Sass',
                'Flask',
                'Docker',
                'DigitalOcean'].map(skill => (
                  <li>{skill}</li>
                ))
            }
          </ul>
          <p>Single-page application featuring NYT data. React/Redux front-end, Flask back-end. </p>
          <p>Features an archive search where users can 
            read articles dating back to the year 1900.
          </p>
          <div className="card__text-links">
            <a href="https://www.times.dcrands.com/">Site</a>

            <a href="https://github.com/dacrands/new-york-times-app">Github</a>
          </div>
        </div>
      </div>
    }
  />
)



export default TimesApp