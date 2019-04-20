import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Success = () => (
  <Layout>
    <div className="success">
      <h1 className="success__check">&#10003;</h1>
      <div className="success__text">
        <h1>Message Sent</h1>
        <h3>Thank you!</h3>
      </div>
      <Link className="button" to="/">
        Go back home
      </Link>
    </div>
  </Layout>
)

export default Success
