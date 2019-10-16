import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const ThirdPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>This page is built easily by copying the 2nd page !</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage;
