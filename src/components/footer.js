import React from 'react'

const Footer = () => (
  <footer className="footer">
  <div>
    {/* <a href="">Resume</a> */}
    <a className="footer__link" href="https://github.com/dacrands">Github</a>
    <a className="footer__link" href="mailto:davecrands@gmail.com">Email</a>
  </div>
  <div>
    © {new Date().getFullYear()},
              {` `}
    David Crandall
              </div>
  </footer>
)


export default Footer
