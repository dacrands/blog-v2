import React from 'react'

const Footer = () => (
  <footer className="footer">
    <small>
      {/* <a href="">Resume</a> */}
      <ul>
        <li>
          <a className="footer__link" href="mailto:davecrands@gmail.com">
            Email
          </a>
        </li>
        <li>
          <a
            className="footer__link"
            href="https://github.com/dacrands"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </small>
    <small>
      © {new Date().getFullYear()},{` `}
      <a
        className="citation"
        href="http://crandall.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        David Crandall
      </a>
    </small>
  </footer>
)

export default Footer
