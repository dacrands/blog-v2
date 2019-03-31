import React from 'react'

import ToViewIt from './ToViewIt'
import BergenStem from './BergenStem'
import Blog from './Blog'
import TimesApp from './TimesApp'
// import CardFive from './CardFive'

const Folio = () => (
  <section className="folio">
      <div className="container">
        <header className="folio__header">
          <h1>Portfolio</h1>
        </header>
        <div className="folio__cards">
          <ToViewIt />
          <BergenStem />
          <TimesApp />
          <Blog />
          {/* <CardFive /> */}
        </div>
      </div>
    </section>
)

export default Folio