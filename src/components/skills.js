import React from 'react'

import HtmlSvg from '../images/skills/html-5-logo.svg'
import FlaskSvg from '../images/skills/flask-logo.svg'
import CssSvg from '../images/skills/css-3-logo.svg'
import PostmanSvg from '../images/skills/postman-logo.svg'
import SassSvg from '../images/skills/sass-logo.svg'
import WebpackSvg from '../images/skills/webpack-logo.svg'
import ReduxSvg from '../images/skills/redux-logo.svg'
import ReactSvg from '../images/skills/react-logo.svg'
import NodeSvg from '../images/skills/nodejs-logo.svg'
import HerokuSvg from '../images/skills/heroku-logo.svg'
import JsSvg from '../images/skills/js-logo.svg'

const Skills = () => (
  <section className="logos">
    <div className="logos__container">
      <div className="container">
        <div className="logos__title">
          <h1>Skills</h1>        
          <h3>Most of my projects feature the following...</h3>
        </div>        
        

        <table className="logos__table">
          <tr>
            <th>Features</th>
            <td>
            <ul>
              {
                [
                  "AJAX", 
                  "responsive web design", 
                  "semantic HTML", 
                  "email authentication", 
                  "REST APIs",
                  "relational databases"
                ].map(skill => (
                  <li>{skill}</li>
                ))
              }              
            </ul>
            </td>
          </tr>          
          <tr>
            <th>Languages</th>
            <td>
            <ul>
              {
                [
                  "Python", 
                  "JavaScript", 
                  "HTML", 
                  "CSS"
                ].map(skill => (
                  <li>{skill}</li>
                ))
              }              
            </ul>
            </td>
          </tr>          
          <tr>
            <th>Frameworks/
              <br/>
              Libraries</th>
            <td>
            <ul>
            {
                [
                  "React", 
                  "Flask", 
                  "Redux", 
                  "Gatsby", 
                  "Webpack",
                  "Sass",                   
                ].map(skill => (
                  <li>{skill}</li>
                ))
              } 
            </ul>
            </td>
          </tr>
          <tr>
            <th>Tools</th>
            <td>
            <ul>
            {
                [
                  "Git", 
                  "Nginx", 
                  "Postman",                                     
                  "PuTTy",
                  "Prettier", 
                ].map(skill => (
                  <li>{skill}</li>
                ))
              } 
            </ul>
            </td>
          </tr>
          <tr>
            <th>Hosting</th>
            <td>
            <ul>
            {
                [
                  "DigitalOcean", 
                  "Heroku", 
                  "Gitpages", 
                  "Netlify ",                                
                ].map(skill => (
                  <li>{skill}</li>
                ))
              } 
            </ul>
            </td>
          </tr>
        </table>
      </div>

      <div className="logos__inner">
        <span className="logos__svgs">
          <HtmlSvg style={styles.svg} />
          <CssSvg style={styles.svg} />
          <JsSvg style={styles.svg} />
          <ReactSvg style={styles.svg} />
          <NodeSvg style={styles.svg} />
          <SassSvg style={styles.svg} />
          <PostmanSvg style={styles.svg} />
          <WebpackSvg style={styles.svg} />
          <ReduxSvg style={styles.svg} />
          <FlaskSvg style={styles.svg} />
          <HerokuSvg style={styles.svg} />
        </span>
        <span className="logos__svgs">
          <HtmlSvg style={styles.svg} />
          <CssSvg style={styles.svg} />
          <JsSvg style={styles.svg} />
          <ReactSvg style={styles.svg} />
          <NodeSvg style={styles.svg} />
          <SassSvg style={styles.svg} />
          <PostmanSvg style={styles.svg} />
          <WebpackSvg style={styles.svg} />
          <ReduxSvg style={styles.svg} />
          <FlaskSvg style={styles.svg} />
          <HerokuSvg style={styles.svg} />
        </span>
      </div>
    </div>
  </section>
)

const styles = {
  svg: {
    height: '200px',
    width: '200px',
    margin: '1rem',
    // float: 'left',
  }
}

export default Skills;

