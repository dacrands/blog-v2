import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const BergenStem = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bcc-stem.PNG" }) {
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
        <h4>Bergen STEM</h4>
        <ul className="card__stack">
            {
              [
              'React', 
              'Fetch-API', 
              'Webpack', 
              'Google Analytics'].map(skill => (
                <li>{skill}</li>
              ))
            }
          </ul>
          {/* <hr/> */}
        <p>
        React application designed and built for the STEM Department at Bergen Community College. 
        </p>
        <p>
        Collaborated 
        with backend-developer to create a site that showcases student projects, STEM events, and scholarship opportunities.        
        </p>
        <div className="card__text-links">
          <a href="https://www.bergenstem.com/">Site</a>
        
          <a href="https://github.com/dacrands/bergen-reactpack">Github</a>
        </div> 
      </div>      
    </div>    
    }
  />
)



export default BergenStem